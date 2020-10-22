function runSpeechRecognition() {
  var output = document.getElementById("messenger_input");
  var action = document.getElementById("action");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function () {
    action.innerHTML = "<small>listening, please speak...</small>";
  }

  recognition.onspeechend = function () {
    action.innerHTML = "<small>stopped listening</small>";
    recognition.stop();
  }

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    output.value = transcript
    output.classList.remove("hide");
  };
  
  recognition.start();
}