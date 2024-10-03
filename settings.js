const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJnMzZ1Q2J3Z2IvL1paYnBkV1l1VmdwVWMyclplK3ZtckFBMkxpUFNVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVRdGlNN1Vzak1Wb1VYNHBsV0tMM0M3WStzeTMyVkVpbGhNL0QwWkN3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSEU0WW9jOEhzSjRnZithTmw1VUR3OEF0RHZtYWdpamM4TG1JdXRuMm5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cjBrbm5WaEtCSXdCazdoUXBBTksrd3N3NXlxZTh0UExhUmN4SDZpU2xjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMRjNobktNMC9LMzFadVYrUnpINmozN0tkOS9DS2xUbnU0dVBYbCtJSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI2ZFd0cmtxUERuOGlYQWEzZllGRjk1UUtjUGVjR1BmdzJ4ZUpjTWl0RzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURMcEE0WkpmbmptR1FwT3A2R3hHZWtEY05TQ3A3ZGNHdmx5L1dIdFRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlQ5enkyZkYyS01SZkdScDNFek1GRVhEbVhPMis5SmEyTWpLdkNlTitXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdFbEFvbGlXeFhQaldjVnkrZEJvdE9COCtqcHozcXNneVZUbVc4NURnd25NdGtTOHA5TDVjZU1SRUtDWkFRS3YyLzVodGlnaDdaeW1hb1FmZ0Vkaml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6Ijhja0I1S2RGME9xUk92TXVVU1lzM1hIK0hwbThMYnJsLzRycU9QdUh2TkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTk4Mjc1ODczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ4RjRFODI0NkY5MjRBM0E2NTM5QzFDMTlFMzhDMTlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc4MDAwNjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU5ODI3NTg3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDODc5RUM2NDc0QkMyOEEyMEE3NTNCRkM2RTFCNThBMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3ODAwMDY5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIybHJ5LVdSNlJFUzVxbFdFRFRLY0R3IiwicGhvbmVJZCI6IjUxOTdmZmU3LTlhMzMtNGMxNi1hZmUzLTJjZTQzYTYwYzAwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqaWdqUDgyUytzbCtjc0FMRisrUUtoSlNzL1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1RaSFFBMTZHSVZ5b25pYnRhOG9odUlrZ3VzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxLMjFIN0xRIiwibWUiOnsiaWQiOiIyMzM1OTgyNzU4NzM6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVMOPTMOYw5FYIPCfkqvinaTvuI/igI3wn5Sl4p2k77iP4oCN8J+UpfCfkqvwn5KvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUE5nK1VFRU9MRjhMY0dHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzakVLNXhmRExOZy8rOXYwb3k2eXhhS1NvcDNyOHNvSGdaL2FKQmhNMnlZPSIsImFjY291bnRTaWduYXR1cmUiOiJRUzI1NUFRelMwakdnamN4UklJcWoxdENSeUJkdFMzR1ltWUh1V2xQelltM3BNVDU2M2V0clVWd3plSDBuZ2d2Mms2R1c1S1JENDR6ZC9JblhzbXZDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL2FQcFQzOVlxZUorTmVVSk9zTjV1bDFta3NuaHMzSjgxU2QvZzJVUVF0dHlVcmdiR29HNGhXRXVXUG5LajcxQ2ljeUl4Zkl2TnFpZ1RhaFRSMnV3akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTgyNzU4NzM6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDR4Q3VjWHd5ellQL3ZiOUtNdXNzV2lrcUtkNi9MS0I0R2YyaVFZVE5zbSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzgwMDA1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQNTIifQ== '' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === 233598275873 '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
