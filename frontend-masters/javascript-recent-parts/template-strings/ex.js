function upper(strings, ...values) {}

const name = 'kyle',
const twitter = 'getify',
const topic = 'JS Recent Parts';

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    'Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!'
);
