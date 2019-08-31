var url1 = "http://api.wordnik.com/v4/word.json/";
var url2 = "/definitions?limit=200&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&";
var apikey = "api_key=051e04d455a26c28c40480e32680393947eb9834f655be06b";

var urlex1 = "http://api.wordnik.com/v4/word.json/";

var input;
var receivedData;


function setup() {
    createCanvas(500, 1000);

    input = select("#word");
    
}

function Data(data){
    
    if (data.length == 0) {
       displayError();
  }
    
    receivedData = data;
    
}

function keyPressed(){
    if(keyCode == "13"){
        askDefinition();
    }
}

function askDefinition(){
    var url = url1 + input.value() + url2+ apikey;
    loadJSON(url, Data);
}


function update(){
     push();
        textAlign(CENTER);
        textSize(30);
        text(receivedData[1].word, width/2, 50);
        pop();
         
        push();
        textAlign(CENTER);
        textSize(18);
        text(receivedData[1].partOfSpeech, width/2, 73);
        pop();
        
        push();
        textAlign(LEFT);
        textSize(18);
        text("1. " + receivedData[1].text, 10, 100, width, height);
        text("2. " + receivedData[0].text, 10, 200, width, height);
        pop();
}

function displayError (){ 
    
        push();
        textAlign(CENTER);
        fill(150);
        textSize(50);   
        text("Sorry...", 0, 10 , width, height);
        pop();
    
        push();
        textAlign(CENTER);
        textSize(30);
        text("The word is not in the dictionary.", 0, 80 , width, height);
        pop();
    
        push();
        textAlign(CENTER);
        textSize(11);
        text("Make sure all the letters in the word are lowercase", 0, 120, width, height)
        pop();
    
}

function draw() {
    background(255);

    if(receivedData){
        if (receivedData === null || receivedData=== undefined || receivedData=== '' || receivedData.length === 0) {
       displayError();
    } else{
        update();
    }
}
    

}