const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception! Shutting down...');
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log('DB Connection successful.');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
