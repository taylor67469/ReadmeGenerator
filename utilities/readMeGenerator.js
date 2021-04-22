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
    `
}

module.exports=createReadMe;