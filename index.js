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
    constructor() {
        this.generatedTeam = [];
    }

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
                this.generatedTeam.push(manager);
                this.nextChoice();
            })            
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
                this.generatedTeam.push(engineer);
                this.nextChoice();
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
                this.generatedTeam.push(intern);
                this.nextChoice();
            })     
    }

    nextChoice() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "nextChoice",
                    message: "Please add another member or finish building the team",
                    choices: [
                        "Add an engineer",
                        "Add an intern",
                        "Finish building the team"
                    ]
                }
            ])
            .then(val => {
                if (val.nextChoice === "Add an engineer") {
                    this.engineerGenerator();
                } else if (val.nextChoice === "Add an intern") {
                    this.internGenerator();
                } else if(val.nextChoice === "Finish building the team") {
                    this.generateHTML();
                } 
            });      
    }

    generateHTML() {
        const html = render(this.generatedTeam);
        fs.mkdir(OUTPUT_DIR, { recursive: true }, err => {
            if (err) {
                console.error("Error creating output directory:", err);
            } else {
                fs.writeFile(outputPath, html, err => {
                    if (err) {
                        console.error("Error generating HTML file:", err);
                    } else {
                        console.log("Team HTML file generated successfully!");
                    }
                });
            }
        });
    }
}

const profileGenerator = new ProfileGenerator();
profileGenerator.managerGenerator();
