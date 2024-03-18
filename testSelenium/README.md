SELENIUM TESTS 
part of BTH Blekinge Technical Institute project 2024
jsRamverk course

Note: do not run on WSL. 
On windows, use cygwin. 

Run nom install for installing this package.
For the BTH server run bth install in the bth dir bthSelenium.

The test files (test/firstScripts)
test 
- browsers from Selenium startup guide 
https://www.selenium.dev/documentation/

- website jsframeworks.ysojs.se - test me-api 
https://jsframeworks.ysojs.se/ by Ylva (expresss & nodejs, angular)

- bth server run locally (when enabled, read below)

CLI:
-- npm install
-- npm test

START BthSelenium server
It can be run with 
-- npm start 
AND Then, enable the // marked tests in file tests/firstScript/runningTestsDbWebb.spec.js
& run test

-- npm start 
-- npm test

The files can also be tested with node
node dir/filename.js 