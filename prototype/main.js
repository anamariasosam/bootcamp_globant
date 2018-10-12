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
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	introduce() {
		return `Hola ${this.name}`
	}

	get dob() {
		return 2018 - this.age
	}
}

var me3 = new PersonClass('Luis', 'P')
console.log(me3.introduce())

class DeveloperClass extends PersonClass {
	constructor(name, age, yearsOFExperience) {
		super(name, age)
		this.yearsOFExperience = yearsOFExperience
	}

	introduceAbout() {
		return `${this.name} tiene ${this.yearsOFExperience} años de experiencia`
	}

	nacimiento() {
		return `${this.name} nació en ${this.dob}`
	}
}

var me4 = new DeveloperClass('Tio Mac Pato', 22, 4)
console.log(me4.nacimiento())

