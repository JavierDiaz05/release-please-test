const { formatDate, capitalize } = require('./utils');

console.assert(formatDate(new Date('2026-01-15')) === '2026-01-15', 'formatDate ok');
console.assert(capitalize('hola') === 'Hola', 'capitalize ok');
