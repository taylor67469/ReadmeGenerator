function createReadMe(data,linfo,){
    return `#${data.title}
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

    My license is ${data.licensure}

    ##Badges
    
    ${badge}

    ##How to contribute

    ${data.contribution}
    
    ##Test instructions

    ${data.test-instructions}
    `
}

module.exports=createReadMe;