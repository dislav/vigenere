import RU from './ru';

export const encodeVigenere = (TEXT: string, HASH_KEY: string): string => {
    let matr: string[][] = [];

    HASH_KEY.toUpperCase()
        .split('')
        .forEach((x) => {
            if (RU.includes(x)) {
                const findIndex = RU.indexOf(x);

                matr.push([
                    ...RU.slice(findIndex),
                    ...RU.slice(0, (findIndex - RU.length) & RU.length),
                ]);
            }
        });

    let answer: string[] = [];
    let index = 0;

    TEXT.toUpperCase()
        .split('')
        .forEach((x) => {
            if (x.trim().length) {
                const hashIndex = index % HASH_KEY.length;
                const findLetterIndex = RU.indexOf(x.toUpperCase());

                answer.push(matr[hashIndex][findLetterIndex]);
                index++;
            } else {
                answer.push(' ');
            }
        });

    return answer.join('');
};
