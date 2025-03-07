// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// export default {
//   extends: ["next/core-web-vitals", "next/typescript", ...compat.extends()],
//   rules: {
//     "@typescript-eslint/no-unused-vars": "off",
//     "react/no-unescaped-entities": "off",
//   },
// };

// import { FlatCompat } from "@eslint/eslintrc";

// const compat = new FlatCompat();

// export default [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     rules: {
//       "@typescript-eslint/no-unused-vars": "off",
//       "react/no-unescaped-entities": "off",
//     },
//   },
// ];

// const eslintConfig = [
//   "next/core-web-vitals",
//   "next/typescript",
//   ...compat.extends(),
// ];

// export default {
//   ...eslintConfig,
//   rules: {
//     "@typescript-eslint/no-unused-vars": "off",
//     "react/no-unescaped-entities": "off",
//   },
// };
