export abstract class CryptoBase {
    /**
     * @example
     * ```typescript
     *  const crypt: CryptBase
     *  const res = await crypt.compare(明文, 密文);
     *  // res = true
     * ```
     */
    public abstract compare(plaintext: string, cipherText: string): Promise<boolean>;

    /**
     * @example
     * ```typescript
     *  const crypt: CryptBase
     *  const res = await crypt.decrypt(密文);
     *  // res = 明文
     * ```
     */
    public abstract decrypt(cipherText: string): Promise<string>;

    /**
     * @example
     * ```typescript
     *  cosnt res = crypt.encrypt(明文);
     *  const res2 = await compare(明文, res);
     *  // res2 = true
     * ```
     */
    public abstract encrypt(plaintext: string): Promise<string>;
}