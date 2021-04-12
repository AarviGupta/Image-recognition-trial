Webcam.set({
    width:350,height:350,image_format:'png',png_quality:90
}
);

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZIwkDyxZi/model.json',modelloaded());
function modelloaded(){
    console.log('modelloaded');
}
function check(){
    image=document.getElementById('captured_image');
    classifier.classify(image,gotresult);
}
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}