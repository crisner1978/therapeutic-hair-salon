import { hash, compare } from 'bcryptjs'

export async function hashPass(password){
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

export async function verifyPass(password, hashedPassword){
    const isValid = await compare(password, hashedPassword);
    return isValid;
}