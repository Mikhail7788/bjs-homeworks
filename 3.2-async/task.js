'use strict'
class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, back, id) {
        if(!id) {
            console.error('Параметр id не передан');
            return false;
        } else if (this.alarmCollection.some(value => value.id === id)) {
            console.error(`id уже существует`);
            return false;
        }
        
        this.alarmCollection.push({time, back, id});
    }
    
    removeClock(id) {
        let arr = this.alarmCollection;
        if (arr.length !== 0) {
           this.alarmCollection = this.alarmCollection.filter(bell => bell.id != id);
           return true;
        } else {
           return false;
        }
        
    }
    
    getCurrentFormattedTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`;
        
    }
    
    start() {
        let nowTime = this.getCurrentFormattedTime();
        function checkClock (bell) {
            if (nowTime === bell.time) {
                return bell.back();
            }
        }
        
        let addInterval = setInterval(() => {
            this.alarmCollection.forEach(bell => checkClock(bell))
        }, 500);
        
        return this.timerId = addInterval;
    }
    
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
        }
        console.log('будильник выключен');
        
        return this.timerId = null;
    }
    
    printAlarms() {
        this.alarmCollection.forEach(bell => console.log(`будильник ${bell.id} поставлен на ${bell.time}`));
    }
    
    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
    }
    
}

function testCase() {
    const clock = new AlarmClock();
    clock.addClock('20:10', () => console.log('уже много времени'), 1);
    clock.addClock('20:11', () => {console.log('времени еще больше'); this.removeClock(2)}, 2);
    clock.addClock('20:11', () => console.log('можно чего-нибудь съесть')); //без id
    clock.addClock('20:13', () => {console.log('все, кина не будет!'); this.clearAlarms(); this.printAlarms()}, 3);
    clock.addClock('20:15', () => console.log('но лучше не есть'), 1); //существующий id
    clock.printAlarms();
    clock.start();
    
}

testCase();