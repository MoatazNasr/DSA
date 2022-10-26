import LinkedList from "../Singly LinkedList/LinkedList";
const defaultHashTableSize = 32;
export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }
  hash(key) {
    let hash = 0;
    if (typeof key === "string") {
      hash = Array.from(key).reduce(
        (hashAccumulator, keySymbol) =>
          hashAccumulator + keySymbol.charCodeAt(0),
        0
      );
      // take each key and make it iteratable then
      // reduce it to one value as summation between hashAccumulator and keySymbol
      return hash % this.buckets.length;
    }
    return Math.abs(key) % this.buckets.length;
  }
  set(key, value) {
    const hashedKey = this.hash(key);
    this.keys[key] = hashedKey;
    const bucketLinkedList = this.buckets[hashedKey];
    const callback = (nodeValue) => nodeValue.key === key;
    const node = bucketLinkedList.findByValue(undefined, callback);
    if (node === null) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }
  delete(key) {
    const hashedKey = this.hash(key);
    delete this.keys[key];
    // delete a property from the keys object
    const bucketLinkedList = this.buckets[hashedKey];
    const callback = (nodeValue) => nodeValue.key === key;
    const node = bucketLinkedList.findByValue(undefined, callback);
    if (node !== null) {
      return bucketLinkedList.delete(node.value);
    }
    return null;
  }
  get(key) {
    const hashedKey = this.hash(key);
    const bucketLinkedList = this.buckets[hashedKey];
    const callback = (nodeValue) => nodeValue.key === key;
    const node = bucketLinkedList.findByValue(undefined, callback);
    if (node !== null) {
      return node.value.value;
    }
    return null;
  }
  has(key) {
    return this.keys.hasOwnProperty(key);
  }
  getKeys() {
    return Object.keys(this.keys);
  }
  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray().map((NodeValue) => NodeValue.value);
      // nodeValue represent the object that contains key and value , { key , value }
      return values.concat(bucketValues);
    }, []);
  }
  size() {
    return Object.keys(this.keys).length;
    // return the actual occupied size of hash table
  }
}

