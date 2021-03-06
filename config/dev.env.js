'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	APP_NAME: process.env.APP_NAME,
	ACL_URL: '"http://devacl.japisale.com/api/"',
	GIT_URL: '"http://gittrack.perudatos.com/"',
});
