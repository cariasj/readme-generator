// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

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
            type: 'list',
            name: 'license',
            message: 'License',
            choices: ['MIT', 'Apache', 'GNU', 'None'] 
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
        }
    ];

    // TODO: Create a function to write README file
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./README.md', fileContent, err => {
            // if theres an error, reject the promise and send the error to 
            // to the promises .catch method
                if (err) {
                    reject(err);
                // return out of the function here to make sure the promise 
                // doesnt accidentally execute the resolve() function as well
                    return;
                }
            // if everthing went well, resolve the promise and send the successful 
            // data to the .then() method
                resolve({
                    ok: true,
                    message: 'file created'
                });
            });
        });
    };

    // TODO: Create a function to initialize app
    const init = () => {

        return inquirer.prompt(questions)
        .then(data => {
            return data;
        })
    }


    // Function call to initialize app
    init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markDown => {
        return writeFile(markDown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });