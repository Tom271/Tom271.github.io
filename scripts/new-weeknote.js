import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const now = new Date();
const today = now.toISOString().slice(0, 10);
const startOfYear = new Date(now.getFullYear(), 0, 1);
const weekNumber = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
const title = `Week ${weekNumber}, ${now.getFullYear()}`;
const filePath = resolve(__dirname, `../src/routes/weeknotes/${today}.md`);

if (existsSync(filePath)) {
	console.log(`Already exists: ${filePath}`);
	process.exit(0);
}

const content = `---
title: '${title}'
date: '${today}'
excerpt: ''
---

`;

writeFileSync(filePath, content);
console.log(`Created: ${filePath}`);
