#!/usr/bin/env node
import { Command } from "commander";
import pc from "picocolors";
import packageJson from "../../../package.json";

export function infoCommand(program: Command) {
  program
    .command("info")
    .description("woo-cli 信息")
    .action(() => {
      console.log(
        pc.redBright(`woo-cli version: ${pc.yellow(packageJson.version)}`)
      );
      console.log(
        pc.redBright(`woo-cli author: ${pc.yellow(packageJson.author)}`)
      );
      console.log(
        pc.redBright(
          `woo-cli description: ${pc.yellow(packageJson.description)}`
        )
      );
    });
}
