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

    it('should be able to add duplicated key value', (): void => {

        const pile: Pile<string> = Pile.create();

        const key: string = chance.string();

        pile.add(key, chance.string());
        pile.add(key, chance.string());

        expect(pile).to.be.lengthOf(1);
    });
});
