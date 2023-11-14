const garbo = ["Encrypting runtime state...", "(6/10) processes completed! Attempting again in 10ms...", "Process array successfully rebooted! Executing kernel commands...", "Kernel refused to respond. Please view C:\\tmp for more information.", "explorer.exe has a valid instruction! Booting into a live instance...", "Username contains invalid characters U, S, E, R", "All failed attempts logged. The dependency banana.png is missing from C: drive", "This time, the only error is that we just don't like you.", "IOS 249 is not a valid cIOS! Windbomb is only compatible with d2X cIOS."];
var random;
var body = document.getElementById("body");
var intvla1;
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
function start() {
    
    body.innerHTML = "Microlog ML-DOG<br>    Copywrong Microlog Corp 1867-1868<br><br>C:\\Windbomb\\explorer.exe<br>Loading main OS cache into RAM...<br>"
    intvla1 = setInterval(printGarb,15);
    setTimeout(splash1, 400);
}
function splash1() {
    clearInterval(intvla1);
    body.setAttribute("style", "background-image:url(halfload.png);background-size:cover;color:white;background-color:green;font-family:monospace;");
   setTimeout(splash2, 200); 
}
function splash2() {
    body.innerHTML = "";
    setTimeout(login, 10000);
    body.setAttribute("style", "background-color:black;")
    body.innerHTML = "<span style=\"color:white;font-family:monospace;\"></span><video autoplay muted width=\"50%\" id=\"vid\"><source src=\"intro.mp4\" type=\"video/mp4\";></video>"
}
function login() {
    body.innerHTML = "<img ssrc>
    
}
function printGarb() {
    random = Math.floor(Math.random() * garbo.length);
    body.innerHTML = body.innerHTML + garbo[random] + "<br>";
    window.scrollTo(0, document.body.scrollHeight);
}

setTimeout(start, 500); 