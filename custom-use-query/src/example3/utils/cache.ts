export class Cache<Key, Value> {
  private cache: Map<Key, Value>;

  constructor() {
    this.cache = new Map<Key, Value>();
  }

  public get(key: Key): Value | undefined {
    return this.cache.get(key);
  }

  public set(key: Key, value: Value): void {
    this.cache.set(key, value);
  }

  public has(key: Key): boolean {
    return this.cache.has(key);
  }

  public delete(key: Key): void {
    this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
  }

  public size(): number {
    return this.cache.size;
  }

  public keys(): IterableIterator<Key> {
    return this.cache.keys();
  }

  public values(): IterableIterator<Value> {
    return this.cache.values();
  }

  public entries(): IterableIterator<[Key, Value]> {
    return this.cache.entries();
  }
}
