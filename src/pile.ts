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

    public get length(): number {

        return this._pile.size;
    }

    public add(key: string, value: T): this {

        this._pile.set(key, value);
        return this;
    }

    public clear(): this {

        this._pile.clear();
        return this;
    }

    public assertGet(key: string): T {

        const value: T | undefined = this.get(key);
        if (!value) {
            throw new Error('[Sudoo-Pile] Undefined Value');
        }

        return value;
    }

    public get(key: string): T | undefined {

        return this._pile.get(key);
    }
}
