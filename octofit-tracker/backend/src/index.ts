import express from 'express';
import connectDatabase from './config/database';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

app.get('/api/', (_req, res) => {
  res.json({ message: 'Octofit Tracker API is ready' });
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Octofit Tracker backend listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server', error);
    process.exit(1);
  });
