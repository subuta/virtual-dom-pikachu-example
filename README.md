# virtual-dom-pikachu-example
pikachu simple animation example.

## Uses
- [redux-virtual-dom](https://github.com/subuta/redux-virtual-dom)
  - My library to make use of virtual-dom easy with redux :)
- [snabbdom](https://github.com/paldepind/snabbdom)
  - Easy to use virtual-dom library
- [free-style](https://github.com/blakeembrey/free-style)
  - for better CSSinJS
- [redux](https://github.com/reactjs/redux)
  - for Flux based state management
- [reselect](https://github.com/reactjs/reselect)
  - for better state handling

## Getting started 
### Installation
```
npm install jspm@beta -g
brew install caddy
NODE_ENV=development npm i
jspm i
```

### Start app
```
npm run serve
open http://localhost:3000
```

### Build and start server as production
```
npm run build // creates dist/bundled.js
npm run servep // start server using dist/bundled.js 
open http://localhost:3000
```
