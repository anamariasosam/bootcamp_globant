var inquirer = require('inquirer');
var opn = require('opn');
var fs = require('fs')
var path = require('path')

var jsonPath = path.resolve(__dirname, '../projects.json')
var projects = JSON.parse(fs.readFileSync(jsonPath).toString())

var projectsName = projects.map(function (project) {
	return project.name
})

inquirer
  .prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Which project do you want to open?',
      choices: projectsName,
      filter: function(val) {
        return val;
      }
    }
  ])
  .then(answers => {
		var selectedProject = projects.filter(function (project) {
			return project.name == answers.project
		})
		var url = path.resolve(__dirname, '../' + selectedProject[0].slug + '/index.html')
		opn(url)
  });
