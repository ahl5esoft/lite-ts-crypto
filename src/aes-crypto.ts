import { AES, enc } from 'crypto-js';

import { CryptoBase } from './crypto-base';

export class AesCrypto extends CryptoBase {
    public constructor(
        private m_Key: string,
    ) {
        super();
    }

    public async compare(plaintext: string, cipherText: string) {
        const res = await this.decrypt(cipherText);
        return res == plaintext;
    }

    public async decrypt(cipherText: string) {
        return AES.decrypt(cipherText, this.m_Key).toString(enc.Utf8);
    }

    public async encrypt(plaintext: string) {
        return AES.encrypt(plaintext, this.m_Key).toString();
    }
}