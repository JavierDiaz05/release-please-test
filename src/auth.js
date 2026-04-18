async function login(token) {
  if (!token) throw new Error('token is required');
  const res = await fetch('/api/v2/auth/login', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

async function logout(token) {
  const res = await fetch('/api/v2/auth/logout', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

module.exports = { login, logout };
