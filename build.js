const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// yamlディレクトリとdocsディレクトリのパス
const yamlDir = path.join(__dirname, 'ja');
const docsDir = path.join(__dirname, 'docs', 'ja');

// docsディレクトリが存在しない場合は作成
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// すべてのYAMLファイルを読み込み
const yamlFiles = fs.readdirSync(yamlDir).filter(file => file.endsWith('.yml'));

const systems = [];

yamlFiles.forEach(file => {
  const filePath = path.join(yamlDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContent);
  systems.push(data);
});

// systems.jsonに出力
const outputPath = path.join(docsDir, 'systems.json');
fs.writeFileSync(outputPath, JSON.stringify(systems, null, 2), 'utf8');

console.log(`✓ Generated ${outputPath}`);
console.log(`✓ Total systems: ${systems.length}`);
