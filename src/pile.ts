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

    public cleanUp(func: (each: T) => any): this {

        for (const each of this._pile.values()) {
            func(each);
        }
        this.clear();

        return this;
    }

    public conclude<C extends any = any>(func: (key: string, value: T) => C): C[] {

        const results: C[] = this.map<C>(func);
        this.clear();

        return results;
    }

    public map<C extends any = any>(func: (key: string, value: T) => C): C[] {

        const results: C[] = [];
        for (const each of this._pile.entries()) {
            results.push(func(each[0], each[1]));
        }

        return results;
    }

    public forEach(func: (key: string, value: T) => any): this {

        for (const each of this._pile.entries()) {
            func(each[0], each[1]);
        }

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
