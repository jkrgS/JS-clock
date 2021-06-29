const { _clock } = require('./options');

// settings the clock at the exact time regarding the minutes that given
const setClock = (args) => {
  // we can also put the given args as object directly on arrow function like "async ({hours, minutes})"
  const { hours = 0, minutes = 0 } = args; // deconstruct the given arguments
  // date init
  const currentDate = new Date();
  // reset the time at midnight
  currentDate.setHours(0, 0, 0, 0);
  // converting hours to minutes and adding the given minutes as total
  const totalMinutes = hours * 60 + minutes;
  // add provided minutes to date time
  currentDate.setMinutes(totalMinutes);
  // set the clock with provided settings
  const clock = currentDate.toLocaleTimeString('en-NL', _clock);

  return clock; // return the clock
};

module.exports = { setClock };
