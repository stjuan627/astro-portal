import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

async function processHtmlFiles(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = await fs.readFile(filePath, 'utf-8');

      // 使用 node-html-parser 解析和处理
      const root = parse(content);

      // 移除所有注释节点
      root.querySelectorAll('*').forEach(node => {
        node.childNodes = node.childNodes.filter(child =>
          child.nodeType !== 8  // 8 是注释节点的类型
        );
      });

      await fs.writeFile(filePath, root.toString());
      console.debug(`[Post-build] Removed comments from ${file}`);
    }
  }
}

try {
  await processHtmlFiles(distDir);
  console.log('[Post-build] Successfully processed all HTML files');
} catch (err) {
  console.error('[Post-build] Error:', err);
  process.exit(1);
}
