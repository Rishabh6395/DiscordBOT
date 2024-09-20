import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "TOKEN"
);

(async () => {
    

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("APPLICATION"), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
})();
