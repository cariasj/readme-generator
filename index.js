// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Project Title',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a project title');
                  return false; 
                }
              }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Description of project',
            validate: descInput => {
                if (descInput) {
                  return true;
                } else {
                  console.log('Please enter a description for the project');
                  return false; 
                }
              }
        },
        {
            type: 'input',
            name: 'tableofcontent',
            message: 'Table of Content'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please enter installation details for the project');
                  return false; 
                }
              }
        },
        {    
            type: 'list',
            name: 'license',
            message: 'What license is the project associated with?',
            choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'] 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributing members for the project?',
            validate: contrInput => {
                if (contrInput) {
                  return true;
                } else {
                  console.log('Please provide at least ONE member');
                  return false; 
                }
              }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Tests'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your Github Username?',
            validate: questionsInput => {
                if (questionsInput) {
                  return true;
                } else {
                  console.log('Please enter your Github username');
                  return false; 
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address');
                  return false; 
                }
              }
        }
    ];

    // TODO: Create a function to write README file
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/README.md', fileContent, err => {
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