var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new  SpeechRecognition()

function iniciar(){
    document.getElementById('Tire').innerHTML=''
    recognition.start()
}
recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById('Tire').innerHTML=content
    speak()
}


function speak(){
    var synth = window.speechSynthesis;
    speakData = document.getElementById("Tire").value;
    var utterthis=new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)

    
    Webcam.attach( camera );
  }
var camera = document.getElementById('camera')
  Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
    
    
