#!/usr/bin/env node
import { Command } from "commander";
import pc from "picocolors";
import { validateTemplate } from "utils/validateTemplate";
import fsextra from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { TamplateEum } from "types";
// 依据模版创建内容

// 基本命令 create <project-name>
// 可选项：-t --template <template-name> 指定模版名称
// 可选项：-r --remote <remote-url> 远程加载列表
// 可选项：-p --path 项目路径 默认：当前执行程序的父路径下

// 是否选择了模版？
// 是 - 生成模版(// 模版内容详细配置，包依赖，风格，约束。。。。 // TODO)
// 否 - 打开模版选择列表
// 选择一个模版 - 生成模版

export function createAppCommand(program: Command) {
  function selectTemplate() {
    console.log(pc.green("请选择一个模版"));
  }

  function createTemplate(template: string, projectName: string) {
    console.log(pc.green(`正在创建 ${template} 项目`));
    // 拿到用户当前工作目录（目标项目创建位置）
    const targetPath = path.join(process.cwd(), projectName);
    // 获取CLI工具安装位置的模版文件路径
    // __dirname 在 CommonJS 中指向当前文件所在目录
    // 从 src/commander/base 向上两级到达项目根目录，再进入 tamplates 文件夹
    const templatePath = path.join(
      __dirname,
      "../tamplates",
      TamplateEum[template]
    );

    // TODO 删除
    console.log(pc.blue(`模板路径: ${templatePath}`));
    console.log(pc.blue(`目标路径: ${targetPath}`));

    // 写入文件
    fsextra
      .copy(templatePath, targetPath)
      .then(() => console.log(pc.green(`${template} 项目创建成功！`)))
      .catch((err) => console.error(pc.red(`创建失败: ${err.message}`)));
  }

  program
    .command("create <project-name>")
    .option("-t, --template <template-name>", "指定模版名称")
    .description("创建一个项目")
    .action((projectName, options) => {
      const { template } = options;
      console.log("模版名称：", template);
      if (template && validateTemplate(template)) {
        createTemplate(template, projectName);
      } else {
        console.log(pc.red(`模版 ${template} 不存在, 请选择一个模版`));
        selectTemplate();
      }
    });
}
