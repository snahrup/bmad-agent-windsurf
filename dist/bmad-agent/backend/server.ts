import express from 'express';
import { readdir, readFile, stat } from 'fs/promises';
import { join, dirname, relative } from 'path'; // Added 'relative'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the project root as one level up from the backend directory
const PROJECT_ROOT = join(__dirname, '..');
console.log(`Backend Project Root configured to: ${PROJECT_ROOT}`);

const app = express();
const PORT = 3000;

// Configure CORS
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081'
];

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

app.get('/files', async (req: express.Request, res: express.Response) => {
  try {
    const dirPath = typeof req.query.path === 'string' ? req.query.path : '.'; // Default to PROJECT_ROOT
    const requestedPath = dirPath as string;
    const fullPath = join(PROJECT_ROOT, requestedPath);
    
    // Security check to prevent directory traversal
    if (!fullPath.startsWith(PROJECT_ROOT)) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    const stats = await stat(fullPath);
    
    if (!stats.isDirectory()) {
      res.status(400).json({ error: 'Path is not a directory' });
      return;
    }

    const entries = await readdir(fullPath, { withFileTypes: true });
    const children = await Promise.all(
      entries
        .filter(entry => !entry.name.startsWith('.') && entry.name !== 'node_modules')
        .map(async entry => {
          const entryPath = join(fullPath, entry.name);
          const entryStats = await stat(entryPath);
          return {
            name: entry.name,
            path: relative(PROJECT_ROOT, entryPath).replace(/\\/g, '/'), // Make path relative to PROJECT_ROOT
            type: entryStats.isDirectory() ? 'directory' as const : 'file' as const,
            children: entryStats.isDirectory() ? [] : undefined
          };
        })
    );

    // Ensure the root path is also consistently relative (e.g., "." for the root itself)
    const rootNodeName = dirPath === '.' ? PROJECT_ROOT.split(/[\\/]/).pop() || 'root' : dirPath.split(/[\\/]/).pop() || 'root';
    res.json({
      name: rootNodeName,
      path: dirPath === '.' ? '.' : (dirPath as string).replace(/\\/g, '/'), // Ensure root path is just '.' or the relative dirPath
      type: 'directory',
      children
    });
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ error: 'Failed to read directory' });
  }
});

app.get('/files/content', async (req: express.Request, res: express.Response) => {
  try {
    const { path: filePath } = req.query;
    if (!filePath) {
      res.status(400).json({ error: 'File path is required' });
      return;
    }
    const requestedPath = filePath as string;
    const fullPath = join(PROJECT_ROOT, requestedPath);
    
    // Security check to prevent directory traversal
    if (!fullPath.startsWith(PROJECT_ROOT)) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }
    
    const content = await readFile(fullPath, 'utf-8');
    res.send(content);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Failed to read file' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Serving files from project root: ${PROJECT_ROOT}`);
});
