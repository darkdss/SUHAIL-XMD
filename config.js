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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94776295114";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773824266";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
global.alwaysonline= process.env.ALWAYSONLINE || "false" ;

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_34_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5TTB6cmdPanB5WG9waHRnQ2lEQUpRZEkwdjQrM0dxTkNqaUlDR3B3ZzJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5azdkcXV1S1NOeUtBTEhmWV9PdzJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2ZDQxMjg1LTYxMDItNGMzMC05N2JjLTA2YWU1Yjg1ZGJkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDYzLFxuICAgICAgNjYsXG4gICAgICAyMjIsXG4gICAgICAyMDMsXG4gICAgICAxMSxcbiAgICAgIDQwLFxuICAgICAgMTIxLFxuICAgICAgMTMsXG4gICAgICA1LFxuICAgICAgMjM1LFxuICAgICAgMjQ0LFxuICAgICAgMTY2LFxuICAgICAgMjUyLFxuICAgICAgMjMsXG4gICAgICAyNTAsXG4gICAgICAxNTcsXG4gICAgICAyNDcsXG4gICAgICAxMzYsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDExMyxcbiAgICAgIDE1MyxcbiAgICAgIDEyNixcbiAgICAgIDE1MixcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgMTIxLFxuICAgICAgMTE4LFxuICAgICAgMTY3LFxuICAgICAgMTMyLFxuICAgICAgMTk5LFxuICAgICAgMjIsXG4gICAgICAxNDcsXG4gICAgICAxODMsXG4gICAgICAzOCxcbiAgICAgIDYwLFxuICAgICAgMjEzLFxuICAgICAgMTAzLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk04SDVYTTE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MzgyNDI2Njo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIi5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wko2ZXCIsXG4gICAgXCJsaWRcIjogXCI2Nzc3NTE1NDQxNzc2NTo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaWVwNkVIRVA3bjdyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9WQm9uV1RzZzFGOUNQY2hGaHNoV09TT0JmclI4M01iQ3JTdDVQdWk1Rzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibWRrQnJuTnJwWGlELzZud2o2V0N6MlpWK212QThtR3pLQllLVGl4STFLL0t1OFEzejdPOVlYK3d5eG42OThGMWp1VGZUR3hQaFJVMlZvNWV0VG9qQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSllRWnliTGRmM3I1bnFBNmMrUU50dmFQeTc2QVEybEMwQ09HKzJTcWcwN1RBb0w4SEpuNncveXB2WmxacHQvbFRjOGNrdHZERUhkMXdQNndCNkxLaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzM4MjQyNjY6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NzcxNjUxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sovidu-XMD",
  ownername:process.env.OWNER_NAME|| "SoViDu-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
