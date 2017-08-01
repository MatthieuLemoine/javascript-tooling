# Javascript Tooling

# Babel

```
npm i -D babel-cli babel-preset-env babel-preset-stage-3 babel-plugin-module-resolver
```

Atom packages :

```
apm install language-babel
```

Run :

```
node_modules/.bin/babel ./src/index.js -o ./build/babel/index.js
// or
npm run babel
```

Documentation :
- [cli](https://babeljs.io/docs/usage/cli/)
- [plugins](https://babeljs.io/docs/plugins/)

# ESLint

```
npm i -D eslint babel-eslint eslint-plugin-jest
```

Atom packages :

```
apm install linter linter-eslint linter-ui-default
```

Run :

```
node_modules/.bin/eslint src/**.js
// or
npm run eslint
```

Auto fix :

```
node_modules/.bin/eslint src/**.js --fix
// or
npm run eslint:fix
```

Documentation :
- [cli](http://eslint.org/docs/user-guide/command-line-interface)
- [rules](http://eslint.org/docs/rules/)

# Prettier

```
npm i -D prettier prettier-eslint prettier-eslint-cli
```

Atom packages :

```
apm install prettier-atom
```

Run :

```
node_modules/.bin/prettier-eslint --single-quote --trailing-comma es5  --list-different \"**/*.js\"
// or
npm run prettier
```

Auto fix :

```
node_modules/.bin/prettier-eslint --single-quote --trailing-comma es5  --write \"**/*.js\"
// or
npm run prettier:fix
```

Documentation :
- [options](https://github.com/prettier/prettier#options)

# Webpack

```
npm i -D webpack babel-loader
```

Run :

```
node_modules/.bin/webpack
// or
npm run webpack
```

Documentation :
- [concepts](https://webpack.js.org/concepts/)
- [guides](https://webpack.js.org/guides/)
- [configuration](https://webpack.js.org/configuration/)

# Jest

```
npm i -D jest babel-jest
```

Run :

```
node_modules/.bin/jest
// or
npm run jest
```

Watch mode :

```
node_modules/.bin/jest --watch
// or
npm run jest:watch
```

With coverage :

```
node_modules/.bin/jest --coverage
// or
npm run jest:coverage
```

Documentation :
- [getting-started](https://facebook.github.io/jest/docs/en/getting-started.html)
