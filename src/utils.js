function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date)) throw new Error('Invalid date');
  return date.toISOString().split('T')[0];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { formatDate, capitalize };
