/// <amd-module name="Tests/UI/UI.QUnit.test" />
import screen = require('UI/Screen');

QUnit.module("UI/Screen");
test("will build display version", function () {
    var disp = screen.displayVersion;
    equal(disp, "Version: 8");
});

