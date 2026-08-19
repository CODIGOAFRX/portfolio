UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4436212084/', updated_at = datetime('now') WHERE id = 1;
UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4454777661/', updated_at = datetime('now') WHERE id = 2;
UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4454706689/', updated_at = datetime('now') WHERE id = 3;
UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4447019177/', updated_at = datetime('now') WHERE id = 4;
UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4455736816/', updated_at = datetime('now') WHERE id = 5;
UPDATE jobs SET url = 'https://www.linkedin.com/jobs/view/4445996574/', updated_at = datetime('now') WHERE id = 6;
UPDATE jobs SET url = 'https://www.tecnoempleo.com/agent-developer-genai-agentic-ai-ust/python-agentic-ai/rf-8e261a307254b3b51a4e', updated_at = datetime('now') WHERE id = 7;
UPDATE jobs
SET url = 'https://www.tecnoempleo.com/especialista-en-automatizacion-ia-junior-social-yo/python-low-code/rf-91b51a5ec269b311b240',
    fit_score = 10,
    priority = 'low',
    gaps = '["Modalidad híbrida en Barcelona","n8n no aparece todavía como experiencia acreditada","Modalidad híbrida fuera de Andalucía; no contempla mudanza desde Granada."]',
    updated_at = datetime('now')
WHERE id = 8;
UPDATE jobs SET url = 'https://www.tecnoempleo.com/desarrollador-java-senior-serem/spring-sql/rf-974515f132c733909047', updated_at = datetime('now') WHERE id = 9;
UPDATE jobs SET url = 'https://www.tecnoempleo.com/senior-android-software-engineer-zooplus-se/kotlin-jetpack/rf-b1ee170782f8239ffb48', updated_at = datetime('now') WHERE id = 10;

UPDATE jobs
SET priority = CASE
    WHEN fit_score >= 80 THEN 'high'
    WHEN fit_score >= 60 THEN 'medium'
    ELSE 'low'
END;
