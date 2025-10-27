# Forme CLI

> 一个快速生成前端项目模板的命令行工具

## 📦 安装

```bash
npm install -g forme-cli
```

## 🚀 快速开始

安装完成后，你可以通过 `forme` 命令来使用该工具：

```bash
# 创建一个新项目
forme create my-app -t react

# 查看版本信息
forme info
```

## 📖 功能介绍

Forme CLI 是一个轻量级的前端脚手架工具，旨在帮助开发者快速搭建前端项目。目前支持 React 项目模板的快速生成。

### 主要特性

- ✨ 简单易用的命令行界面
- 🎯 支持多种项目模板
- ⚡️ 快速创建项目结构
- 📝 TypeScript 支持
- 🎨 彩色命令行输出

## 📝 命令详解

### 1. 创建项目 - `create`

使用 `create` 命令创建一个新项目。

#### 基本用法

```bash
forme create <project-name> [options]
```

#### 参数说明

- `<project-name>`: **(必填)** 项目名称，将在当前目录下创建对应名称的文件夹

#### 选项

- `-t, --template <template-name>`: 指定使用的模板名称

#### 可用模板

| 模板名称   | 描述                         | 技术栈             |
| ---------- | ---------------------------- | ------------------ |
| `react`    | JavaScript 版本的 React 模板 | React + JavaScript |
| `react-ts` | TypeScript 版本的 React 模板 | React + TypeScript |

#### 使用示例

```bash
# 使用 React JavaScript 模板创建项目
forme create my-react-app -t react

# 使用 React TypeScript 模板创建项目
forme create my-react-ts-app -t react-ts
```

#### 注意事项

- 项目将在当前命令执行目录下创建
- 如果模板名称不存在，将提示选择可用模板
- 请确保项目名称不与当前目录下已有文件夹重复

### 2. 查看信息 - `info`

查看 Forme CLI 的版本信息和相关说明。

#### 基本用法

```bash
forme info
```

#### 显示内容

- 工具版本号
- 作者信息
- 工具描述

#### 使用示例

```bash
forme info
```

输出示例：

```
forme-cli version: 3.0.1
forme-cli author: huangwentao
forme-cli description: front-end cli
```

## 🔧 开发指南

### 项目结构

```
forme-cli/
├── src/
│   ├── bin/              # CLI 入口文件
│   ├── commander/        # 命令实现
│   │   ├── base/
│   │   │   ├── create.ts # 创建项目命令
│   │   │   └── info.ts   # 信息查询命令
│   │   └── registeCommander.ts
│   ├── utils/            # 工具函数
│   ├── index.ts
│   └── types.ts
├── tamplates/            # 项目模板
│   ├── react-tamplate/
│   └── react-ts-tamplate/
└── package.json
```

### 技术栈

- **TypeScript**: 类型安全的开发体验
- **Commander.js**: 命令行接口构建
- **fs-extra**: 增强的文件系统操作
- **picocolors**: 终端彩色输出
- **tsup**: 快速构建工具

### 本地开发

```bash
# 克隆项目
git clone https://gitee.com/huangWenT/forme-cli.git

# 安装依赖
cd forme-cli
npm install

# 构建项目
npm run build

# 本地测试
npm link
forme --help
```

### 发布流程

```bash
# 发布补丁版本 (x.x.1)
npm run publish:patch

# 发布次版本 (x.1.0)
npm run publish:minor

# 发布主版本 (1.0.0)
npm run publish:major
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC

## 👤 作者

**huangwentao**

- Repository: [https://gitee.com/huangWenT/forme-cli.git](https://gitee.com/huangWenT/forme-cli.git)

## 📮 反馈

如果你有任何问题或建议，欢迎通过以下方式联系：

- 提交 [Issue](https://gitee.com/huangWenT/forme-cli/issues)
- 发起 [Pull Request](https://gitee.com/huangWenT/forme-cli/pulls)

---

**Happy Coding! 🎉**
