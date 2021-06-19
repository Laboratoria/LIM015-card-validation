// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
    it('debería ser un objeto', () => {
        expect(typeof validator).toBe('object');
    });

    describe('validator.isValid', () => {
        it('debería ser una función', () => {
            expect(typeof validator.isValid).toBe('function');
        });

        it('debería retornar true para "4835081277352152"', () => {
            expect(validator.isValid("4835081277352152")).toBe(true);
        });

        it('debería retornar true para "5431710436910147"', () => {
            expect(validator.isValid("5431710436910147")).toBe(true);
        });

        it('debería retornar false para "9812456732456784"', () => {
            expect(validator.isValid("9812456732456784")).toBe(false);
        });

    });

    describe('validator.maskify', () => {
        it('debería ser una función', () => {
            expect(typeof validator.maskify).toBe('function');
        });

        it('Debería retornar "############2152" para "4835081277352152"', () => {
            expect(validator.maskify("4835081277352152")).toBe("############2152");
        });

        it('Debería retornar "1" para "1"', () => {
            expect(validator.maskify("1")).toBe("1");
        });

        it('Debería retornar "######orld" para "helloworld"', () => {
            expect(validator.maskify("helloworld")).toBe("######orld");
        });
    });

});