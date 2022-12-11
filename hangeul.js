// Code for the accordion
var acc = document.getElementsByClassName("accordion");
var i;

const vowels_memory = {a:["아", "a"], eu:["으", "eu"], i:["이", "i"], o:["오", "o"], eo:["어", "eo"],
oo:["우", "oo"], e:["에", "e"], ae:["애", "ae"], ya:["야", "ya"], yo:["요", "yo"], 
yoo:["유", "yoo"], ye:["예", "ye"], yae:["얘", "yae"], yeo:["여", "yeo"], oe:["외", "oe"], 
wi:["위", "wi"], ui:["의", "ui"], wa:["와", "wa"], weo:["워", "weo"], wae:["왜", "wae"], uwe:["웨", "uwe"]};


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Hide things initially

document.getElementById('quiz_hangeul').style.display = "none";
document.getElementById('2').style.display = "none";
document.getElementById('3').style.display = "none";
document.getElementById('intro_vowels1').style.display = "none";
document.getElementById('practice_vowels0').style.display = "none";
document.getElementById('practice_vowels1').style.display = "none";
document.getElementById('intro_vowels2').style.display = "none";
document.getElementById('practice_vowels01').style.display = "none";
document.getElementById('practice_vowels2').style.display = "none";
document.getElementById('intro_vowels3').style.display = "none";
document.getElementById('practice_vowels02').style.display = "none";
document.getElementById('practice_vowels3').style.display = "none";
document.getElementById('practice_vowels4').style.display = "none";
document.getElementById('syllables').style.display = "none";

var card1 = document.querySelector('.card1');
card1.addEventListener( 'click', function() {
  card1.classList.toggle('is-flipped');
});

// Move between sections
function next(clicked_id) {
    if (clicked_id == "next1"){
        document.getElementById('intro_course').style.display = "none";
        document.getElementById('quiz_hangeul').style.display = "inherit";
        populateCards();
        shuffle();
    } else if (clicked_id == "next2"){
        document.getElementById('intro_vowels1').style.display = "none";
        document.getElementById('practice_vowels0').style.display = "inherit";
    } else if (clicked_id == "next3"){
        document.getElementById('intro_vowels2').style.display = "none";
        document.getElementById('practice_vowels01').style.display = "inherit";
        generateQuestion2(vowels_order2);
    }
    else if (clicked_id == "next4"){
      document.getElementById('intro_vowels3').style.display = "none";
      document.getElementById('practice_vowels02').style.display = "inherit";
      generateQuestion3(vowels_order3);
    } else if (clicked_id == "next11"){
    document.getElementById('practice_vowels0').style.display = "none";
    document.getElementById('practice_vowels1').style.display = "inherit";
    generateQuestion(vowels_order);
    } else if (clicked_id == "next12"){
    document.getElementById('practice_vowels01').style.display = "none";
    document.getElementById('practice_vowels2').style.display = "inherit";
   } else if (clicked_id == "next13"){
    document.getElementById('practice_vowels02').style.display = "none";
    document.getElementById('practice_vowels3').style.display = "inherit";
  } else if (clicked_id == "replay"){
    populateCards();
    shuffle();
  }
  else if (clicked_id == "endvowels"){
    document.getElementById('practice_vowels4').style.display = "none";
    document.getElementById('syllables').style.display = "inherit";
  }
  else if (clicked_id == "skip1"){
    document.getElementById("quiz_hangeul").style.display = "none";
    document.getElementById("intro_vowels1").style.display = "inherit";
  }
  else if (clicked_id == "skip2"){
    document.getElementById('practice_vowels1').style.display = "none";
    document.getElementById('intro_vowels2').style.display = "inherit";
  }
  else if (clicked_id == "skip3"){
    document.getElementById('practice_vowels2').style.display = "none";
    document.getElementById('intro_vowels3').style.display = "inherit";
  }
  else if (clicked_id == "skip4"){
    document.getElementById('practice_vowels3').style.display = "none";
    document.getElementById('practice_vowels4').style.display = "inherit";
  }
}

