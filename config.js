const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_16_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhFTVNtdFFqa0xpaWZVMHJjNFhGMitPaGQ1SHNJclZpTEorMU11VjVsRlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpMYlItMmlBUnRXSDlZd1FIZW91TXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTEyNmRkYjQtZDBhOC00OTE0LThlMzMtNzg2ZmI0OTNlOTUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDY5LFxuICAgICAgMTU4LFxuICAgICAgMTc0LFxuICAgICAgNjUsXG4gICAgICAyMjcsXG4gICAgICA4NCxcbiAgICAgIDE5NCxcbiAgICAgIDE0MCxcbiAgICAgIDIwNSxcbiAgICAgIDg0LFxuICAgICAgMTk0LFxuICAgICAgNDMsXG4gICAgICAxMDYsXG4gICAgICA0NSxcbiAgICAgIDIxLFxuICAgICAgMTEyLFxuICAgICAgMTM0LFxuICAgICAgMTU5LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDQxLFxuICAgICAgMjA4LFxuICAgICAgMTgwLFxuICAgICAgNDUsXG4gICAgICAxMTcsXG4gICAgICAxNTEsXG4gICAgICAxNSxcbiAgICAgIDEyOCxcbiAgICAgIDI0OSxcbiAgICAgIDEzMSxcbiAgICAgIDc3LFxuICAgICAgMjI2LFxuICAgICAgMjI0LFxuICAgICAgMjU1LFxuICAgICAgMTIyLFxuICAgICAgMzIsXG4gICAgICAxMzEsXG4gICAgICAxODEsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjZTVkpaUzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY4NDgxMzE0MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYzODM4NTg3MDQ0NTc6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTE11dWdGRU43aDNiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhlSnVXNmtUL29iUGlWcC9yekQ1WlBxZWdMQUhUTFhWazFONTZSSi9XUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicDArZ0xNQXlMYm1NSUE2WStKNkFSeWtlS3hVQm1LRm1uRWJxa3ppYm03ejRyMDN3T0xKODRWdUdxTzZhVlJPRTdoaGZRdUx2blZsVis2RVVMZjdRaVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVW1lZUoyaGRkSlc0VmFCZUE1R3ZuV3Vpbm1wMjlaNS8xNmtqZWRxTnhrNFhDWHp1VlN2RW9FaDhXTzkxWVlEZjlFamtlbTFZZzFJQ0ZsZ0g4alAzZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjg0ODEzMTQzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAwNjU2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
