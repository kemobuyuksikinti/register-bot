const Discord = require('discord.js');//
const ayar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has(ayar.kayitciRolu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));
  let uye = message.mentions.users.first()
  if (!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Lütfen argümanları doğru yerleştirdiğinizden emin olun.`)).then(m => m.delete({timeout: 5000}));// atlas.
  let member = message.guild.member(uye)
   let isim = args[1];
   if(!isim) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Lütfen argümanları doğru yerleştirdiğinizden emin olun.`)).then(m => m.delete({timeout: 5000}));
await member.setNickname(`${isim}`)//
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setFooter(`developed by kemosalvo`)
  .setDescription(`Kullanıcının ismi başarıyla değiştirildi!`)
  return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["name" , "nick"],
  permLevel: 0
}
exports.help = {
  name: 'isim',
}