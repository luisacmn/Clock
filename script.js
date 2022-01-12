function clock(){
    var date = new Date(); //catch system hour

    //catch time
    var time = date.getHours() + ":" + date.getMinutes();
    var timeTxt = document.getElementById("txtHour")
    timeTxt.innerHTML = time;

    //catch date
    var completeDate = date.getDate() + " . " + (date.getMonth()+1) + " . " + date.getFullYear();
    var dateTxt =  document.getElementById("txtDate");
    dateTxt.innerHTML = completeDate ;

   if (time < 12) {
        document.body.style.backgroundImage = "url('pexels-1.jpg')";
        document.body.style.backgroundSize = "1380px 700px";
   } else if (time > 12 && time < 18) {
        document.body.style.backgroundImage = "url('pexels-3.jpg')";
        document.body.style.backgroundSize = "1380px 700px";
   } else {
    document.body.style.backgroundImage = "url('pexels-2.jpg')";
    document.body.style.backgroundSize = "1380px 700px";
   }

}

setInterval(clock,500); //call the function, with 500 milisec of interval

