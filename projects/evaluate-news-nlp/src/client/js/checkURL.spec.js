import {checkURL} from 'checkURL'

describe("Test url", () => {
    test("Test url ", () => {
        expect(checkURL).toBeDefined();
    })

    test('valid url should return true', () => {
        expect(checkURL('http://wiki.com')).toBeTruthy()
    })

    test('invalid url should return false', () => {
        expect(checkURL('lcknsnkklsc')).toBeFalsy()
    })

});
