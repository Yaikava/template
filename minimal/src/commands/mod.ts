import {
  Collection,
  Bot,
  DiscordenoMessage,
  DiscordenoInteraction,
  ApplicationCommandOption,
  ApplicationCommandTypes
} from "../../deps.ts";

export type subCommand = Omit<Command, "subcommands">;
export type subCommandGroup = {
  name: string;
  subCommands: subCommand[];
};
export interface Command {
  name: string;
  description: string;
  usage?: string[];
  options?: ApplicationCommandOption[];
  type: ApplicationCommandTypes;
  /** Defaults to `Guild` */
  scope?: "Global" | "Guild";
  execute: (bot: Bot, message: DiscordenoMessage, interaction: DiscordenoInteraction) => unknown;
  subcommands?: Array<subCommandGroup | subCommand>;
}

export const commands = new Collection<string, Command>();

export function createCommand(command: Command) {
  commands.set(command.name, command);
}