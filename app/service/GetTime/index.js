var moment = require('moment');

export default () => {
  var clock = moment().format("H");
  if (clock < 4) {
    return 0;
  } else if (clock < 11) {
    return 1;
  } else if (clock < 14) {
    return 2;
  } else if (clock < 18) {
    return 3;
  } else if (clock < 24) {
    return 4;
  }
}
/*
* --- LEGEND ---
* 0 is Midnight
* 1 is Morning
* 2 is Noon
* 3 is Afternoon
* 4 is Night
*/
