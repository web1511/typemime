#!/usr/bin/env node
const { program } = require("commander");
/*** 定制命令 ***/

program.version(require("./package.json").version);

program
  .command("ext <name>")
  .description("输入文件后缀名")
  .action(require("./mime"));

program.parse(process.argv);
