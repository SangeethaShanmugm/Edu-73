function showTime() {
  //new date and time
  let datetime = new Date();
  console.log(datetime);

  //current local time
  let time = datetime.toLocaleTimeString();
  console.log(time);

  //display time after 5 seconds
  //setTimeout(function, milliseconds)

  setTimeout(showTime, 5000);
}

showTime();
