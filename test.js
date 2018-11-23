var test = require('tape');
var data = require('./test-data.js');
var fn = require('./app.js');

test('due date test', (assert) => {
    data.forEach((testData) => {
        assert.equal(fn(testData.submit, testData.turn).toISOString(), testData.expected)
    })
    assert.end();
});



