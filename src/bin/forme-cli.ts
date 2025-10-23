#!/usr/bin/env node

import { program } from "commander";
import { createAppCommand } from "../commander/base/create";
import { infoCommand } from "../commander/base/info";
import { registeCommander } from "../commander/registeCommander";

export function loadCommander() {
  registeCommander(infoCommand);
  registeCommander(createAppCommand);
  program.parse();
}
