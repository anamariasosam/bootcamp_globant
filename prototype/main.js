function Person(name, gender) {
	this.name = name
	this.gender = gender
}

var me = new Person('Hugo', 'P')

Person.prototype.introduce =  function() {
	return `Hola ${this.name}`
}

console.log(me.introduce())

function Developer(name, gender, yearsOFExperience) {
	Person.call(this, name, gender)

	this.yearsOFExperience = yearsOFExperience
}

// Esta es la claveeee
Developer.prototype = Object.create(Person.prototype)

var me2 = new Developer('Paco', 'P', 4)

console.log(me2.introduce())

Developer.prototype.introduceAbout = function() {
	return `${this.name} tiene ${this.yearsOFExperience} años de experiencia`
} 

console.log(me2.introduceAbout())


class PersonClass {
	constructor(name, gender) {
		this.name = name
		this.gender = gender
	}

	introduce() {
		return `Hola ${this.name}`
	}
}

var me3 = new PersonClass('Luis', 'P')
console.log(me3.introduce())

class DeveloperClass extends PersonClass {
	constructor(name, gender, yearsOFExperience) {
		super(name, gender)
		this.yearsOFExperience = yearsOFExperience
	}

	introduceAbout() {
		return `${this.name} tiene ${this.yearsOFExperience} años de experiencia`
	}
}

var me4 = new DeveloperClass('Tio Mac Pato', 'P', 4)
console.log(me4.introduceAbout())

