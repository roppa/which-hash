[![CircleCI](https://circleci.com/gh/roppa/which-hash.svg?style=svg)](https://circleci.com/gh/roppa/which-hash)

# Which Hash?

So you have some input, and you have a hex hash string, but you don't know which hashing algorithm was used? Think again! Find out which it is with this handy tool!

```javascript
const which = require('which-hash');
console.log(which('', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'));
// RSA-SHA256
```
