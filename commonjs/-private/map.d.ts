export declare class TrackedMap<K = unknown, V = unknown> extends Map<K, V> {
    get(key: K): V | undefined;
    has(key: K): boolean;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    forEach(fn: (value: V, key: K, map: this) => void): void;
    get size(): number;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    clear(): void;
}
export declare class TrackedWeakMap<K extends object = object, V = unknown> extends WeakMap<K, V> {
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    delete(key: K): boolean;
}