function nextQ1(clicked_id) {
  if (clicked_id == "correct"){
      var audio = new Audio('success.mp3');
      audio.play();
      event.target.style.backgroundColor = "#ACD1AF";
      event.target.style.borderColor = "#ACD1AF";
      var num = parseInt(clicked_id);
      let parent = event.target.parentElement.id;
      var num = parseInt(parent);
      if (num < 3) {
        document.getElementById(parent).style.display = "none";
        num++;
        let new_id = num.toString();
        document.getElementById(new_id).style.display = "inherit";
      }
      else if (num == 3) {
        document.getElementById("quiz_hangeul").style.display = "none";
        document.getElementById("intro_vowels1").style.display = "inherit";
        console.log("working");
      }
  } else if (clicked_id == "wrong"){
      var audio = new Audio('wrong.mp3');
      event.target.style.backgroundColor = "#F47174";
      event.target.style.borderColor = "#F47174";
      audio.play();
      setTimeout(() =>{
        event.target.style.backgroundColor = "#a7cffb";
        event.target.style.borderColor = "#a7cffb";
      }, 1000)
  }
}


var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});

var card3 = document.querySelector('.card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});


const vowels_eng = ["eo", "eu", "i", "o", "oo", "e", "ae", "a"]
const vowels_kr = ["어", "으", "이", "오", "우", "에", "애", "아"]
const vowels_eng_y = ["yeo", "yo", "yoo", "ye", "yae", "ya"]
const vowels_kr_y = ["여", "요", "유", "예", "얘", "야"]
const vowels_eng_comb = ["weo", "ui", "uwe", "wae", "wi", "oe", "wa"]
const vowels_kr_comb = ["워", "의", "웨", "왜", "위", "외", "와"]
let cnt = 0;
let cnt1 = 0;
let cnt2 = 0;

function audio() {
  var audio = new Audio(document.getElementById("front_flashcard1").innerHTML + ".mp3");
  audio.play();
}
function audio1() {
  var audio = new Audio(document.getElementById("front_flashcard2").innerHTML + ".mp3");
  audio.play();
}
function audio2() {
  var audio = new Audio(document.getElementById("front_flashcard3").innerHTML + ".mp3");
  audio.play();
}

function practice_right() {
  cnt++;
  if (cnt < 8) {
    document.getElementById("front_flashcard1").innerHTML = vowels_eng[cnt];
    console.log(cnt);
    document.getElementById("back_flashcard1").innerHTML = vowels_kr[cnt];
  }
  else {
    cnt = 0;
    console.log(cnt);
    document.getElementById("front_flashcard1").innerHTML = vowels_eng[cnt];
    document.getElementById("back_flashcard1").innerHTML = vowels_kr[cnt];
  }
}
function practice_left() {
cnt--;
if (cnt >= 0) {
  document.getElementById("front_flashcard1").innerHTML = vowels_eng[cnt];
  document.getElementById("back_flashcard1").innerHTML = vowels_kr[cnt];
}
else {
  cnt = 7;
  document.getElementById("front_flashcard1").innerHTML = vowels_eng[cnt];
  document.getElementById("back_flashcard1").innerHTML = vowels_kr[cnt];
}
}


function practice_right1() {
  cnt1++;
  if (cnt1 < 6) {
    document.getElementById("front_flashcard2").innerHTML = vowels_eng_y[cnt1];
    document.getElementById("back_flashcard2").innerHTML = vowels_kr_y[cnt1];
  }
  else {
    cnt1 = 0;
    document.getElementById("front_flashcard2").innerHTML = vowels_eng_y[cnt1];
    document.getElementById("back_flashcard2").innerHTML = vowels_kr_y[cnt1];
  }
}
function practice_left1() {
  cnt1--;
  if (cnt1 >= 0) {
    document.getElementById("front_flashcard2").innerHTML = vowels_eng_y[cnt1];
    document.getElementById("back_flashcard2").innerHTML = vowels_kr_y[cnt1];
  }
  else {
    cnt1 = 5;
    document.getElementById("front_flashcard2").innerHTML = vowels_eng_y[cnt1];
    document.getElementById("back_flashcard2").innerHTML = vowels_kr_y[cnt1];
  }
}

function practice_right2() {
  cnt2++;
  if (cnt2 < 7) {
    document.getElementById("front_flashcard3").innerHTML = vowels_eng_comb[cnt2];
    document.getElementById("back_flashcard3").innerHTML = vowels_kr_comb[cnt2];
  }
  else {
    cnt2 = 0;
    document.getElementById("front_flashcard3").innerHTML = vowels_eng_comb[cnt2];
    document.getElementById("back_flashcard3").innerHTML = vowels_kr_comb[cnt2];
  }
}
function practice_left2() {
cnt2--;
if (cnt2 >= 0) {
  document.getElementById("front_flashcard3").innerHTML = vowels_eng_comb[cnt2];
  document.getElementById("back_flashcard3").innerHTML = vowels_kr_comb[cnt2];
  console.log(cnt2);
}
else {
  cnt2 = 5;
  document.getElementById("front_flashcard3").innerHTML = vowels_eng_comb[cnt2];
  document.getElementById("back_flashcard3").innerHTML = vowels_kr_comb[cnt2];
  console.log(cnt2);
}
}

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    var card1 = document.querySelector('.card1');
    card1.classList.toggle('is-flipped');
    var card2 = document.querySelector('.card2');
    card2.classList.toggle('is-flipped');
    var card3 = document.querySelector('.card3');
    card3.classList.toggle('is-flipped');
  }
})

