"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou(
  { nomCom: "alive", reaction: "🚀", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/vcdwmp.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/vcdwmp.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/7nba1q.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💫 Always Active 🔥\n\n✨ Contact: ${contactName}\n🙏 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363387497418815@newsletter',
         newsletterName: "ᴅᴍʟ ᴍᴅ ɪs ᴀʟɪᴠᴇ ᴇᴠᴇʀʏᴛʜɪɴɢ ᴇᴠᴇʀʏᴅᴀʏ",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
            title: `💦 Message from: ${contactName}\ᴅᴍʟ ᴍᴅ ɪs ᴀʟɪᴠᴇ ᴇᴠᴇʀʏᴛʜɪɴɢ ᴇᴠᴇʀʏᴅᴀʏ`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");





zokou(
  { nomCom: "test", reaction: "😇", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/vcdwmp.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/vcdwmp.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/vkzedi.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💥 Always Active 💥\n\n🎙️ Contact: ${contactName}\n🎙️ [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363387497418815@newsletter',
         newsletterName: "ᴅᴍʟ ᴍᴅ ᴛᴇsᴛɪɴɢ ᴄᴏᴍᴍᴀɴᴅ",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
            title: `🌟 Message from: ${contactName}\ᴅᴍʟ ᴍᴅ ᴛᴇsᴛɪɴɢ ᴄᴏᴍᴍᴀɴᴅ💯`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!")
