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

${data.installation}
    
##Usage

${data.usage}

##Credits

I worked alone on this project.

##License

My license info ${linfo}

##How to contribute

${data.contribution}
    
##Test instructions

${data.test}

##Questions
my Github: ${data.github} (https://github.com/${data.github})
my email address: ${data.email}
    `
}

module.exports=createReadMe;