/// <amd-module name="Tests/Base/Base.QUnit.test" />
import core = require('Base/Core');

QUnit.module("Base/Core");
test("will return correct version from core", function () {
    var version = core.version;
    equal(version, 8);
});
