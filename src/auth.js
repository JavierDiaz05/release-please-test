async function login(token) {
  const res = await fetch('/api/v2/auth/login', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

module.exports = { login };
