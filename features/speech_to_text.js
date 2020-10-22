function runSpeechRecognition() {
  var output = document.getElementById("messenger_input");
  var action = document.getElementById("action");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}