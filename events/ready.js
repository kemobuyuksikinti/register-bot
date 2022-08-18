module.exports = client => {
  client.user.setStatus("online");
  console.log(`${client.user.username} BOT AKTIF`)
client.user.setActivity(`kemosalvo`, { type: "PLAYING"});
};
