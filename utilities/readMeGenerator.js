function createReadMe(data){
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

    I worked with ${data.contribution} on this project.

    ##license

    My license is ${data.licensure}

    ##Badges
    
    ${badge}

    ##Test instructions

    ${data.test-instructions}
    `
}

module.exports=createReadMe;