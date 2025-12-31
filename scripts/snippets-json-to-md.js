import fs from 'fs'
import path from 'path'

const SNIPPETS_DIR = path.resolve('snippets')
const OUTPUT_DIR = path.resolve('docs')

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

const files = fs.readdirSync(SNIPPETS_DIR)
  .filter(f => f.endsWith('.json'))

for (const file of files) {
  const name = path.basename(file, '.json')
  const inputPath = path.join(SNIPPETS_DIR, file)
  const outputPath = path.join(OUTPUT_DIR, `${name}.md`)

  const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

  let md = `# ${name.toUpperCase()} Snippets\n\n`

  const snippets = Object.entries(raw).map(([title, value]) => ({
    title,
    prefix: value.prefix,
    description: value.description ?? '',
    body: value.body,
  }))

for (const snip of snippets) {
  const code = Array.isArray(snip.body)
    ? snip.body.join('\n')
    : snip.body

  md += `## ${snip.title}\n\n`

  if (snip.description) {
    md += `**Description:**  \n${snip.description}\n\n`
  }

  md += `::: tabs\n\n`

  // TAB 1: Prefix
  md += `@tab Prefix\n`
  md += `\`${snip.prefix}\`\n\n`

  // TAB 2: Code
  md += `@tab Code\n`
  md += `\`\`\`${name}\n${code}\n\`\`\`\n\n`

  md += `:::\n\n---\n\n`
}

  fs.writeFileSync(outputPath, md, 'utf-8')
  console.log(`✅ Generated: ${name}.md`)
}
