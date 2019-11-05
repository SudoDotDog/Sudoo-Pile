/**
 * @author WMXPY
 * @namespace Pile
 * @description Pile
 */

export class Pile<T extends any> {

    public static create<T extends any>() {

        return new Pile<T>();
    }

    private readonly _pile: Map<string, T>;

    private constructor() {

        this._pile = new Map<string, T>();
    }
}
