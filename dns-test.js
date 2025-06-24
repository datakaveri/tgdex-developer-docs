// save as dns-test.js
const dns = require('dns');

dns.resolve('registry.npmjs.org', (err, addresses) => {
  if (err) {
    console.error('DNS error:', err);
  } else {
    console.log('DNS addresses:', addresses);
  }
});
