var express = require('express');
var router = express.Router();
var fs = require('fs');

// kubernetes-client godaddy
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

const client = new Client({ config: config.fromKubeconfig(), version: '1.13' });




/* GET users listing. */
router.get('/', async function(req, res, next) {
  const namespaces = await client.api.v1.namespaces('dso').get()
  console.log(namespaces);
  res.send(namespaces);
});

module.exports = router;