const myBirthday = '13 may 2022'

const daysEl = document.getElementById('days-c')
const hoursEl =document.getElementById('hours-c')
const minutesEl = document.getElementById('mins-c')
const secondsEL = document.getElementById('sec-c')




function countDown()
{
    const myBirthdayDate = new Date(myBirthday);
    const currentDate = new Date();
   const totalSeconds = (myBirthdayDate - currentDate)/1000; 

   const days = Math.floor(totalSeconds / 86400)
   const hours = Math.floor(totalSeconds / 3600 % 24)
   const minutes = Math.floor(totalSeconds/60 % 60);
   const seconds = Math.floor(totalSeconds%60)
   console.log(days,hours,minutes,seconds)
   daysEl.innerHTML = formatTime(days);
   hoursEl.innerHTML = formatTime(hours);
   minutesEl.innerHTML = formatTime(minutes);
   secondsEL.innerHTML = formatTime(seconds)
}
function formatTime(time)
{
    return time < 10 ? (`0${time}`): time ;
}
countDown();
setInterval(countDown,1000)

