const { readdirSync } = require("fs");

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentFolders = readdirSync("./src/components");
    for (const folder of componentFolders) {
      const componentFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { selectMenus } = client;

      switch (folder) {
        case "selectMenus":
            for (const file of componentFiles) {
                const menu = require(`../../components/${folder}/${file}`)
                selectMenus.set(menu.data.name, menu);
            }
            break;

        default:
            break;
      }
    }
  };
};
