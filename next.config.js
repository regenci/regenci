/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#000' },
  webpack(config) {
    return config
  },
  reactStrictMode: true,
})
