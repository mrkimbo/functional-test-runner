const express = require('express');
const package = require('../package');
const { create } = require('./server');
const { readFileSync } = require('fs');
const _ = require('underscore');
const expand = require('glob-expand');
const { open } = require('openurl');

const CONFIG = package['runner-config'];
const PROJECT_ROOT = `${__dirname}/..`;
const templatePath = PROJECT_ROOT + '/runner/template.html';
const template = _.template(readFileSync(templatePath, 'utf8'));

const server = create(9000);
const files = expand(CONFIG.test);

console.log('config:', CONFIG);

let html = template({
  tests: files.map((file) => `<script src="/${file}"></script>`).join('\n')
});

// serve app files
console.log(`${PROJECT_ROOT}/${CONFIG['app-root']}`);
server.use(express.static(`${PROJECT_ROOT}/${CONFIG['app-root']}`));

server.use(express.static(`${PROJECT_ROOT}/`));

// serve runner files
server.use(express.static(`${PROJECT_ROOT}/runner/public/`));

// serve runner page
server.get('/runner', (req, res) => {
  res.send(html);
});

open('http://localhost:9000/runner?random=true&catch=false');
