const client = require("../../index");
const { line_image } = require('../../config.json');

const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');
const lines = new Collection();
module.exports = lines;

let lineid =  ["1021758233720922232","784164736760938516","865312777236512818" ,"1026516584774238228"];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(lineid.includes(message.channel.id)){ 
 let args = message.content.split(',')
  message.channel.send({files:[line_image]}).catch((err) => {
   console.log(err.message)
   })
   }
});