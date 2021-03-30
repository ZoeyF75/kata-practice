const findMonth = function(month) {
  switch(month) {
    case '02':
      return "February";
    case '03':
      return "March";
    case '04':
      return "April";
    case '05':
      return "May";
    case '06':
      return "June";
    case '07':
      return "July";
    case '08':
      return "August";
    case '09':
      return "September";
    case '10':
      return "October"; 
    case '11':
      return "November";
    case '12':
      return "December";
    default:
      return "January";
  }
}

const findDay = function(day) {
  //remove 0 at front
  if (day.charAt(0) === '0') {
    day = day.charAt(1);
  }

  //add the suffix
  switch (day) {
    case '1':
      return `${day}st`
    case '21':
      return `${day}st`
    case '31':
      return `${day}st`
    case '2':
      return `${day}nd`
    case '22':
      return `${day}nd`
    case '3':
      return `${day}rd`
    default:
      return `${day}th`
  }
}

const talkingCalendar = function(date) {
  let string = "";
  date = date.split("/"); //date[0] = year, date[1] = month, date[2] = day, 
  string += findMonth(date[1]);
  string +=  " " + findDay(date[2]) + ", ";
  string += date[0];
  return string;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2000/12/22"));

//output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
// December 22nd, 2000