async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

async function fetchProducts(filters = {}) {
  const params = new URLSearchParams(filters);
  const res = await fetch(`/api/products?${params}`);
  return res.json();
}

module.exports = { fetchUser, fetchProducts };
