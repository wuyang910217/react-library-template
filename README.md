# 开发react library模板

使用create-umi

## 命令

- 首次运行 执行`npm i`安装依赖
- 本地开发 执行`npm run dev`
- 打包编译 执行`npm run build`
- 测试 执行`npm run test`
- 发布到npm 执行`npm publish`

## 说明

- 支持css或less以及css module的引入方式
- 一般来说 项目依赖要放在dependencies里，打包时会打包进去，而React一般放在peerDependencies，打包时不会打包进去

详细配置见https://www.npmjs.com/package/umi-library

## LICENSE

MIT
