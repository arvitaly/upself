# upself ♻ self-update global npm package.
  
Library check every N seconds npm registry for new version of package, which required `upself`.

Then start `npm install packName -g`. 

And if update made without errors, restart process. Upself use module `cluster` and start app in forked process.

That is all 🎅.

!!! Now not have tests, only type-checking

[![Build Status](https://travis-ci.org/arvitaly/upself.svg?branch=master)](https://travis-ci.org/arvitaly/upself)
[![Coverage Status](https://coveralls.io/repos/github/arvitaly/upself/badge.svg?branch=master)](https://coveralls.io/github/arvitaly/upself?branch=master)
[![npm version](https://badge.fury.io/js/upself.svg)](https://badge.fury.io/js/upself)
[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)


# Install

    npm install upself --save

# Usage

    import upself from "upself";  

    // check new version every 20 seconds  
    upself({timeout: 20000})(()=>{
        // here app's code        
    }); 

# Tests

    npm install
    npm test