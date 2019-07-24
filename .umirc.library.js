export default {
  entry: 'src/index.js',
  cjs: 'rollup',
  esm: 'rollup',
  umd: true, // 默认没有umd格式的输出
  cssModules: true,
  doc: {
    // themeConfig: { mode: 'dark' },
    base: '/whiteboard',
  },
};
