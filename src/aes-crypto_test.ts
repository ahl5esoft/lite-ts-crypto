import { strictEqual } from 'assert';

import { AesCrypto as Self } from './aes-crypto';

describe('src/aes-crypto.ts', () => {
    describe('.encrypt(plaintext: string)', () => {
        it('ok', async () => {
            const self = new Self('1111');

            const res = await self.encrypt('123456');
            const plaintext = await self.decrypt(res);

            strictEqual(plaintext, '123456');
        });
    });

    describe('.compare(plaintext: string, cipherText: string)', () => {
        it('ok', async () => {
            const self = new Self('1111');

            const res = await self.encrypt('123456');
            const ok = await self.compare('123456', res);

            strictEqual(ok, true);
        });
    });
});