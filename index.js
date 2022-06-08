//title user input

//Description user unput

//Table of Contents: is created with corresponding sections linked

//Installation user input

//Usage information user input

//License fron a list of options a badge is added to the selected choice

//Contributing

//Tests

/*Questions -- user inputs github name and link is added 
with instructions on how to reach user*/ 

const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'give a brief description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how do you install this application?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'how do you install this application?',
    },

    //need a way to input screenshot here.
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list your contributors',
    },
//create a list of licenses with badges
    {
        type: 'list',
        name: 'license',
        message: 'license',
        choices: ['MIT', 'ISC','GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'add tests',
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter you github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email',
    },

]

async function runQuestions(){
    return inquirer.prompt(questions)
    .then ((answers)=> {
        console.log(answers)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuestions()
