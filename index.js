const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

class ProfileGenerator {
    constructor() {}

    managerGenerator() {        
        inquirer
            .prompt([
                {
                type: "input",
                name: "employeeName",
                message: "Please enter your first name"
                },

                {
                    type: "number",
                    name: "id",
                    message: "Please enter your employee id"
                },

                {
                    type: "input",
                    name: "email",
                    message: "Please enter your email address"
                },

                {
                    type: "number",
                    name: "officeNumber",
                    message: "Please enter your office number"                    
                }
            ])
            .then(val => {
                const manager = new Manager(val.employeeName, val.id, val.email, val.officeNumber);
            })
            // .then(val => {
            //     // If the user says yes to another game, play again, otherwise quit the game
            //     if (val.choice) {
            //     this.play();
            //     } else {
            //     this.quit();
            //     }
            // });
    }

    engineerGenerator() {        
        inquirer
            .prompt([
                {
                type: "input",
                name: "employeeName",
                message: "Please enter your first name"
                },

                {
                    type: "number",
                    name: "id",
                    message: "Please enter your employee id"
                },

                {
                    type: "input",
                    name: "email",
                    message: "Please enter your email address"
                },

                {
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub username"                    
                }
            ])
            .then(val => {
                const engineer = new Engineer(val.employeeName, val.id, val.email, val.github);
            })     
    }

    internGenerator() {        
        inquirer
            .prompt([
                {
                type: "input",
                name: "name",
                message: "Please enter your first name"
                },

                {
                    type: "number",
                    name: "id",
                    message: "Please enter your employee id"
                },

                {
                    type: "input",
                    name: "email",
                    message: "Please enter your email address"
                },

                {
                    type: "input",
                    name: "school",
                    message: "Please enter your school"                    
                }
            ])
            .then(val => {
                const intern = new Intern(val.employeeName, val.id, val.email, val.school);
            })     
    }
}

const profileGenerator = new ProfileGenerator();

profileGenerator.managerGenerator();
// profileGenerator.engineerGenerator();
// profileGenerator.internGenerator();