document.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    if (window.getComputedStyle(document.getElementById("practice_vowels0")).display !== "none") {
      audio();
    } else if (window.getComputedStyle(document.getElementById("practice_vowels01")).display !== "none") {
      audio1();
    }
    else if (window.getComputedStyle(document.getElementById("practice_vowels02")).display !== "none") {
      audio2();
    }
  }
})

document.onkeydown = checkKey;
function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
      // up arrow
  }
  else if (e.keyCode == '40') {
      // down arrow
  }
  else if (e.keyCode == '37') {
     // left arrow
     practice_left();
     practice_left1();
     practice_left2();
  }
  else if (e.keyCode == '39') {
     // right arrow
     practice_right();
     practice_right1();
     practice_right2();
  }
}
// Shuffle list
function shuffling(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Content
const vowels_eng_kr = {a:"아", eu:"으", i:"이", o:"오", eo:"어", oo:"우", e:"에", ae:"애"};
const vowels_kr_eng = {아:"a", 으:"eu", 이:"i", 오:"o", 우:"oo", 에:"e", 애:"ae", 어:"eo"};
const vowels_eng_kr2 = {ya:"야", yo:"요", yoo:"유", ye:"예", yae:"얘", yeo:"여"};
const vowels_kr_eng2 = {야:"ya", 요:"yo", 유:"yoo", 예:"ye", 얘:"yae", 여:"yeo"};
const vowels_eng_kr3 = {oe:"외", wi:"위", ui:"의", wa:"와", weo:"워", wae:"왜", uwe:"웨"};
const vowels_kr_eng3 = {외:"oe", 위:"wi", 의:"ui", 와:"wa", 워:"weo", 왜:"wae", 웨:"uwe"};
vowels_order = [vowels_eng_kr, vowels_kr_eng]
vowels_order2 = [vowels_eng_kr2, vowels_kr_eng2]
vowels_order3 = [vowels_eng_kr3, vowels_kr_eng3]

// Generate new quiz question
var answer ="";
function generateQuestion(alist){
    shuffling(alist)
    const options = []
    const vowels_keys = Object.keys(alist[0])
    const prompt = vowels_keys[Math.floor(Math.random() * vowels_keys.length)]
    answer = alist[0][prompt];
    const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
    document.getElementById("prompt").innerHTML = prompt;
    if (answer == wrong_answer){
        const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
        options.push(wrong_answer)
        options.push(answer)
        shuffling(options)
        document.getElementById("option1").innerHTML = options[0];
        document.getElementById("option2").innerHTML = options[1];
    }
    else {
      options.push(wrong_answer)
      options.push(answer)
      shuffling(options)
      document.getElementById("option1").innerHTML = options[0];
      document.getElementById("option2").innerHTML = options[1];
    }
}

var answer ="";
function generateQuestion2(alist){
    shuffling(alist)
    const options = []
    const vowels_keys = Object.keys(alist[0])
    const prompt2 = vowels_keys[Math.floor(Math.random() * vowels_keys.length)]
    answer = alist[0][prompt2];
    const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
    document.getElementById("prompt2").innerHTML = prompt2;
    if (answer == wrong_answer){
        const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
        options.push(wrong_answer)
        options.push(answer)
        shuffling(options)
        document.getElementById("option3").innerHTML = options[0];
        document.getElementById("option4").innerHTML = options[1];
    }
    else {
        options.push(wrong_answer)
        options.push(answer)
        shuffling(options)
        document.getElementById("option3").innerHTML = options[0];
        document.getElementById("option4").innerHTML = options[1];
    }
}

var answer ="";
function generateQuestion3(alist){
    shuffling(alist)
    const options = []
    const vowels_keys = Object.keys(alist[0])
    const prompt3 = vowels_keys[Math.floor(Math.random() * vowels_keys.length)]
    answer = alist[0][prompt3];
    const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
    document.getElementById("prompt3").innerHTML = prompt3;
    if (answer == wrong_answer){
        const wrong_answer = alist[0][vowels_keys[Math.floor(Math.random() * vowels_keys.length)]];
        options.push(wrong_answer)
        options.push(answer)
        shuffling(options)
        document.getElementById("option5").innerHTML = options[0];
        document.getElementById("option6").innerHTML = options[1];
    }
    else {
        options.push(wrong_answer)
        options.push(answer)
        shuffling(options)
        document.getElementById("option5").innerHTML = options[0];
        document.getElementById("option6").innerHTML = options[1];
    }
}

// Completion bar + Check for when the quiz is completed
var width = 10;
var width2 = 10;
var counter = 0;
var counter2 = 0;
function move(clicked_id, alist) {
    var elem = document.getElementById("myBar");
    var increase = 10;
    const response = document.getElementById(clicked_id).innerHTML;
    if (answer == response) {
        var audio = new Audio('success.mp3');
        audio.play();
        if (width >= 100) {
            width = 10;
            if (window.getComputedStyle(document.getElementById("practice_vowels1")).display !== "none") {
                document.getElementById('practice_vowels1').style.display = "none";
                document.getElementById('intro_vowels2').style.display = "inherit";
            }
          } else {
            width = width+increase;
            elem.style.width = width + "%";
            generateQuestion(alist);
          }
    }
    else {
        var audio = new Audio('wrong.mp3');
        audio.play();
        width = width-increase;
        elem.style.width = width + "%";
        generateQuestion(alist);
    }
    counter++;
}

var i = 0;
var width = 10;
var counter = 0;
function move2(clicked_id) {
    var elem = document.getElementById("myBar2");
    var increase = 10;
    const response = document.getElementById(clicked_id).innerHTML;
    if (answer == response) {
        var audio = new Audio('success.mp3');
        audio.play();
        if (width >= 100) {
            width = 10;
            if (window.getComputedStyle(document.getElementById("practice_vowels2")).display !== "none") {
                document.getElementById('practice_vowels2').style.display = "none";
                document.getElementById('intro_vowels3').style.display = "inherit";
            }
          } else {
            width = width+increase;
            elem.style.width = width + "%";
            generateQuestion2(vowels_order2);
          }
    }
    else {
        var audio = new Audio('wrong.mp3');
        audio.play();
        width = width-increase;
        elem.style.width = width + "%";
        generateQuestion2(vowels_order2);
    }
    counter++;
}


var width = 10;
var counter = 0;
function move3(clicked_id) {
    var elem = document.getElementById("myBar3");
    var increase = 10;
    const response = document.getElementById(clicked_id).innerHTML;
    if (answer == response) {
        var audio = new Audio('success.mp3');
        audio.play();
        if (width >= 100) {
            width = 10;
            if (window.getComputedStyle(document.getElementById("practice_vowels3")).display !== "none") {
                document.getElementById('practice_vowels3').style.display = "none";
                document.getElementById('practice_vowels4').style.display = "inherit";
            }
          } else {
            width = width+increase;
            elem.style.width = width + "%";
            generateQuestion3(vowels_order3);
          }
    }
    else {
        var audio = new Audio('wrong.mp3');
        audio.play();
        width = width-increase;
        elem.style.width = width + "%";
        generateQuestion3(vowels_order3);
    }
    counter++;
}



const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var count = 0;
function flipCard(){
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.toggle('flip');
  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    console.log(firstCard);
  } else {
    hasFlippedCard = false;
    secondCard = this;
    console.log(secondCard);

    if (firstCard.querySelectorAll('.front-face > .card-text')[0].id === secondCard.querySelectorAll('.front-face > .card-text')[0].id){
      count++;
      if (count == 8){
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      firstCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#cadba2";
      secondCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#cadba2";
      var audio = new Audio('success.mp3');
      audio.play();
      resetBoard();
      } else {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      firstCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#cadba2";
      secondCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#cadba2";
      var audio = new Audio('success.mp3');
      audio.play();
      resetBoard();
      }
    }
    else {
      lockBoard = true;
      var audio = new Audio('wrong.mp3');
      firstCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#F47174";
      secondCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#F47174";
      audio.play();
      setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#c1d5e9";
        secondCard.querySelectorAll('.front-face')[0].style.backgroundColor = "#c1d5e9";
        lockBoard = false;
        resetBoard();
      }, 2000)
    }
  }
};

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null]
}

