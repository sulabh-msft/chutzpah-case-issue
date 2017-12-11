@echo off
%appdata%\npm\tsc.cmd Base/Core.ts UI/Screen.ts Tests/Base/Base.QUnit.test.ts Tests/UI/UI.QUnit.test.ts qunit.d.ts require.d.ts --module amd --sourcemap --outdir Out/AmdPathDemo