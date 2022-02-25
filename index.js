// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title'

    },
    {
        type: 'input',
        name: 'desc',
        message: 'Description of project'

    },
    {
        type: 'input',
        name: 'tableofcontent',
        message: 'Table of Content'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    {    
        type: 'input',
        name: 'license',
        message: 'License'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
