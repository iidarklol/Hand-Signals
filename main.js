pred1 = "Happy"
pred2 = "Shush" 

Webcam.set({
    height: 250,
    width: 250,
    image_format: "png",
    quality: 100,
})
Camera = document.getElementById("Webcam")  

Webcam.attach(Camera)

function Capture(){
    Webcam.snap(function(image){
       document.getElementById("Pic").innerHTML = "<img src='"+image +"' id='coolimg'>"
    })
}
classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IygJvaLGX/model.json", modelReady)

function modelReady(){
    console.log("Model Loaded!");
}

function Identify(){
    img = document.getElementById("coolimg")
    classifer.classify(img,gotResults)
}


function gotResults(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results);
    
    speak()
}
}


function speak(){
    var utter = window.speechSynthesis
    spData1 = "first prediction is" +  pred1  
    spData2 = "Second prediction is" +  pred2  
var utterance = new SpeechSynthesisUtterance(spData1 + spData2)
utter.speak(utterance)
}