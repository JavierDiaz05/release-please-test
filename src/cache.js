const store = new Map();

function get(key) {
  return store.get(key) ?? null;
}

function set(key, value) {
  store.set(key, value);
}

module.exports = { get, set };
