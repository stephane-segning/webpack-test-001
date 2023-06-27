# Webpack Test Project

This is a very basic with typescript and webpack to illustrate how to work HTML5 in a clean manner.

## Stack
- PostCSS
- Webpack
- TypeScript / JavaScript (EcmaScript)
- Sass / CSS
- HTML5

## Running locally
- Run the command 
  ```bash
  yarn develop
  ```
  to start the dev server. Open browser at [localhost:4000](http://localhost:4000) to see it.

- Build the code:
  ```bash
  yarn build
  ```
  Keep in mind, that this will remove the previous build saved at dist (using rimraf) and create a new one.

- Deploy the code
  ```bash
  yarn deploy
  ```
  This will build the code and then deploy it on the github branch related to the project.

  This site should be deployed at https://stephane-segning.github.io/webpack-test-001.