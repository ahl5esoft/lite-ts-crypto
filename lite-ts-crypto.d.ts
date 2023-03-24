declare abstract class CryptoBase {
    abstract compare(plaintext: string, cipherText: string): Promise<boolean>;
    abstract decrypt(cipherText: string): Promise<string>;
    abstract encrypt(plaintext: string): Promise<string>;
}
declare class AesCrypto extends CryptoBase {
    private m_Key;
    constructor(m_Key: string);
    compare(plaintext: string, cipherText: string): Promise<boolean>;
    decrypt(cipherText: string): Promise<string>;
    encrypt(plaintext: string): Promise<string>;
}