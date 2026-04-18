async function fetchUser(id) {
  if (!id) throw new Error('id is required');
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

async function fetchProducts(filters = {}) {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([, v]) => v !== undefined && v !== null)
  );
  const params = new URLSearchParams(cleanFilters);
  const res = await fetch(`/api/products?${params}`);
  return res.json();
}

module.exports = { fetchUser, fetchProducts };
