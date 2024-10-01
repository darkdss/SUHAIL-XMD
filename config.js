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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_14_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNEOWlkb2Iwby9sL3hlK3VQVEhXRVR5QStVengwQlBsUXlrc1hEZ0h3aEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZTbm54TU9hU1plREdCQWk3VEwtM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzcxYzIzNmItNTYyOS00ODhjLWFjYmItNDgyZmJkNTBmZmI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMjMsXG4gICAgICAyMDMsXG4gICAgICAyNDYsXG4gICAgICAxNzgsXG4gICAgICA5LFxuICAgICAgMTU0LFxuICAgICAgMTMzLFxuICAgICAgMTM0LFxuICAgICAgNTUsXG4gICAgICAxNjEsXG4gICAgICAxNDAsXG4gICAgICAyMTAsXG4gICAgICAxMTMsXG4gICAgICAxMzksXG4gICAgICAxMzQsXG4gICAgICAxODAsXG4gICAgICAxNzEsXG4gICAgICAxMSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAyMixcbiAgICAgIDU1LFxuICAgICAgMTcxLFxuICAgICAgMTk3LFxuICAgICAgMTY3LFxuICAgICAgMTY1LFxuICAgICAgMTQ3LFxuICAgICAgMzgsXG4gICAgICAzNSxcbiAgICAgIDE2NyxcbiAgICAgIDExMSxcbiAgICAgIDEwOCxcbiAgICAgIDE2OSxcbiAgICAgIDI3LFxuICAgICAgMTA2LFxuICAgICAgMjEwLFxuICAgICAgMTgxLFxuICAgICAgODUsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RkdIODJBSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzM4MjQyNjY6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8JKNmVwiLFxuICAgIFwibGlkXCI6IFwiNjc3NzUxNTQ0MTc3NjU6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVlcDZFSEVLalA3N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPVkJvbldUc2cxRjlDUGNoRmhzaFdPU09CZnJSODNNYkNyU3Q1UHVpNUc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlk5RHBqdTF0VzI2Q1B2Z1Q4eTVPcUxCRmJYL0drOUdBYmdrNWcrZTVvNUNLRG5uSDVCOXFOanJqQmk2M1c5T3BUQy9vMGlJTi84RzVObFJ6dms3d0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBhRTJHTDJwVjdOVUZJWlhKN3UvYVRQWDFNM2duMjVlclU5K29VM3ZjWllLWHFFaWZSdWwrSVRoQlhmUWIwK3I5cldVY1lUM0RQUWxZT3VXUjU5cWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczODI0MjY2Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzc4NDg3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU5clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTlyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRy9JMThEY0xwSjNoRFVqY1JuTGVaT3J3Q3IyR2wrSHcxNTlQUHZTV2M5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ4ODk3MDgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3Nzg0ODUyMzM3XCJ9Igp9"  // PUT your SESSION_ID 


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
