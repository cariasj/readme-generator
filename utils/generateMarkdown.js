// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == "None") {
      return ' ';
  }
  else if (license == 'MIT') {
      return `https://choosealicense.com/licenses/mit/`;
  }
  else; if (license == 'Apache 2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } 
  else if (license == 'GNU GPLv3') {
  return `https://choosealicense.com/licenses/gpl-3.0/`;
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} 

  ## Description 
  ${data.desc}

  ## Table Of Contents 
  ${data.tableofcontent}

  ## Installation 
  ${data.installation}

  ## license 
  ${renderLicenseLink(data.license)}

  ## Contributions 
  ${data.contributing}

  ## Test Instructions 
  ${data.test}

  ## Github Profile 
  ${data.questions}
  ${data.email}

          
`;
}

module.exports = generateMarkdown;
