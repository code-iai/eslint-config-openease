# eslint-config-openease

```[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)](http://badge.fury.io/js/eslint-config-airbnb-base)```

This package provides OpenEase's JS .eslintrc.js (without React plugins) as an extensible shared config which is based on version 13.1.0 of AirBnb's base eslint-config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6. It requires `eslint` and `eslint-plugin-import`.

If you use yarn, run `npm info "eslint-config-openease@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-openease@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-openease
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-openease;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-openease eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-openease
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-openease eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "airbnb-base"` to your .eslintrc.


```sh 
## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
```
