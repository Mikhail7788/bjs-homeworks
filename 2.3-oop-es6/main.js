"use strict";

// Задание 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.primaryDurability = durability;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
      if (this.durability === 0) {
        return 0;
      } else if (this.durability >= this.primaryDurability * 0.3) {
        return this.attack;
      } else {
        return this.attack / 2;
      }
    }

    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
}
//обычное оружие
const oldSword = new Weapon('Старый меч', 20, 10, 1);
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
//усиленное оружие
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 1);
const staffStorm = new Weapon('Посох Бури', 10, 300, 3);

// проверка методов:
// старый меч
oldSword.takeDamage(10);
console.log(`oldSword.takeDamage(10) ${oldSword.durability}`); // 0

oldSword.takeDamage(15);
console.log(`oldSword.takeDamage(15) ${oldSword.durability}`); // 0
console.log(`oldSword.isBroken() ${oldSword.isBroken()}`); // true

// рука
arm.takeDamage(100);
console.log(`arm.takeDamage(100) ${arm.durability}`); // Infinity
console.log(`arm.getDamage() ${arm.getDamage()}`); // 1
console.log(`arm.isBroken() ${arm.isBroken()}`); // false

// лук
bow.takeDamage(20);
console.log(`bow.takeDamage(20) ${bow.durability}`); // 180
console.log(`bow.getDamage() ${bow.getDamage()}`); // 10
console.log(`bow.isBroken() ${bow.isBroken()}`);

//Задание 2
// Классы обычного оружия
class OldSword extends Weapon {
    constructor() {
        super();
        this.name = 'Старый меч';
        this.attack = 20;
        this.durability = 10;
        this.range = 1;
        this.primaryDurability = 10;
    }
}

class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        this.primaryDurability = Infinity;
    }
}

class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 12;
        this.durability = 200;
        this.range = 3;
        this.primaryDurability = 200;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.primaryDurability = 300;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.primaryDurability = 300;
    }
}

//Классы усиленного оружия
class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends OldSword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.primaryDurability = 800;
    }
}

class StaffStorm extends Staff {
    constructor() {
        super();
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
    }
}

//Создаем экземпляры
const oldSwordSecond = new OldSword();
const armSecond = new Arm();
const bowSecond = new Bow();
const knifeSecond = new Knife();
const staffSecond = new Staff();
const longBowSecond = new LongBow();
const axeSecond = new Axe();
const staffStormSecond = new StaffStorm();

//Проверка обычного оружия
oldSwordSecond.takeDamage(15);
console.log(`oldSwordSecond.takeDamage(15) ${oldSwordSecond.durability}`); //0
console.log(`oldSwordSecond.getDamage() ${oldSwordSecond.getDamage()}`); //0
console.log(`oldSwordSecond.isBroken() ${oldSwordSecond.isBroken()}`); // true

//проверка усиленного оружия
console.log(axeSecond);
axeSecond.takeDamage(300);
console.log(`axeSecond.takeDamage(300) ${axeSecond.durability}`); //500

// 3 задача
class StudentLog {
	constructor(name) {
		this.name = name;
        this.marks = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }
        
		if (grade > 5 || isNaN(grade)) {
			console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
		} else {
			this.marks[subject].push(grade);
		}
        
	    return this.marks[subject].length;
	}

	getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }
        
		if (this.marks[subject].length === undefined) {
			return 0;
		} else {
            let average = 0;
		    let sumMarks = 0;
		    for (let mark of this.marks[subject]) {
		  	   sumMarks += mark;
		    }
            average = sumMarks / this.marks[subject].length;
            return average;
       }
	}

	getTotalAverage() {
		let items = 0;
        let sum = 0;
        for (let subject in this.marks) {
          sum += this.getAverageBySubject(subject);
          items++;
        }
  
       let totalAverage = sum/items;
       return totalAverage;
    }
}

const log = new StudentLog('Олег Иванов');
console.log(log.getName());
console.log(log.addGrade('123', 'algebra'));
console.log(log.addGrade(5));
console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getTotalAverage('algebra'));

//console.log(log.marks);
