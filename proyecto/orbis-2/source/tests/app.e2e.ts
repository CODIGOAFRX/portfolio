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

test("demo playback, seeking, mute, loop, presets and fullscreen", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("./");
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeDisabled();
  await expect(page.locator("canvas")).toBeVisible();
  await page.getByRole("button", { name: "Probar con una demo" }).click();
  await expect(
    page.getByRole("slider", { name: "Posición de reproducción" }),
  ).toHaveAttribute("max", "32");
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
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
  await page.getByRole("button", { name: "Repetir pista" }).click();
  await expect(
    page.getByRole("button", { name: "Repetir pista" }),
  ).toHaveAttribute("aria-pressed", "true");
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
  await page.getByRole("button", { name: "Nácar", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "pearl",
  );
  await page.getByRole("button", { name: "Trama", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "wire",
  );
  await page.getByRole("button", { name: "Restablecer ajustes" }).click();
  await expect(page.getByRole("combobox", { name: "Material" })).toHaveValue(
    "metal",
  );
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
  await page
    .getByRole("button", { name: "Pantalla completa", exact: true })
    .click();
  await expect(page.locator(".app")).toHaveClass(/immersive/);
  await page
    .getByRole("button", { name: "Salir de pantalla completa" })
    .click();
  await expect(page.locator(".app")).not.toHaveClass(/immersive/);
  await page.getByRole("button", { name: "Cómo se mueve" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("real WAV bass, mid and treble feed separate bands, pause returns to silence", async ({
  page,
}) => {
  await page.goto("./");
  for (const [hz, name] of [
    [80, "Graves"],
    [800, "Medios"],
    [6000, "Agudos"],
  ] as const) {
    await page.locator("input[type=file]").setInputFiles({
      name: `tone-${hz}.wav`,
      mimeType: "audio/wav",
      buffer: tone(hz, 6),
    });
    await expect(
      page.getByRole("button", { name: "Reproducir", exact: true }),
    ).toBeEnabled();
    await page.getByRole("button", { name: "Reproducir", exact: true }).click();
    await expect
      .poll(async () =>
        Number(
          await page
            .getByRole("meter", { name, exact: true })
            .getAttribute("aria-valuenow"),
        ),
      )
      .toBeGreaterThan(30);
    for (const other of ["Graves", "Medios", "Agudos"]) {
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
    }
    await page.screenshot({ path: `test-results/tone-${hz}.png` });
    await page.getByRole("button", { name: "Pausar", exact: true }).click();
    await expect
      .poll(async () =>
        Number(
          await page
            .getByRole("meter", { name, exact: true })
            .getAttribute("aria-valuenow"),
        ),
      )
      .toBeLessThan(2);
  }
});

test("invalid audio gives a recoverable error; new file and end-of-track work", async ({
  page,
}) => {
  await page.goto("./");
  await page.locator("input[type=file]").setInputFiles({
    name: "broken.wav",
    mimeType: "audio/wav",
    buffer: Buffer.from("invalid audio"),
  });
  await expect(page.getByRole("alert")).toContainText(
    "No se ha podido reproducir",
  );
  await page.locator("input[type=file]").setInputFiles({
    name: "short.wav",
    mimeType: "audio/wav",
    buffer: tone(440, 1),
  });
  await expect(page.getByRole("alert")).not.toBeVisible();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
});

test("file drag and drop loads real audio without uploading it", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") requests.push(`${r.method()} ${r.url()}`);
  });
  await page.goto("./");
  const data = [...tone(100, 1)];
  const transfer = await page.evaluateHandle((bytes) => {
    const dt = new DataTransfer();
    dt.items.add(
      new File([new Uint8Array(bytes)], "dropped.wav", { type: "audio/wav" }),
    );
    return dt;
  }, data);
  await page.locator(".app").dispatchEvent("drop", { dataTransfer: transfer });
  await expect(page.locator(".track-info strong")).toHaveText("dropped.wav");
  await expect(
    page.getByRole("button", { name: "Reproducir", exact: true }),
  ).toBeEnabled();
  expect(requests).toEqual([]);
});

test("mobile layout is usable without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await expect(page.locator("canvas")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Probar con una demo" }).click();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Pausar", exact: true }).click();
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
});

test("repeat crosses the end and a rejected file does not block pause", async ({
  page,
}) => {
  await page.goto("./");
  await page
    .locator("input[type=file]")
    .setInputFiles({
      name: "loop.wav",
      mimeType: "audio/wav",
      buffer: tone(250, 1),
    });
  await page.getByRole("button", { name: "Repetir pista" }).click();
  await page.getByRole("button", { name: "Reproducir", exact: true }).click();
  await page.waitForTimeout(1700); // Deliberately cross the one-second end boundary.
  await expect(
    page.getByRole("button", { name: "Pausar", exact: true }),
  ).toBeVisible();
  await page
    .locator("input[type=file]")
    .setInputFiles({
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
});
