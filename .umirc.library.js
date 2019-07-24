export default {
  entry: 'src/index.js',
  cjs: 'rollup',
  esm: 'rollup',
  umd: {
    name: 'DemoLib', // 指定库的名称
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  cssModules: true,
  doc: {
    // themeConfig: { mode: 'dark' },
    base: '/lib-template',
  },
};
