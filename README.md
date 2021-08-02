## Test Scenarios for Inqusitive
Please find the mapping of Test Scripts for below mentioned Scenarios 
1. sc1_findtext.spec.js - Go to https://www.inquisitive.com/about and verify that the text 'Inquisitive Differentiation' is in the page.
2. sc2_modalurl.spec.js - Go to https://www.inquisitive.com/ and verify that when you click ‘Join’ that: (a) the URL changes; (b) a modal is displayed.
3. sc3_modalpopup.spec.js - Go to https://www.inquisitive.com/lesson/62-mapping and verify that clicking on 'Page 2’ of  the 'Lesson pages’ document causes a modal to pop up. 
4. sc4_reqfield.spec.js  - Go to https://www.inquisitive.com/signin and add tests for the following validation rules:
Required field validation
‘Email is required’
‘Password is required’
5. sc5_emailinvalid.spec.js -  Go to https://www.inquisitive.com/signin and add tests for the following validation rules:
‘Email address is not valid’
6. sc6_emailpassincorrect.spec.js - Go to https://www.inquisitive.com/signin and add tests for the following validation rules:
‘Email or password is incorrect’

## Test Data Files

Have used test data for scenarios 5 & 6. Please find the mapping for Test Data files (json files) with their respective Test Scripts - 
1. sc5_emailinvalid.spec.js - EmailSyntaxData.json
2. sc6_emailpassincorrect.spec.js - EmailPassNotRegData.json

#### Note - The test data json files are saved in fixtures folder and are referenced in the respective scripts with location path.


### Required dependencies to be installed
* npm install --save
* npm install cypress

### Running the scripts
* ./node_modules/.bin/cypress open
* Scripts can be run from Cypress Test Runner.
