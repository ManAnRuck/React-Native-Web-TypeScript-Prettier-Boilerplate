[![CircleCI](https://circleci.com/gh/ReggaePanda/React-Native-Web-TypeScript-Prettier-Boilerplate.svg?style=svg)](https://circleci.com/gh/ReggaePanda/React-Native-Web-TypeScript-Prettier-Boilerplate)

# React-Native-Web-TypeScript-Prettier-Boilerplate

## Installation
```bash
clone https://github.com/ReggaePanda/React-Native-Web-TypeScript-Prettier-Boilerplate.git MyProject
cd MyProject
yarn
yarn build
```

run project
```bash
yarn dev
```

open new terminal and run iOS simulator
```bash
cd packages/app && react-native run-ios
```


## Package update issues


| Project package | Package        | Issue  |
| --------------- |:-----------------------:| -----|
| app             | styled-components@4.0.0 | [Typescript types are not available](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/29795) |
