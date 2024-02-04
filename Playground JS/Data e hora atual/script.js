const currentDate = new Date()

console.log(currentDate);


let day = currentDate.getDate()
let month = currentDate.getMonth()+1
let year = currentDate.getFullYear()
let hour = currentDate.getHours()
let minutes = currentDate.getMinutes()

let actualDateFormated = day + "/" + month + "/" + year + " " + hour + ":" +minutes


document.getElementById("dataHora").innerHTML = actualDateFormated; 





