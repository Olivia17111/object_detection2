status = "" ;
function setup()
{
    Objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function modelLoaded() {
    status = "true";
    Objectdetector.detect(img, gotResults);
}
function gotResults(error , results)
{
    if (error) {
        console.log(error);
      }
      console.log(results);
      objects = results;
}