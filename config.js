//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/KATA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/237690768603";
global.sudo = process.env.SUDO || "237659079843";
global.owner = process.env.OWNER_NUMBER || "50935334166";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0E5aTlkb1gzWk1xdTdEMjQrUTlnK2pQOE8xdXllcm1ncWkwTTdWZE1FST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXdBYnMwM1Q0cTRRQThyb1JxWDNaMlVOSVkxWlZJMXhOUVQwaEM5eWVUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SG9QSUcrNThmM2lqRTZEb1J6VlhpSThWZTNQcWdlM0xqM25wOU16ODJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4KzZwRW1LMklBUTFVZmN2VnBqekFxeU55aE1qZmxGSkpxTDNjUlZlcmdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQRGZqSHFXOVFnNE5SaDRkL2I0YTJabWxDaS9HdEtkRVN6WFJCY3R4MWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNoN0RHMVpqYU9BeHBLcWozNzR6a3VHOTJ6RjhPMVFmNTQ1WEVuWkNmQ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05LWTN0OEV6bFRIMU9mOWJSMGxMZmYvWklVUVRyOHdmRGhVanJraXQxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2tmWGlabTVDaWJFREpZdk5MZzJ2Y3ZhNllLVDVhSDI4MVZMdTZqTSt6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPSi9ScEhETEVBRXdMVWZMaU92NEY1RmMvR2crWUVUQzYrd25YdVhnMHdjeTd6aWFCTm1CbFIzQUdvOFh4K3lhYU5NTjVleVRwWnBhWDBpVUZKaUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiI0d0ZXUXRhZ0JTeFNscFB6VThDaDk3dVFGREFSLzJCNVRpeVBVc2EyZGlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqSV90TGs3bFFET2hGUm9NcVFxeXpnIiwicGhvbmVJZCI6IjdlZTBmM2FhLTc3YmMtNDk3My1hMWIxLTg3Njg2MWI2MDI5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0S2taMG9LeDc0VS9kOTZSYWpnOXgvay9LdGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjVObDRFR1l5R0JSRm5IQXprbDRkVTZrOXZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhEU1A5N1ZIIiwibWUiOnsiaWQiOiI1MDkzNTMzNDE2NjoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+8J2QhvCdmq/wnZCD8J2Qg/CdmrXwnZCS8J2QkuKAovCdkIvwnZqw8J2Qi/CdmrDwnZq78J2ariJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNaNTZVRUVMamVyYmdHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHJxTXl5VndRVC9KUFN5L0RCOG0wWDlzYzFscDJpeFhvL1oyTUl5YzQwaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1VUZUFUeWxuTm53N2ljQmJoTlU4Vmhwa01TellzZU15NmJZVW5mUWdDQjBiT0IvVW80WEk0YzVGMzBDYjlYdjRaeE9TaGpTN1JMNkxDbTU4V05KQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlRQL2dPMHBvY3Rjc0QyVUN6REVWRGhMV1VjQ1RYeFhnSDIrb0YyTzJ6NnY4WkFhU3htY2cxRVVWbndJZlM4Z0sweER0MXV5UjZDckd3OG1CZWpMVkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzUzMzQxNjY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWE2ak1zbGNFRS95VDBzdnd3Zkp0Ri9iSE5aYWRvc1Y2UDJkakNNbk9OSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODgwMjYyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIL0wifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "•",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜D TECH⌝☜`",
  author: process.env.PACK_AUTHER || "𝐆𝚯𝐃𝐃𝚵𝐒𝐒•𝐋𝚰𝐋𝚰𝚻𝚮",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜D_BOT☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
