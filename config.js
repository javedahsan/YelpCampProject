// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  host: process.env.HOST,
  ip: process.env.IP,
  dbaseUrl: process.env.DBASE_URL,
  dbasePort: process.env.DBASE_Port 
};
  