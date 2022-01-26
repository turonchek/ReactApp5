import faker from 'faker';

export const HASHTAGS = Array(10).fill('').map(() => {
    return {
        id: faker.datatype.uuid(),
        word: faker.random.word(),
    }
});