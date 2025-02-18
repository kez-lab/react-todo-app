const crypto = require('crypto');
const originalCreateHash = crypto.createHash;

crypto.createHash = (algorithm, options) => {
  if (algorithm === 'md4') {
    return originalCreateHash('md5', options);
  }
  return originalCreateHash(algorithm, options);
};

module.exports = function override(config, env) {
  return config;
};