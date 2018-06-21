'use strict';
const assert = require('power-assert');
const html = require('../../lib/tasks/html');
describe('html', function() {
    it('init',(done) => {
        html({src: 'src/**/*.{ejs,pug}',dest:'public'}).subscribe(() => {
            done();
        });
    });
});
