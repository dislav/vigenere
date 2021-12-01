import { encodeVigenere } from './vigenere';

const TEXT =
    'В симметричной криптосистеме секретный ключ передается по защищенному каналу';
const HASH_KEY = 'Сливочный';

console.log('');
console.log(`Исходное предложение: ${TEXT}`);
console.log(`Ключ: ${HASH_KEY}`);
console.log('');
console.log('>>> ', encodeVigenere(TEXT, HASH_KEY));
console.log('');
