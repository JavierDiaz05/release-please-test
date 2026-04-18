const store = new Map();

function get(key) {
  return store.get(key) ?? null;
}

function remove(key) {
  return store.delete(key);
}

function clear() {
  store.clear();
}

function set(key, value) {
  if (key === undefined || key === null) throw new Error('key is required');
  store.set(key, value);
}

module.exports = { get, set, remove, clear };
