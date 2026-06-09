import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import oxlint from "eslint-plugin-oxlint";

export default [
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    rules: {
      "vue/component-name-in-template-casing": [
        "error",
        "kebab-case",
        {
          registeredComponentsOnly: false,
        },
      ],
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
      sourceType: "module",
    },
  },
  oxlint.configs["flat/recommended"],
];
