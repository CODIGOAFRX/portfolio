import { test, expect } from "@playwright/test";

function tone(hz: number, seconds = 3, sampleRate = 44100) {
  const n = sampleRate * seconds,
    buffer = Buffer.alloc(44 + n * 2);
  buffer.write("RIFF");
  buffer.writeUInt32LE(buffer.length - 8, 4);
  buffer.write("WAVEfmt ", 8);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++)
    buffer.writeInt16LE(
      Math.round(0.4 * 32767 * Math.sin((2 * Math.PI * hz * i) / sampleRate)),
      44 + i * 2,
    );
  return buffer;
}

test("full-window white canvas, bottom settings and complete playback controls", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("./");
  await expect(page.locator("canvas")).toBeVisible();
  expect(
    await page
      .locator(".app")
      .evaluate((e) => getComputedStyle(e).backgroundColor),
  ).toBe("rgb(255, 255, 255)");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollHeight <= innerHeight,
    ),
  ).toBe(true);
  await expect(
    page.getByRole("region", { name: "Ajustes", exact: true }),
  ).toHaveCount(0);
  const canvas = await page.locator("canvas").boundingBox();
  expect(canvas!.width).toBe(1440);
  expect(canvas!.height).toBeGreaterThan(850);
  await page.getByRole("button", { name: "Probar demo", exact: true }).click();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect
    .poll(async () =>
      Number(
        await page
          .getByRole("slider", { name: "Posición de reproducción" })
          .inputValue(),
      ),
    )
    .toBeGreaterThan(0.5);
  await page.getByRole("button", { name: "Silenciar", exact: true }).click();
  await expect(
    page.getByRole("slider", { name: "Volumen", exact: true }),
  ).toHaveValue("0");
  await page
    .getByRole("button", { name: "Activar sonido", exact: true })
    .click();
  await page.getByRole("button", { name: "Pausar", exact: true }).click();
  await page
    .getByRole("slider", { name: "Posición de reproducción" })
    .fill("16");
  await expect(
    page.getByRole("slider", { name: "Posición de reproducción" }),
  ).toHaveValue("16");
  await page.getByRole("button", { name: "Volver al inicio" }).click();
  await expect(
    page.getByRole("slider", { name: "Posición de reproducción" }),
  ).toHaveValue("0");
  await page.getByRole("button", { name: "Ajustes", exact: true }).click();
  const sheet = await page
      .getByRole("region", { name: "Ajustes", exact: true })
      .boundingBox(),
    player = await page.locator(".player").boundingBox();
  expect(sheet!.width).toBeGreaterThan(900);
  expect(sheet!.y).toBeGreaterThan(500);
  expect(sheet!.y + sheet!.height).toBeLessThan(player!.y);
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "metal",
  );
  await expect(page.getByRole("combobox", { name: "Fondo" })).toHaveValue(
    "light",
  );
  await page.getByRole("button", { name: "Estilo Nácar", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "pearl",
  );
  await page.getByRole("button", { name: "Estilo Trama", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "wire",
  );
  await page.getByRole("combobox", { name: "Fondo" }).selectOption("dark");
  expect(
    await page
      .locator(".app")
      .evaluate((e) => getComputedStyle(e).backgroundColor),
  ).toBe("rgb(16, 17, 19)");
  await page.getByRole("button", { name: "Color Cobre", exact: true }).click();
  await expect(page.getByLabel("Color personalizado")).toHaveValue("#dba58e");
  await page.getByRole("slider", { name: "Sensibilidad" }).fill("2.1");
  await page.getByRole("slider", { name: "Fluidez" }).fill("0.8");
  await page.getByRole("slider", { name: "Suavizado" }).fill("0.9");
  await page.getByRole("button", { name: "Restablecer ajustes" }).click();
  await expect(page.getByRole("slider", { name: "Sensibilidad" })).toHaveValue(
    "1.2",
  );
  await expect(page.getByRole("combobox", { name: "Fondo" })).toHaveValue(
    "light",
  );
  await page.screenshot({ path: "test-results/settings.png" });
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Ajustes", exact: true }),
  ).toBeFocused();
  await page.screenshot({ path: "test-results/desktop.png" });
  await page
    .getByRole("button", { name: "Pantalla completa", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Salir de pantalla completa" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Salir de pantalla completa" })
    .click();
  await page.getByRole("button", { name: "Cómo se mueve" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("actual WAV tones deform without camera zoom and keep volume in the render loop", async ({
  page,
}) => {
  await page.goto("./");
  for (const [hz, name] of [
    [80, "Graves"],
    [800, "Medios"],
    [6000, "Agudos"],
  ] as const) {
    const camera = await page.locator("canvas").getAttribute("data-camera");
    await page.locator("input[type=file]").setInputFiles({
      name: `tone-${hz}.wav`,
      mimeType: "audio/wav",
      buffer: tone(hz, 12),
    });
    await page.getByRole("button", { name: "Reproducir", exact: true }).click();
    await page.getByRole("button", { name: "Ajustes", exact: true }).click();
    await expect
      .poll(async () =>
        Number(
          await page
            .getByRole("meter", { name, exact: true })
            .getAttribute("aria-valuenow"),
        ),
      )
      .toBeGreaterThan(30);
    for (const other of ["Graves", "Medios", "Agudos"])
      if (other !== name)
        await expect
          .poll(async () =>
            Number(
              await page
                .getByRole("meter", { name: other, exact: true })
                .getAttribute("aria-valuenow"),
            ),
          )
          .toBeLessThan(3);
    await page.getByRole("button", { name: "Cerrar ajustes" }).click();
    if (camera) {
      const extent = JSON.parse(
        (await page.locator("canvas").getAttribute("data-extent"))!,
      );
      if (hz === 80) {
        expect(extent[0]).toBeGreaterThan(2.4);
        expect(extent[1]).toBeLessThan(1.75);
      }
      if (hz === 6000) {
        expect(extent[1]).toBeGreaterThan(2.5);
        expect(extent[0]).toBeLessThan(1.85);
      }

      expect(await page.locator("canvas").getAttribute("data-camera")).toBe(
        camera,
      );
      expect(
        Math.abs(
          Number(
            await page.locator("canvas").getAttribute("data-volume-ratio"),
          ) - 1,
        ),
      ).toBeLessThan(0.000001);
    }
    await page.screenshot({ path: `test-results/tone-${hz}.png` });
    await page.getByRole("button", { name: "Pausar", exact: true }).click();
    await page.getByRole("button", { name: "Ajustes", exact: true }).click();
    await expect
      .poll(async () =>
        Number(
          await page
            .getByRole("meter", { name, exact: true })
            .getAttribute("aria-valuenow"),
        ),
      )
      .toBeLessThan(2);
    await page.getByRole("button", { name: "Cerrar ajustes" }).click();
  }
});

test("corrupt file recovers, repeat survives end and rejected input never blocks pause", async ({
  page,
}) => {
  await page.goto("./");
  await page.locator("input[type=file]").setInputFiles({
    name: "broken.wav",
    mimeType: "audio/wav",
    buffer: Buffer.from("broken"),
  });
  await expect(page.getByRole("alert")).toContainText(
    "No se ha podido reproducir",
  );
  await page.locator("input[type=file]").setInputFiles({
    name: "loop.wav",
    mimeType: "audio/wav",
    buffer: tone(250, 1),
  });
  await expect(page.getByRole("alert")).toHaveCount(0);
  await page.getByRole("button", { name: "Repetir pista" }).click();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await page.waitForTimeout(1800);
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
  await page.locator("input[type=file]").setInputFiles({
    name: "notes.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("not audio"),
  });
  await expect(page.getByRole("alert")).toContainText(
    "Selecciona un archivo de audio",
  );
  await page.getByRole("button", { name: "Pausar", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeEnabled();
  await page.getByRole("button", { name: "Repetir pista" }).click();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeVisible();
});

test("drag and drop stays local", async ({ page }) => {
  const writes: string[] = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") writes.push(r.url());
  });
  await page.goto("./");
  const dt = await page.evaluateHandle(
    (bytes) => {
      const transfer = new DataTransfer();
      transfer.items.add(
        new File([new Uint8Array(bytes)], "dropped.wav", { type: "audio/wav" }),
      );
      return transfer;
    },
    [...tone(100, 1)],
  );
  await page.locator(".app").dispatchEvent("drop", { dataTransfer: dt });
  await expect(page.locator(".track-info strong")).toHaveText("dropped.wav");
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeEnabled();
  expect(writes).toEqual([]);
});

test("mobile canvas and bottom controls fit; sheet scrolls and remains closable", async ({
  page,
}) => {
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("./");
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <= innerWidth &&
          document.documentElement.scrollHeight <= innerHeight,
      ),
    ).toBe(true);
    const upload = await page
      .getByRole("button", { name: "Subir archivo" })
      .boundingBox();
    expect(upload!.y).toBeLessThan(150);
    const player = await page.locator(".player").boundingBox();
    expect(player!.y + player!.height).toBeLessThanOrEqual(844);
    await page
      .getByRole("button", { name: "Probar demo", exact: true })
      .click();
    await page.getByRole("button", { name: "Reproducir", exact: true }).click();
    await expect(
      page.getByRole("button", { name: "Pausar", exact: true }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Ajustes", exact: true }).click();
    await page.getByRole("combobox", { name: "Fondo" }).selectOption("dark");
    await page.getByRole("button", { name: "Restablecer ajustes" }).click();
    await page.getByRole("button", { name: "Cerrar ajustes" }).click();
    await page.getByRole("button", { name: "Pausar", exact: true }).click();
    await page.screenshot({ path: `test-results/mobile-${width}.png` });
  }
});
