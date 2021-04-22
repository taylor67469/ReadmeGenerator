const inquirer = require('inquirer');
const fs = require('fs');
const readme= require('./utilities/readMeGenerator')
const questions=[
    {
        type: 'input',
        message: 'Title of project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter the description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation-instructions',
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage-information',
    },
    {
        type: 'input',
        message: 'Enter contribution instructions',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions. ',
        name: 'test-instructions',
    },
    {
    type: 'list',
    message: 'Choose your license!',
    name: 'licensure',
    choices: ['Apache 2.0','Boost','BSD 3-Clause','BSD 2-Clause'],
    },
];
function init(){
    inquirer
    .prompt([questions])
    .then((data) => {
    const linfo= licenseInfo(data.licensure);
    const badge= badgeInfo();
        const filename = data.title+"README.md";
        writeToFile(filename,readme(data,linfo,badge));
    });
}
function writeToFile(fileName,data){
    fs.writeFile(fileName,data,function(err){
        if (err)
            return console.log(err);
            console.log(data)
    })
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success!')
    //     );
}
    init();
function licenseInfo(data){
    let license;
    switch (data){
        case 'Apache 2.0':
        license='[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
        case 'Boost':
        license='[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';\
        break;
        case 'BSD 3-Clause':
        license='[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        break;
        case 'BSD 2-Clause':
        license='[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        break;
    }
    return license;
}
function badgeInfo(){

}