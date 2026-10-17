import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function copyStaticAssetsPlugin(): Plugin {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const copyDirRecursive = (srcDir: string, destDir: string) => {
        if (!fs.existsSync(srcDir)) return;
        fs.mkdirSync(destDir, { recursive: true });
        const entries = fs.readdirSync(srcDir, { withFileTypes: true });
        for (const entry of entries) {
          const srcPath = path.join(srcDir, entry.name);
          const destPath = path.join(destDir, entry.name);
          if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      };

      const outDir = path.resolve(process.cwd(), 'dist');

      // 1. Ensure audio folder is in dist/audio
      copyDirRecursive(path.resolve(process.cwd(), 'audio'), path.join(outDir, 'audio'));
      copyDirRecursive(path.resolve(process.cwd(), 'public/audio'), path.join(outDir, 'audio'));

      // 2. Ensure memories are in BOTH dist/memories and dist/images/memories
      copyDirRecursive(path.resolve(process.cwd(), 'memories'), path.join(outDir, 'memories'));
      copyDirRecursive(path.resolve(process.cwd(), 'memories'), path.join(outDir, 'images/memories'));
      copyDirRecursive(path.resolve(process.cwd(), 'public/images/memories'), path.join(outDir, 'memories'));
      copyDirRecursive(path.resolve(process.cwd(), 'public/images/memories'), path.join(outDir, 'images/memories'));

      // Handle root memory-100.jpg if present
      const root100 = path.resolve(process.cwd(), 'memory-100.jpg');
      if (fs.existsSync(root100)) {
        fs.mkdirSync(path.join(outDir, 'memories'), { recursive: true });
        fs.mkdirSync(path.join(outDir, 'images/memories'), { recursive: true });
        fs.copyFileSync(root100, path.join(outDir, 'memories/memory-100.jpg'));
        fs.copyFileSync(root100, path.join(outDir, 'images/memories/memory-100.jpg'));
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyStaticAssetsPlugin(),
  ],
})
