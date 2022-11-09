const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu."),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Github`,
          value: `https://github.com/Robby0501`,
        }),
        new SelectMenuOptionBuilder({
          label: `Linkden`,
          value: `https://www.linkedin.com/in/robert-ulrich/`,
        }),
        new SelectMenuOptionBuilder({
          label: `Twitter`,
          value: `https://twitter.com/EthmanRob`,
        }));
    await interaction.reply({
        components: [new ActionRowBuilder().addComponents(menu)]
    })
  },
};
