let colorSample = null; // the color sample div tag

let answers =[]; // array of anser elements

let correctColorCode = null; //color code of actual color sample
let score = 0; // number of correct answers
let total = 10; //total number of questions
let attempts = 0
let level = 0;
let mode = 0;

const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
document.getElementById('end-screen').style.display = 'none';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
   

function modeFunction () {

    if (mode == 0) {
        mode = 1;

    } else if (mode == 1) {

        mode = 0;
    }
    

}

function oneFunction() {
    level = 1;
    document.getElementById('hidden2').style.display = 'none';
    document.getElementById('hidden3').style.display = 'none';
    if (level == 1) {
        document.getElementById('hidden1').style.display = 'block';

        answers.push(document.getElementById("a"));
        answers.push(document.getElementById("b"));
        checkClick();
        loadNewQuestion();


    } 

}

function twoFunction() {
    level = 2;
    document.getElementById('hidden1').style.display = 'none';
    document.getElementById('hidden3').style.display = 'none';
    if (level == 2) {
        document.getElementById('hidden2').style.display = 'block';
       
        answers.push(document.getElementById("c"));
        answers.push(document.getElementById("d"));
        answers.push(document.getElementById("e"));
        answers.push(document.getElementById("f"));
        checkClick();
        loadNewQuestion();

    } 

}

function threeFunction() {
    level = 3;
    document.getElementById('hidden1').style.display = 'none';
    document.getElementById('hidden2').style.display = 'none';
    if (level = 3) {
        document.getElementById('hidden3').style.display = 'block';
   
        answers.push(document.getElementById("g"));
        answers.push(document.getElementById("h"));
        answers.push(document.getElementById("i"));
        answers.push(document.getElementById("j"));
        answers.push(document.getElementById("k"));
        answers.push(document.getElementById("l"));
        answers.push(document.getElementById("m"));
        answers.push(document.getElementById("n"));
        checkClick();
       
        
        loadNewQuestion();

    } 

}









// initialize page

window.onload = function () {

    colorSample = document.getElementById("colorSample");
    
   

    
  


    // Load a new question 
    loadNewQuestion ();
        
    document.getElementById('score').innerHTML = score + " / " + total;

};

// marks current question 
function markIT(elem) {
    let gotItRight = false;
   


  
    if (elem.innerHTML == correctColorCode) {

        score++;

        gotItRight = true;
    }
    document.getElementById('score').innerHTML = score + " / " + total + " " + (attempts + 1);

    window.setTimeout(function () {
        if(gotItRight) {

            colorSample.innerHTML = "Correct!";


        }else {

            colorSample.innerHTML = "Incorrect!";

        }


    }, 100);


    window.setTimeout(function () {

        loadNewQuestion();

    }, 1300)
} // markIT

if (mode == 0) {
    function loadNewQuestion () {

        // set color of colorsample
        let colorCode = getRandomHexCode();
        colorSample.innerHTML = "";
        colorSample.style.backgroundColor = colorCode;
    
    
        if (level == 1) {
             // pick a random location for correct anser
            let solution = Math.floor(Math.random() * 2);
            for (let i = 0; i < answers.length; i++) {
            if (i == solution) {
                answers[i].innerHTML = colorCode;
    
            } else {
    
                answers[i].innerHTML = getRandomHexCode();
            }
            
        }
    
    
        } else if (level == 2) {
    
            // pick a random location for correct anser
            let solution = Math.floor(Math.random() * 4);
            for (let i = 0; i < answers.length; i++) {
                if (i == solution) {
                    answers[i].innerHTML = colorCode;
        
                } else {
        
                    answers[i].innerHTML = getRandomHexCode();
                }
             
            }
    
        } else if (level == 3) {
    
            let solution = Math.floor(Math.random() * 8);
            for (let i = 0; i < answers.length; i++) {
                if (i == solution) {
                    answers[i].innerHTML = colorCode;
        
                } else {
        
                    answers[i].innerHTML = getRandomHexCode();
                }
             
            }
    
        }
       
    
    
        // store correct anser to this question correctly 
        correctColorCode = colorCode;
    
    
    
    
    } // LoadNewQuestion 
    

} else if (mode == 1) {


    function loadNewQuestion () {

        // set color of colorsample
        let colorCode = getRandomHexCode();
        colorSample.innerHTML = "";
        colorSample.style.backgroundColor = colorCode;
    
    
        if (level == 1) {
             // pick a random location for correct anser
            let solution = Math.floor(Math.random() * 2);
            for (let i = 0; i < answers.length; i++) {
            if (i == solution) {
                answers[i].innerHTML = colorCode;
    
            } else {
    
                answers[i].innerHTML = getRandomHexCode();
            }
            
        }
    
    
        } else if (level == 2) {
    
            // pick a random location for correct anser
            let solution = Math.floor(Math.random() * 4);
            for (let i = 0; i < answers.length; i++) {
                if (i == solution) {
                    answers[i].innerHTML = colorCode;
        
                } else {
        
                    answers[i].innerHTML = getRandomHexCode();
                }
             
            }
    
        } else if (level == 3) {
    
            let solution = Math.floor(Math.random() * 8);
            for (let i = 0; i < answers.length; i++) {
                if (i == solution) {
                    answers[i].innerHTML = colorCode;
        
                } else {
        
                    answers[i].innerHTML = getRandomHexCode();
                }
             
            }
    
        }
       
    
    
        // store correct anser to this question correctly 
        correctColorCode = colorCode;
    
    
    
    
    } // LoadNewQuestion 
    


}

// create reandom hex code 
function getRandomHexCode () {

    let result = []; // final code 
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    result.push("#");


    for (let n = 0; n < 6; n++) {

        result.push(hexRef[Math.floor(Math.random() * 16)])

    }
    return result.join(''); // #rrggbb

} // getRandomHexCode


function endGame () {

    finalScore.textContent = score;
    document.getElementById('end-screen').style.display = 'flex';



}


function checkClick () {

    for (let i = 0; i < answers.length; i++){
        answers[i].addEventListener('click', function() {
            markIT(this);

            attempts++;
            if (attempts == total){

                endGame();
            
            }       
    
        });


       


    }

}

