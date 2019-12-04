const Convert = require('../src/index');

describe('Convert instance', () => {
    it('Should be an object', () => {
        const obj = new Convert();

        assert.isObject(obj);
    });
});

describe('Convert instance', () => {
    it('Should be an object', () => {
        const obj = new Convert();
        // const expected = new Error('Введите число');


        assert.throws(obj.convertToString, 'Введите число');
        
    });
});
