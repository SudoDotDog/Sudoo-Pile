/**
 * @author WMXPY
 * @namespace Pile
 * @description Pile
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Pile } from '../../src/pile';

describe('Given {Pile} Class', (): void => {

    const chance: Chance.Chance = new Chance('pile-pile');

    it('should be able to construct', (): void => {

        const pile: Pile<string> = Pile.create();

        expect(pile).to.be.instanceOf(Pile);
    });

    it('should be able to add key value', (): void => {

        const pile: Pile<string> = Pile.create();

        pile.add(chance.string(), chance.string());
        pile.add(chance.string(), chance.string());

        expect(pile).to.be.lengthOf(2);
    });

    it('should be able to get value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key: string = chance.string();
        const value: string = chance.string();

        pile.add(key, value);

        const validResult: string | undefined = pile.get(key);
        const invalidResult: string | undefined = pile.get(chance.string());

        expect(validResult).to.be.equal(value);
        // tslint:disable-next-line: no-unused-expression
        expect(invalidResult).to.be.undefined;
    });

    it('should be able to assertGet value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key: string = chance.string();
        const value: string = chance.string();

        pile.add(key, value);

        const validResult: string = pile.assertGet(key);

        const exec = () => {
            pile.assertGet(chance.string());
        };

        expect(validResult).to.be.equal(value);
        expect(exec).to.be.throw('[Sudoo-Pile] Undefined Value');
    });

    it('should be able to add duplicated key value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key: string = chance.string();

        pile.add(key, chance.string());
        pile.add(key, chance.string());

        expect(pile).to.be.lengthOf(1);
    });

    it('should be able to add map value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key1: string = chance.string();
        const value1: string = chance.string();
        const key2: string = chance.string();
        const value2: string = chance.string();

        pile.add(key1, value1);
        pile.add(key2, value2);

        const result: string[] = pile.map((key: string, value: string) => key + value);

        expect(pile).to.be.lengthOf(2);
        expect(result).to.be.deep.equal([key1 + value1, key2 + value2]);
    });

    it('should be able to add conclude value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key1: string = chance.string();
        const value1: string = chance.string();
        const key2: string = chance.string();
        const value2: string = chance.string();

        pile.add(key1, value1);
        pile.add(key2, value2);

        const result: string[] = pile.conclude((key: string, value: string) => key + value);

        expect(pile).to.be.lengthOf(0);
        expect(result).to.be.deep.equal([key1 + value1, key2 + value2]);
    });

    it('should be able to add cleanup value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key1: string = chance.string();
        const value1: string = chance.string();
        const key2: string = chance.string();
        const value2: string = chance.string();

        pile.add(key1, value1);
        pile.add(key2, value2);

        const result: string[] = [];

        pile.cleanUp((value: string) => {
            result.push(value);
        });

        expect(pile).to.be.lengthOf(0);
        expect(result).to.be.deep.equal([value1, value2]);
    });
});
