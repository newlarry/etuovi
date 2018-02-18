require('dotenv').config();

const helper = require('../helper');
const assert = require('assert');
const path = require('path');
const fs = require('final-fs');

const report = require('../etuovi__scan__report.json');

describe('test cmds newconfig', function() {
    beforeEach(helper.ensureCleanTmpDir);

    it('should create a new json config file', function() {
        const newConfig = require('../../cmds/newconfig');
        const cwd = process.cwd();
        process.chdir(helper.tmpDir);
        return newConfig().then(file => {
            process.chdir(cwd);
            // TODO: check structure here, rather than just check it parses as json.
            return fs.readJSON(path.join(helper.tmpDir, file));
        });
    });
});