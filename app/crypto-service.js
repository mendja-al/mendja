let bcrypt = require("bcrypt");
let crypto = require("crypto");

class CryptoService {

    //for regular use
    async hashPassword(password) {
        const nrRounds = 12;
        return bcrypt.hash(password,nrRounds);
    }

    //useful if the password is guaranteed to be unique and have high entropy, such as session ids
    fastHash(password) {
        return crypto.createHash('sha256').update(password.toString()).digest("hex");
    }

    //works only for hashes generated by hashPassword
    async comparePassword(password, hash) {
        if(password && hash) {
            return bcrypt.compare(password, hash);
        }
        return false;
    }

    //CSPRNG, 128 bits
    getRandomBytes() {
        return crypto.randomBytes(16).toString('hex');
    }
}

module.exports = new CryptoService();