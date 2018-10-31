// DNS IP
const dns = require("dns");
dns.lookup("zet.io", (err, ip) => {
  if (err) throw err;
  console.log(ip);
});

// DNS for an IP
dns.reverse("173.255.206.103", (err, domains) => {
  if (err) throw err;
  domains.forEach(domain => {
    console.log(domain);
  });
});

dns.resolve("google.com", "A", (err, domains) => {
  if (err) throw err;
  domains.forEach(domain => {
    console.log(domain);
  });
});

// A - direct to a numerical IP address
// NS - authoratitive nameservers for your domain

// We can parse the url easily with "url" module
const url = require("url");
const qs = require("querystring");
const urlObj = url.parse(
  "http://examples.burningbird.net:8124/?file=main&name=cow"
);

console.log(urlObj);
console.log(qs.parse(urlObj.query));

const params = {
  file: "main",
  name: "cow"
};
console.log(qs.stringify(params));