var current_id;

// (function populateCards() {
//     const options = []
//     const vowels_keys = Object.keys(vowels_memory)
//     for(i=0; i <= 8;i++){
//       const current_vowel = vowels_keys[Math.floor(Math.random() * vowels_keys.length)]
//       options.push(current_vowel)
//       options.push(vowels_memory[current_vowel])
//       delete vowels_memory[current_vowel];
//   }
//     for(i = 0; i <= 15; i++) {
//       if (options[i].constructor === Array){
//         document.getElementById(`card-text${String(i+1)}`).innerHTML = options[i][0];
//         document.getElementById(`card-text${String(i+1)}`).id = options[i][1];
//       } else {
//         document.getElementById(`card-text${String(i+1)}`).innerHTML = options[i];
//         document.getElementById(`card-text${String(i+1)}`).id = options[i];
//       }
//    }
// })();

function populateCards() {
  const options = []
    const vowels_keys = Object.keys(vowels_memory)
    for(i=0; i <= 8;i++){
      const current_vowel = vowels_keys[Math.floor(Math.random() * vowels_keys.length)]
      options.push(current_vowel)
      options.push(vowels_memory[current_vowel])
      // delete vowels_memory[current_vowel];
      console.log(Object.keys(vowels_memory).length);
      console.log(i);
  }
    for(i = 0; i <= 15; i++) {
      if (options[i].constructor === Array){
        document.getElementById(`card-text${String(i+1)}`).innerHTML = options[i][0];
        document.getElementById(`card-text${String(i+1)}`).id = options[i][1];
      } else {
        document.getElementById(`card-text${String(i+1)}`).innerHTML = options[i];
        document.getElementById(`card-text${String(i+1)}`).id = options[i];
      }
   }
};

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
};


cards.forEach(card => card.addEventListener('click', flipCard));

