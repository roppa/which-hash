const which = require('.');

describe('Which hash?', () => {
  const sha256EmptyHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  test('should return sha256 algorithm', () => {
    expect(which('', sha256EmptyHash)).toEqual('RSA-SHA256');
  });

  test('should return null for non-existant algorithm', () => {
    expect(which('null', sha256EmptyHash)).toEqual(null);
  });

});
