function runSpeechRecognition() {
  var output = document.getElementById("messenger_input");
  var action = document.getElementById("action");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function () {
    action.innerHTML = "<small>listening, please speak...</small>";
  }
  
  recognition.onspeechend = function () {
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  }
}