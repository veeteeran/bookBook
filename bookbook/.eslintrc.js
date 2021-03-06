module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "react",
    "prettier",
    "eslint-plugin-import-helpers",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "never",
        groups: [["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: false },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", "jsx"] }],
    "react/prop-types": 0,
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
}