function createReadMe(data,linfo,badge){
    return `#${data.title}
    ##Badge

    ${badge}

    ##Description

    ${data.description}

    ##Table of Contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)

    ##Installation

    ${data.installation-instructions}
    
    ##Usage

    ${data.usage-information}

    ##Credits

    I worked with alone on this project.

    ##license

    My license info ${linfo}

    ##How to contribute

    ${data.contribution}
    
    ##Test instructions

    ${data.test-instructions}

    ##Questions
    my Github: ${data.github} (https://github.com/${data.github})
    my email address: ${data.email}
    `
}

module.exports=createReadMe;