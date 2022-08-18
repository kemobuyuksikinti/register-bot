const Discord = require('discord.js'); //
const ayar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has(ayar.kayitciRolu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));
  let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Lütfen argümanları doğru yerleştirdiğinizden emin olun.`)).then(m => m.delete({timeout: 8000}));
  let member = message.guild.member(kullanıcı)
  member.roles.add(ayar.kizRolu);
  member.roles.remove(ayar.kayitsizRolu);
     const kemokanal = message.guild.channels.cache.find(c => c.id == ayar.chatKanali)
    const embed1 = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    .setThumbnail(message.author.avatarURL)
    .setDescription(`<@!${member.id}> adlı kullanıcı <@&${ayar.kizRolu}> olarak kayıt edildi. \`${member.guild.memberCount}\` üyeye ulaştık.`)
    .setColor("RANDOM")
    .setFooter("developed by kemosalvo")
    .setTimestamp()
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(`<@!${member.id}> <@&${ayar.kizRolu}> olarak kayıt edildi!`)
  .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
  return message.channel.send(embed).then(kemokanal.send(embed1)).then//
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k"],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  usage: "kız [üye] [isim]",
  description: "Belirtilen üyeyi kız olarak kaydedersiniz."
}//
