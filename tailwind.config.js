/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 添加 corePlugins 配置来避免与现有样式冲突
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的默认样式重置
  },
}