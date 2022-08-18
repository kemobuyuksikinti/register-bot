const Discord = require("discord.js");//
const ayar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed().setFooter("developed by kemosalvo").setColor('RANDOM');
  if(!message.member.roles.cache.has(ayar.kayitciRolu) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 5000}));
  let kisi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!kisi) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`Lütfen argümanları doğru yerleştirdiğinizden emin olun.`)).then(m => m.delete({timeout: 8000}));
  if (message.member.highestRole < kisi.highestRole) return message.channel.send(embed.setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(m => m.delete({timeout: 5000}));
  if(kisi.manageable) kisi.setNickname(kisi.user.username).catch();
  await kisi.roles.set(ayar.kayitsizRolu)
  .then(console.log)
  .catch(console.error)
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by kemosalvo`).setDescription(`${kisi} kayıtsıza atıldı (${message.author})`)).catch();//
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unregister", "unreg"], //
  permLevel: 0
}
exports.help = {
  name: 'kayıtsız',
};
