import bcrypt from 'bcryptjs';

const saltRounds = 10;

const crypt = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

const compare = (userPassword, passwordToCompare) => {
    return bcrypt.compare(userPassword, passwordToCompare);
}

export default {
    crypt: crypt,
    compare: compare
};