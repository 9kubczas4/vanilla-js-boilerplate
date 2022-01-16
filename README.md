# vanilla-js-boilerplate
Boilerplate project: typescript + scss + html + webpack + mocha + chai + eslint.
It's really basic project which allows quickly start working on simple web pages without any framework.

# Setup
1. Clone repo
3. Run `npm install`
4. Run `npm run prepare && npm run create-hook`. Those scripts are responsible for configure husky for git hook:pre-push. Basically before push code to origin we would like to run unit tests and lint.
5. Run `npm run build`
6. Run `npm start`

# Tests
1. Run `npm test`
