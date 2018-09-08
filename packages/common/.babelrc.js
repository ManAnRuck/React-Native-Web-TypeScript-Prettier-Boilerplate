{
  "presets": [
    ["@babel/env", {
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }],
    "@babel/stage-3",
    "@babel/typescript"
  ],
  "plugins": [
    ["module-resolver", {
      "extensions": [".js", ".jsx", ".ts", ".tsx"],
      "root": ["./src"]
    }]
  ]
}