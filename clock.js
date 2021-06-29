const { setClock } = require('./helpers/clock');

class Clock {
  constructor(hours, minutes) {
    this.hours = hours; // getting hours that provided as arg
    this.minutes = minutes; // getting minutes that provided as arg
  }

  toString() {
    // calling a method that expects hours & minutes that provided and returns the proper clock result
    return setClock({ hours: this.hours, minutes: this.minutes });
  }

  plus(minutes) {
    // calculation of basic minutes that provided plus the additional one
    const totalMinutes = this.minutes + minutes;
    // calling a method that expects hours & minutes that provided and returns the proper clock result
    return setClock({ hours: this.hours, minutes: totalMinutes });
  }

  minus(minutes) {
    // calculation of basic minutes that provided minus the additional one
    const totalMinutes = this.minutes - minutes;
    // calling a method that expects hours & minutes that provided and returns the proper clock result
    return setClock({ hours: this.hours, minutes: totalMinutes });
  }

  equals(_class) {
    // represents the basic clock
    const prevClock = setClock({ hours: this.hours, minutes: this.minutes });
    // represents the additional clock that provided through the method
    const newClock = setClock({ hours: _class.hours, minutes: _class.minutes });

    return prevClock === newClock; // returns the equality as expected
  }
}

module.exports = { Clock };
