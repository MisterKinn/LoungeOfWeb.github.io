function currentTime() {
    let date = new Date(); 
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";

    if(hr > 12){
        session = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.querySelector(".clock").innerText = `${hr}h ${min}m ${sec}s`
    var t = setTimeout(function(){ currentTime() }, 1000); 
}

currentTime();