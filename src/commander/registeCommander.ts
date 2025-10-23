import { Command, program } from "commander";

type RegisteCommander = (fn: (program: Command) => void) => void;

export const registeCommander: RegisteCommander = (fn) => {
  fn(program);
};
