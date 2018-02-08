# Restaurant de la Poste (Chez Robert)

### Installation

This project use yarn and the experimental yarn workspaces for package.json splitting and convenience.

Please install the last version of yarn and run 
`yarn config set workspaces-experimental true`

Then run:
`yarn install`


For testing and developping on the projet with true hot module replacement, run
`yarn start`

For testing with prod config:
`yarn start:prod`

For testing in electron, run:
`yarn dev`

For packaging for electron:
```
yarn build:electron
yarn build-electron
yarn package-all
```

For building the production website and deploy it, run:
```
yarn build:main
yarn deploy
```

### Test and Cover

For running the test suite:
`yarn test`

For displaying covering:
`yarn cover`


### Eslint

For displaying lint errors:
`yarn eslint`
