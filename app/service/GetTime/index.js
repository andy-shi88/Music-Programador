var moment = require('moment');

export default () => {
  var clock = moment().format("H");
  if (clock < 4) {
    return 'midnight';
  } else if (clock < 11) {
    return 'morning';
  } else if (clock < 14) {
    return 'noon';
  } else if (clock < 18) {
    return 'afternoon';
  } else if (clock < 24) {
    return 'night';
  }
}
