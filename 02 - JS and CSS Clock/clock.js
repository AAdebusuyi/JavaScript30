const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();

  //set seconds
  const seconds = now.getSeconds();
  const secondsToDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
  console.log(`seconds: ${seconds}`);

  // set minutes
  const minutes = now.getMinutes();
  const minutesToDegrees = minutes * 6 + 90;
  minsHand.style.transform = `rotate(${minutesToDegrees}deg)`;
  console.log(`minutes: ${minutes}`);

  // set hours
  const hours = now.getHours();
  const hoursToDegrees = hours * 6 + 90;
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
  console.log(`hours: ${hours}`);
}

setInterval(setDate, 1000);
