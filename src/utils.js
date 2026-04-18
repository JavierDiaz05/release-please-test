function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date)) throw new Error('Invalid date');
  return date.toISOString().split('T')[0];
}

function capitalize(str) {
  if (typeof str !== 'string') throw new Error('Expected a string');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

module.exports = { formatDate, capitalize, truncate };
