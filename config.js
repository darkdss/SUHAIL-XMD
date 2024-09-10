const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773824266";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_22_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFUMXRoSmdOa1dwUWQ2TDZwSzdFWk1UcWlMdGdkR2k3M3Q0Qm14a2NMeUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRBdWloT2JFU0hHU2l0Q2xQTFRvZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJjZjYwZDgtMTc1NS00YjA4LThlMDgtNjRmYmZjYWJlNzQ4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDY4LFxuICAgICAgODAsXG4gICAgICAxNzYsXG4gICAgICAxMzAsXG4gICAgICAxMjMsXG4gICAgICAxMzMsXG4gICAgICAxMDQsXG4gICAgICAxNTAsXG4gICAgICAxODksXG4gICAgICA2MixcbiAgICAgIDEyOSxcbiAgICAgIDY3LFxuICAgICAgMjMzLFxuICAgICAgMTYwLFxuICAgICAgMzUsXG4gICAgICAyNDcsXG4gICAgICAyMTUsXG4gICAgICAyMTksXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxNTcsXG4gICAgICA0MSxcbiAgICAgIDAsXG4gICAgICAyNTAsXG4gICAgICAyMzMsXG4gICAgICAxNTIsXG4gICAgICAxODAsXG4gICAgICAxNzYsXG4gICAgICAxOTcsXG4gICAgICA2LFxuICAgICAgMTMyLFxuICAgICAgODQsXG4gICAgICAxNzcsXG4gICAgICA5MSxcbiAgICAgIDE4MyxcbiAgICAgIDg3LFxuICAgICAgMTgxLFxuICAgICAgMTQ1LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxSEg0RkxWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MzgyNDI2Njo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIi5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wko2ZXCIsXG4gICAgXCJsaWRcIjogXCI2Nzc3NTE1NDQxNzc2NTo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR2VwNkVIRUwvbi83WUdHQjBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9WQm9uV1RzZzFGOUNQY2hGaHNoV09TT0JmclI4M01iQ3JTdDVQdWk1Rzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMGdhS1lSdzlNN0FpOVBJR1REOGlrT2hySUpMblUrNFhBSDJaa0d2c21TeklPdHl6SUNQcjhuS1FFeTAyOHpNSVg5MEtQVWQ5NEhZcG1CL29SYy9WQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3l4RnhqRUcvMGxDQW9LdVhOek1aVWtxc2lZM3JyWDc3NU5NT3EzOW9GZnVJQmdyYkEzYUhBVVNBa241ZDJMb2ZMYVdMYlBmNG5rVFR1dWRhcXhFRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzM4MjQyNjY6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1OTUyOTY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG54XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCaVZPeXJCVDNETkJURzdEYkpFMGwrTzZGRDlXYmFhWHJzYmFxWTE5cmJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDg4OTcwNzMsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SoViDu-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
