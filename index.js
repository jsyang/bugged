#!/usr/bin/env node

const http    = require('http');
const express = require('express');
const cors    = require('cors');

const setDeviceDetails = require('./setDeviceDetails');
const setClientDetails = require('./setClientsDetails');
const setGeoIP         = require('./setGeoIP');
const setNoCache       = require('./setNoCache');
const persistHit       = require('./persistHit');
const setCookie        = require('./setCookie');

const renderHits = require('./renderHits');

const app = express();
app.use(cors());

app.get(
    '/b',
    setNoCache,
    setGeoIP,
    setDeviceDetails,
    setClientDetails,
    setCookie,
    persistHit,
    (req, res) => res.status(200).send('OK!')
);

app.get('/', renderHits);

http.createServer(app)
    .listen(process.env.PORT, function (err) {
        if (err) {
            throw err;
        }
        const {address, port} = this.address();
        console.log(`Listening at http://${address}:${port}`);
    });