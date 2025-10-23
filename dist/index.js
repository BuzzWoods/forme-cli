#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/bin/woo-cli.ts
var import_commander2 = require("commander");

// src/commander/base/create.ts
var import_picocolors = __toESM(require("picocolors"));

// src/types.ts
var TamplateEum = /* @__PURE__ */ ((TamplateEum2) => {
  TamplateEum2["react"] = "react-tamplate";
  TamplateEum2["react-ts"] = "react-ts-tamplate";
  return TamplateEum2;
})(TamplateEum || {});

// src/utils/validateTemplate.ts
function validateTemplate(templateName) {
  return Boolean(TamplateEum[templateName]);
}

// src/commander/base/create.ts
var import_fs_extra = __toESM(require("fs-extra"));
var import_path = __toESM(require("path"));
function createAppCommand(program3) {
  function selectTemplate() {
    console.log(import_picocolors.default.green("\u8BF7\u9009\u62E9\u4E00\u4E2A\u6A21\u7248"));
  }
  function createTemplate(template, projectName) {
    console.log(import_picocolors.default.green(`\u6B63\u5728\u521B\u5EFA ${template} \u9879\u76EE`));
    const targetPath = import_path.default.join(process.cwd(), projectName);
    const templatePath = import_path.default.join(
      __dirname,
      "../tamplates",
      TamplateEum[template]
    );
    console.log(import_picocolors.default.blue(`\u6A21\u677F\u8DEF\u5F84: ${templatePath}`));
    console.log(import_picocolors.default.blue(`\u76EE\u6807\u8DEF\u5F84: ${targetPath}`));
    import_fs_extra.default.copy(templatePath, targetPath).then(() => console.log(import_picocolors.default.green(`${template} \u9879\u76EE\u521B\u5EFA\u6210\u529F\uFF01`))).catch((err) => console.error(import_picocolors.default.red(`\u521B\u5EFA\u5931\u8D25: ${err.message}`)));
  }
  program3.command("create <project-name>").option("-t, --template <template-name>", "\u6307\u5B9A\u6A21\u7248\u540D\u79F0").description("\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE").action((projectName, options) => {
    const { template } = options;
    console.log("\u6A21\u7248\u540D\u79F0\uFF1A", template);
    if (template && validateTemplate(template)) {
      createTemplate(template, projectName);
    } else {
      console.log(import_picocolors.default.red(`\u6A21\u7248 ${template} \u4E0D\u5B58\u5728, \u8BF7\u9009\u62E9\u4E00\u4E2A\u6A21\u7248`));
      selectTemplate();
    }
  });
}

// src/commander/base/info.ts
var import_picocolors2 = __toESM(require("picocolors"));

// package.json
var package_default = {
  name: "woo-cli",
  version: "1.0.0",
  description: "front-end cli",
  repository: {
    type: "git",
    url: "https://gitee.com/huangWenT/woo-cli.git"
  },
  license: "ISC",
  author: "huangwentao",
  type: "commonjs",
  main: "dist/index.js",
  bin: {
    woo: "dist/index.js"
  },
  scripts: {
    build: "tsup"
  },
  devDependencies: {
    "@types/node": "^24.9.1",
    tsup: "^8.5.0"
  },
  dependencies: {
    commander: "^14.0.1",
    "fs-extra": "^11.3.2",
    picocolors: "^1.1.1",
    typescript: "^5.9.3"
  }
};

// src/commander/base/info.ts
function infoCommand(program3) {
  program3.command("info").description("woo-cli \u4FE1\u606F").action(() => {
    console.log(
      import_picocolors2.default.redBright(`woo-cli version: ${import_picocolors2.default.yellow(package_default.version)}`)
    );
    console.log(
      import_picocolors2.default.redBright(`woo-cli author: ${import_picocolors2.default.yellow(package_default.author)}`)
    );
    console.log(
      import_picocolors2.default.redBright(
        `woo-cli description: ${import_picocolors2.default.yellow(package_default.description)}`
      )
    );
  });
}

// src/commander/registeCommander.ts
var import_commander = require("commander");
var registeCommander = (fn) => {
  fn(import_commander.program);
};

// src/bin/woo-cli.ts
function loadCommander() {
  registeCommander(infoCommand);
  registeCommander(createAppCommand);
  import_commander2.program.parse();
}

// src/index.ts
loadCommander();
//# sourceMappingURL=index.js.map