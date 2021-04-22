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
        message: 'Enter contribution guidelines.',
        name: 'contribution-guidelines',
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
    choices: ['APM','DUB','CTAN'],
    },
];
function init(){
    inquirer
    .prompt([questions])
    .then((data) => {
        const filename = `README.md`;
        writeToFile(filename,readme(data));
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