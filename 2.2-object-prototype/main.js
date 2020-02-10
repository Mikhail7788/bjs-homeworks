function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Date.now();
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / 31557600000;
    if (age >= 18) {
      return "Да";
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    //let sound = animal.sound;
    if (animal === undefined) {
        return null;
    } else {
        const sound = animal.sound;
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sumMarks = 0;
    let average = 0;
    for (let mark of marks) {
      mark = parseInt(mark);
      sumMarks += mark;
      average = sumMarks / marks.length;
    }
    let roundedAverage = Math.round(average);
    return roundedAverage;
}