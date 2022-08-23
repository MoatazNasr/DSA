import HashTable from "./HashTable";
describe("HashTable", () => {
  it("instantiate an hash table object", () => {
    const hashTable = new HashTable();
    expect(hashTable).toBeDefined();
  });
  it("hashes a key", () => {
    const hashTable = new HashTable();
    const key = "firstTrial";
    const hashedKey = hashTable.hash(key);
    expect(hashedKey).toBeLessThan(32);
  });
  it("stores/sets a key-value in hash table bucket", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const secondKey = "secondTrial";
    const valueOfFirstKey = 36;
    const valueOfSecondKey = 15;
    hashTable.set(firstKey, valueOfFirstKey);
    hashTable.set(secondKey, valueOfSecondKey);
    expect(hashTable.keys.hasOwnProperty(firstKey)).toBeTruthy();
    expect(hashTable.keys.hasOwnProperty(secondKey)).toBeTruthy();
  });
  it("deletes a key from the hash table", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const secondKey = "secondTrial";
    const valueOfFirstKey = 36;
    const valueOfSecondKey = 15;
    hashTable.set(firstKey, valueOfFirstKey);
    hashTable.set(secondKey, valueOfSecondKey);
    expect(hashTable.keys.hasOwnProperty(firstKey)).toBeTruthy();
    expect(hashTable.keys.hasOwnProperty(secondKey)).toBeTruthy();
    hashTable.delete(firstKey);
  });
  it("gets a specific key value from the hash table", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const secondKey = "secondTrial";
    const valueOfFirstKey = 36;
    const valueOfSecondKey = 15;
    hashTable.set(firstKey, valueOfFirstKey);
    hashTable.set(secondKey, valueOfSecondKey);
    const keyValue = hashTable.get(secondKey);
    expect(keyValue).toBe(15);
  });
  it("checks if the hash table has a specific key", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const valueOfFirstKey = 36;
    hashTable.set(firstKey, valueOfFirstKey);
    expect(hashTable.has(firstKey)).toBeTruthy();
  });
  it("gets all keys that exits in the hash table", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const secondKey = "secondTrial";
    const valueOfFirstKey = 36;
    const valueOfSecondKey = 15;
    hashTable.set(firstKey, valueOfFirstKey);
    hashTable.set(secondKey, valueOfSecondKey);
    const allKeys = hashTable.getKeys();
    expect(allKeys.length).toBe(2);
    expect(allKeys[0]).toBe("firstTrial");
    expect(allKeys[1]).toBe("secondTrial");
  });
  it("gets all values that exits in the hash table", () => {
    const hashTable = new HashTable();
    const firstKey = "firstTrial";
    const secondKey = "secondTrial";
    const valueOfFirstKey = 36;
    const valueOfSecondKey = 15;
    hashTable.set(firstKey, valueOfFirstKey);
    hashTable.set(secondKey, valueOfSecondKey);
    const allValues = hashTable.getValues();
    expect(allValues[0]).toBe(36);
    expect(allValues[1]).toBe(15);
    console.log(allValues)
  });
});
