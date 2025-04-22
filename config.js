const crypto = require('crypto');
const crypto_orig_createHash = cripto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm === 'md4' ? 'sha256' : algorithm);