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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_00_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBGNkxpK1ExWTkxVzN3SnAvd1VNdW5NcFZlQmlhV0lIRzFKWVF1THBKRFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd1ZVc0QlpTVGx5MTBKVXBKcHluNlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGVmMDEzOGQtNThlMy00M2I4LTkwN2MtMzBlOTNhZjY4NWVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTA1LFxuICAgICAgMTI2LFxuICAgICAgMTg3LFxuICAgICAgMTIwLFxuICAgICAgMjU0LFxuICAgICAgODQsXG4gICAgICA5NyxcbiAgICAgIDIyNyxcbiAgICAgIDIxMyxcbiAgICAgIDE5OCxcbiAgICAgIDIyNCxcbiAgICAgIDEzOSxcbiAgICAgIDE1OCxcbiAgICAgIDExOCxcbiAgICAgIDUsXG4gICAgICAyMTMsXG4gICAgICAxNDMsXG4gICAgICAxNDcsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxMzksXG4gICAgICAyMzIsXG4gICAgICAyOSxcbiAgICAgIDEyOCxcbiAgICAgIDE3MyxcbiAgICAgIDIzNCxcbiAgICAgIDE5LFxuICAgICAgMTkxLFxuICAgICAgMjMsXG4gICAgICA5LFxuICAgICAgMTYsXG4gICAgICAyMjQsXG4gICAgICAxNDgsXG4gICAgICA4MixcbiAgICAgIDE5NyxcbiAgICAgIDE3NixcbiAgICAgIDUyLFxuICAgICAgMTcxLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVg5OUhNTDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczODI0MjY2OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbvCSjZlcIixcbiAgICBcImxpZFwiOiBcIjY3Nzc1MTU0NDE3NzY1OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLZXA2RUhFSzZ5aWJjR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1ZCb25XVHNnMUY5Q1BjaEZoc2hXT1NPQmZyUjgzTWJDclN0NVB1aTVHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhaGM0ZUpvSG9DK1NMaTJmcGlpTlNST040L1MwY091WndURmJqRitPRG5TQmdKcnFabjlBbnhxeEFoUzdFdHFRWXVUMTVYcjkvV0x5eUFZclhCMmVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJISGh2Mkw2Z1o0Zno5NDUwemIrcnBXU3h6Sm10eThFczVUSTBhYjY5WXJTSXNESUVzNVkyaHIzREduYnJTY2JreDVqbUVqdDNmT3QvOGJwZmJZNjdBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MzgyNDI2Njo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYxMTAwMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMS0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxLRy5qc29uIjogIntcImtleURhdGFcIjpcInU3SjAwcWxVMmk3Q0FRZXByeFpIQmpoOEloalBJbTFvT1VWRE1FdW1JVE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0ODg5NzA3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
