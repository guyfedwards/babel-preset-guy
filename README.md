# babel-preset-guy

## Install
```
$ yarn add --dev @babel/core @babel/cli git+ssh://git@github.com:guyfedwards/babel-preset-guy
```

## Usage
Add the following to your `babel.config.js`
```
module.exports = function(api) {
    api.cache(true)

    return {
      presets: ['guy']
    }
}
```

