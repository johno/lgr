# lgr [![Build Status](https://secure.travis-ci.org/johnotander/lgr.svg?branch=master)](https://travis-ci.org/johnotander/lgr) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

__Work in progress__

Turn a stream of logs into data.

## Installation

```bash
npm install --save lgr
```

## Usage

```javascript
const lgr = require('lgr')

myLogStream.pipe(lgr()).pipe(through(data => {
  // { ... }
}))
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
