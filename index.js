const crypto = require('crypto');
const hashes = crypto.getHashes();

module.exports = function which(input, targetHash) {
  for (let i = 0; i < hashes.length; i++) {
    const hash = crypto.createHash(hashes[i]);
    hash.update(input);
    if (hash.digest('hex') === targetHash) {
      return hashes[i];
    }
  }
  return null;
};
