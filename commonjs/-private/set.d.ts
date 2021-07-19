export declare class TrackedSet<T = unknown> extends Set<T> {
    has(value: T): boolean;
    entries(): IterableIterator<[T, T]>;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
    forEach(fn: (value1: T, value2: T, map: this) => void): void;
    get size(): number;
    add(value: T): this;
    delete(value: T): boolean;
    clear(): void;
}
export declare class TrackedWeakSet<T extends object = object> extends WeakSet<T> {
    has(value: T): boolean;
    add(value: T): this;
    delete(value: T): boolean;
}
