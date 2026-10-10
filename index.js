const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`KN Bot is online: ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
  const embed = new EmbedBuilder()
    .setColor(0xD4AF37)
    .setTitle('📜 قوانين KN | الحياة الواقعية')
    .setDescription(
      'حياك الله في سيرفر KN! 👋\n\n' +
      '**القوانين:**\n' +
      '1. احترام الأعضاء والإدارة.\n' +
      '2. يمنع السب والشتم.\n' +
      '3. يمنع الغش واستغلال الثغرات.\n' +
      '4. الالتزام بقوانين الرول بلاي.\n' +
      '5. الالتزام بتعليمات الإدارة.\n\n' +
      'نتمنى لك تجربة ممتعة في KN.'
    )
    .setFooter({ text: 'KN | Real Life RP' })
    .setTimestamp();

  try {
    await member.send({ embeds: [embed] });
  } catch {
    console.log(`تعذر إرسال رسالة إلى ${member.user.tag}`);
  }
});

client.login(process.env.DISCORD_TOKEN);
