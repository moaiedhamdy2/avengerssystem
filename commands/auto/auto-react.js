const client = require("../../index");

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
const react = new Collection();
module.exports = react;

let reactid = ["1026516584774238228","784164736760938516","1021759644449914911","1021757175791624213","784165246335320106","1014310675708903545"];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(reactid.includes(message.channel.id)){
        message.react("1018080115118321714")
        message.react("1021506557546074122")
        message.react("1018080113323147264")
   }
});