var acc = document.getElementsByClassName("accordion");
var i;

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

// Start out by hiding the main sections
document.getElementById('section2').style.display = "none";
document.getElementById('section3').style.display = "none";
document.getElementById('section4').style.display = "none";
document.getElementById('section5').style.display = "none";
document.getElementById('section6').style.display = "none";
document.getElementById('section7').style.display = "none";

// Hide the subsections for ey
document.getElementById('section3_pattern_verbs_correct').style.display = "none";
document.getElementById('section3_pattern_sentence_correct').style.display = "none";
document.getElementById('section3_pattern_sentence').style.display = "none";
document.getElementById('section3-complete').style.display = "none";

document.getElementById('general-definition').style.display = "none";

document.getElementById('section5_pattern_verbs_correct').style.display = "none";
document.getElementById('section5_pattern_sentence_correct').style.display = "none";
document.getElementById('section5_pattern_sentence').style.display = "none";
document.getElementById('section5-complete').style.display = "none";

// Move on from section 1 to section 2
var btn1 = document.getElementById("button1");
btn1.addEventListener("click", hideShow1);

function hideShow1() {
  document.getElementById('section1').style.display = "none";
  document.getElementById('section2').style.display = "inherit";
}

// Move on from section 2 to section 3
var btn2 = document.getElementById("button2");
btn2.addEventListener("click", hideShow2);

function hideShow2() {
  document.getElementById('section2').style.display = "none";
  document.getElementById('section3').style.display = "inherit";
}

// Activities page ey (section 3)
var btn3_1 = document.getElementById("button_section3_1");
btn3_1.addEventListener("click", checkResponses);

function checkResponses() {
  var select3_1 = document.getElementById('dd3_1');
  var select3_2 = document.getElementById('dd3_2');
  if (select3_1.options[select3_1.selectedIndex].text == "location" && select3_2.options[select3_2.selectedIndex].text == "movement"){
    document.getElementById('section3_pattern_verbs').style.display = "none";
    document.getElementById('verb-table-ey').style.display = "none";
    document.getElementById('section3_pattern_verbs_correct').style.display = "inherit";
    document.getElementById('section3_pattern_sentence').style.display = "inherit";
    window. scrollTo(0, 150)
  }
  else {
    window.alert("Not quite! Try again :)")
  }
}


var btn3_2 = document.getElementById("button_section3_2");
btn3_2.addEventListener("click", checkResponses2);

function checkResponses2() {
  var select3_3 = document.getElementById('dd3_3');
  var select3_4 = document.getElementById('dd3_4');
  var select3_5 = document.getElementById('dd3_5');
  var select3_6 = document.getElementById('dd3_6');
  if (select3_3.options[select3_3.selectedIndex].text == "inside or on" 
  && select3_4.options[select3_4.selectedIndex].text == "contact"
  && select3_5.options[select3_5.selectedIndex].text == "away from"
  && select3_6.options[select3_6.selectedIndex].text == "towards"){
    document.getElementById('section3_pattern_sentence').style.display = "none";
    document.getElementById('section3_pattern_sentence_correct').style.display = "inherit";
    document.getElementById('section3_pattern_verbs_correct').style.display = "none";
    document.getElementById('section3-complete').style.display = "inherit";
    window. scrollTo(0, 0)
  }
  else {
    window.alert("Not quite! Try again :)")
  }
}

// Move on to eyse
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", hideShow3);

function hideShow3() {
  document.getElementById('section3').style.display = "none";
  document.getElementById('section4').style.display = "inherit";
}

var btn5_1 = document.getElementById("button_section5_1");
btn5_1.addEventListener("click", checkResponses3);

function checkResponses3() {
  var select5_1 = document.getElementById('dd5_1');
  var select5_2 = document.getElementById('dd5_2');
  if (select5_1.options[select5_1.selectedIndex].text == "static" && select5_2.options[select5_2.selectedIndex].text == "dynamic"){
    document.getElementById('section5_pattern_verbs').style.display = "none";
    document.getElementById('section5_pattern_verbs_correct').style.display = "inherit";
    document.getElementById('section5-complete').style.display = "inherit";
    window. scrollTo(0, 150)
  }
  else {
    window.alert("Not quite! Try again :)")
  }
}

var btn5 = document.getElementById("button5");
btn5.addEventListener("click", hideShow5);
function hideShow5() {
  document.getElementById('section5').style.display = "none";
  document.getElementById('section6').style.display = "inherit";
}

var array;

function getText() {
  var textarea = document.getElementById('text');
  localStorage.setItem('definition', textarea.value);
  document.getElementById("myDefinition").innerHTML = textarea.value; 
  if (textarea.value.length > 20) {
    document.getElementById('text').style.display = "none";
    document.getElementById('button_section4_1').style.display = "none";
    document.getElementById('general-definition').style.display = "inherit";
    document.getElementById('chitchat_4').style.display = "inherit";
  } else {
    alert("Write a little more... You can take a guess!");
  }
  array = textarea.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
}

var btn4_1 = document.getElementById("button_section4_1");
btn4_1.addEventListener("click", getText);

var btn4 = document.getElementById("button4");
btn4.addEventListener("click", hideShow4);

function hideShow4() {
  document.getElementById('section4').style.display = "none";
  document.getElementById('section5').style.display = "inherit";
}
var btn6 = document.getElementById("button6");
btn6.addEventListener("click", hideShow6);

var btn7 = document.getElementById("button7");
btn7.addEventListener("click", hideShow7);

function hideShow6() {
  document.getElementById('section6').style.display = "none";
  document.getElementById('section7').style.display = "inherit";
}

function hideShow7() {
  document.getElementById('section7').style.display = "none";
  document.getElementById('section1').style.display = "inherit";
}

// Hide the subsections for eyse
document.getElementById('section4_pattern_verbs_correct').style.display = "none";
document.getElementById('section4_pattern_sentence_correct').style.display = "none";
document.getElementById('section4_pattern_sentence').style.display = "none";
document.getElementById('section4-complete').style.display = "none";


function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
      item = event.target.id;

    event
      .currentTarget
      .style
    //   .backgroundColor = 'yellow';
  }

function onDragOver(event) {
    event.preventDefault();
  }

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event 
    .dataTransfer
    .clearData();
}

  function onDragLeave(event) {
    event
      .currentTarget
      .style
      .backgroundColor = 'white'; 
    //   #CD5C5C
  }

function onDragEnd(event) {
    event
    .currentTarget
    .style
    .backgroundColor = 'white';
    //   #CD5C5C
}


// var item;

// All

// document.getElementById('button6').style.display = "none";
// document.getElementById("buttontryagain").style.display = "none";
// document.getElementById('general-definition').style.display = "none";
// document.getElementById("notbad").style.display = "none"; 
// document.getElementById("congrats").style.display = "none";
// document.getElementById("tryagain").style.display = "none"; 


// document.getElementById("question2").style.display = "none"; 
// document.getElementById("question3").style.display = "none"; 
// document.getElementById("question4").style.display = "none"; 
// document.getElementById("question5").style.display = "none"; 
// document.getElementById("question6").style.display = "none"; 
// document.getElementById("question7").style.display = "none"; 
// document.getElementById("question8").style.display = "none"; 
// document.getElementById("question9").style.display = "none";
// document.getElementById("question10").style.display = "none";  
// document.getElementById("newtranslation2").style.display = "none"; 
// document.getElementById("newtranslation3").style.display = "none"; 
// document.getElementById("newtranslation4").style.display = "none"; 
// document.getElementById("newtranslation5").style.display = "none"; 
// document.getElementById("newtranslation6").style.display = "none"; 
// document.getElementById("newtranslation7").style.display = "none"; 
// document.getElementById("newtranslation8").style.display = "none"; 
// document.getElementById("newtranslation9").style.display = "none"; 
// document.getElementById("newtranslation10").style.display = "none"; 


// var btn8 = document.getElementById("startpractice");
// btn8.addEventListener("click", hideShow8);

// function hideShow8() {
//   document.getElementById('startpractice').style.display = "none";
//   document.getElementById('practice').style.display = "inherit";
// }

// // Practice
// const goal_ey = {
//   sent1: ['야! 뒤에 차 온다!', 'Hey! A car is coming behind you!', '에'],
//   sent2: ['그럼 제가 오늘 회사에 갔던 것도 불편하셨겠네요.', 'So it must have been inconvenient that I went to the office today.', '에'],
//   sent3: ['집에 손님이 좀 와 있어가지고.', 'A client has come to the house.', '에'],
//   sent4: ['저 이거 마음에 들어요.', 'I like this.', '에'],
//   sent5: ['나 집에 좀 데려다 줘.', 'Please take me home.', '에'],
//   sent6: ['지금 일본에 와 있는데.', 'Right now we have come to Japan.', '에'],
//   sent7: ['나 잠깐 집에 좀 갔다 올게.', 'I will come back home in a little bit.', '에'],
//   sent8: ['할 말 있으면 이 방에 들어와도 된다고 생각해 네가?', 'Just because you have something to say you think that you can come in here?', '에'],
//   sent9: ['소파 놓을 수 있는 집에 가고 싶다.', "I want to go to a house where I can lay on a sofa.", '에'],
//   sent10: ['아직은 집에 들어갈 때가 아니야.', 'It is not time to go home yet.', '에'],
//   sent11: ['어머니가 집에 안 오셨으면 죽었을 뻔 했다고.', 'If mom had not come home I would have almost died.', '에'],
//   sent12: ['바다에 가고 싶어.', 'I want to go to the sea.', '에'],
//   sent13: ['집에 도둑이 들어왔어.', 'A robber came inside the house.', '에'],
//   sent14: ['백희성 씨 옆에 앉아.', 'Sit next to Hwiseong Baek.', '에'],
//   sent15: ['사실 저 세희씨 방에 들어간 적이 있었어요.', 'The truth is that I have been inside Sehwi\'s room before.', '에']
// };

// const location_ey = {
//   sent1: ['사실 그때가 아직까지 생각에 남는 것 같아요.', 'The truth is that you are still in my thoughts.', '에'],
//   sent2: ['차에 있어.', 'It is in the car.', '에'],
//   sent3: ['저도 옆에 없는데 혼자 어떡하시려고?', 'How are they supposed to do it alone when I am also not by their side?', '에'],
//   sent4: ['이건 세계 역사에 남을 거예요.', 'This is going to remain in the world history.', '에'],
//   sent5: ['나 바로 옆에 있었는데.', 'I was right by your side.', '에'],
//   sent6: ['내 꿈에 나올만큼 이제 말도 하네.', 'I even say that you appear in my dreams.', '에'],
//   sent7: ['나중에 정말 이 집에 나 혼자만 남을까 봐 내가 얼마나 무서웠는지 알아?', 'Do you know how afraid I am to end up all alone in this house?', '에'],
//   sent8: ['다른 줄에 서있는 거예요, 다른 줄에서.', 'They are standing in a different line, in a different line.', '에'],
//   sent9: ['나보다 이상한 애들 세상에 진짜 많아요.', 'There are a lot of people weirder than me in this world.', '에'],
//   sent10: ['네가 미국에 있을 때가 더 나았다는 생각이 들어.', 'I think it was better when you were in the United States.', '에'],
//   sent11: ['바로 바닷가에 와 있다.', 'They have come to the seaside.', '에'],
//   sent12: ['미국에 있을 때 두 사람 사이에 무슨 일 있었어요?', 'Did something happen while the two of you were in the United States?', '에'],
//   sent13: ['그 얼굴이 계속 꿈에 나오네요.', 'This face always appears in my dreams.', '에'],
//   sent14: ['다 내가 잘못했으니까 집에 있어 형.', 'Since it is all my fault, stay at home brother.', '에'],
//   sent15: ['집에 계실 줄 알았어요.', 'I thought that you were at home.', '에']
// };

// const location_eyse = {
//   sent1: ['사람이 그 안에서 작품을 바라보고 있어요.', 'Someone is looking at the work inside.', '에서'],
//   sent2: ['내 방에서 다 들려.', 'I can hear everything from my room.', '에서'],
//   sent3: ['그럼 저희는 지금까지 한국에서 공연하게 된 방탄소년단이었습니다!', 'We are BTS who have been performing in Korea so far!', '에서'],
//   sent4: ['이 집에서 일어난 일들이요.', 'They are things that happened in this house.', '에서'],
//   sent5: ['엄마가 일하시는 집에서 문제가 좀 생겼어.', 'Something happened at the house where my mom works.', '에서'],
//   sent6: ['우리 집에서 일한 지 얼마나 되셨지?', 'How long have you been working at our house?', '에서'],
//   sent7: ['이 동네에서 제일로 공부 잘하는 아 입니다.', 'They are the best student in this neighborhood.', '에서'],
//   sent8: ['미국에서 공연 다섯 개가 매진되었다는 걸 지금도 믿을 수가 없어요.', 'I still cannot believe that we have sold out five shows in the United States.', '에서'],
//   sent9: ['너 우리 집 앞에서 뭐해?', 'What are you doing in front of my house?', '에서'],
//   sent10: ['오늘은 친구집에서 자고 가겠습니다.', 'I will be sleeping at a friend\'s house today.', '에서'],
//   sent11: ['내가 어떻게 집에서 편히 잠을 자냐고?', 'Are you asking how I sleep peacefully at the house?', '에서'],
//   sent12: ['학교에서 누구를 좀 때렸는데.', 'They hit someone at school.', '에서'],
//   sent13: ['세계에서 제일 잘해.', 'They are the best in the world.', '에서'],
//   sent14: ['나는 세상에서 아빠가 제일 좋아.', 'I love daddy more than anything else in the world.', '에서'],
//   sent15: ['지금 내가 천만 원을 어디에서 구합니까?', 'Where do I find ten million won now?', '에서']
// };

// const source_eyse = {
//   sent1: ['이 집에서 나가겠습니다.', 'I will get out of this house.', '에서'],
//   sent2: ['바로 이 자리에서 그 난리가 났었거든요.', 'The chaos started exactly here.', '에서'],
//   sent3: ['너 왜 우리 집에서 나오냐?', 'Why are you coming out of my house?', '에서'],
//   sent4: ['우리 이 집에서 나갈까?', 'Shall we get out of this house?', '에서'],
//   sent5: ['오늘도 방에서 안 나오지?', 'They are not coming out of the room again today?', '에서'],
//   sent6: ['현장에서 돌아와 보니 먹고 사는 문제가 기다립니다.', 'Upon returning from the field, the problem of eating and living awaits.', '에서'],
//   sent7: ['네 입에서 지금 엄마 얘기가 나와?', 'Are words about mom coming out of your mouth right now?', '에서'],
//   sent8: ['나는 아주 더 먼 곳에서 왔습니다.', 'I came from a place much farther.', '에서'],
//   sent9:['너는 너를 아는 모든 이들의 기억에서 지워졌다', 'You were erased from the memory of everybody who knew you.', '에서'],
//   sent10: ['그러고 나서 서울에서 내려오는 경찰들을 마중하러 가자고.', 'Let\'s go meet the police who have come from Seoul.', '에서'],
//   sent11: ['이 집에서 음식 냄새가 나는데.', 'The smell of food is coming out of this house.'],
//   sent12: ['도시에서 온 사람들은 이 죄다 도현수 찾아요.', 'The people who have come from the city are all looking for the criminal Do Hyunsoo.', '에서'],
//   sent13: ['내 집에서 나가.', 'Get out of my house.', '에서'],
//   sent14: ['네 눈 앞에서 나는 사라지는 거다.', 'I am disappearing from in front of your eyes.', '에서'],
//   sent15: ['하늘집에서 말도 없이 나가서...', 'They left the house in the sky without a word...', '에서']
// };


// const all_lists = [goal_ey, location_ey, source_eyse, location_eyse]
// Check answer
// let counter = 0;
// const list = all_lists[Math.floor(Math.random()*all_lists.length)];
// const values = Object.values(list)
// const random_value = values[Math.floor(Math.random() * values.length)]

// var new_list = []

// while (counter < 10){
//   const list = all_lists[Math.floor(Math.random()*all_lists.length)];
//   const values = Object.values(list)
//   const random_value = values[Math.floor(Math.random() * values.length)]
//   new_list.push(random_value);
//   counter++;
// }

// document.getElementById("question1").innerHTML = "text";
// document.getElementById("newtranslation1").innerHTML = "text";
// document.getElementById("answer").innerHTML = "text";
// document.getElementById("counter").innerHTML = "text";

function play(button) {
  if (button == "1")
  {
   var audio = document.getElementById("audio1");
  };
  if (button == "2")
  {
   var audio = document.getElementById("audio2");
  };
  if (button == "3")
  {
   var audio = document.getElementById("audio3");
  };
  if (button == "4")
  {
   var audio = document.getElementById("audio4");
  };
  if (button == "5")
  {
   var audio = document.getElementById("audio5");
  };
  if (button == "6")
  {
   var audio = document.getElementById("audio6");
  };
  if (button == "7")
  {
   var audio = document.getElementById("audio7");
  };
  if (button == "8")
  {
   var audio = document.getElementById("audio8");
  };
  if (button == "9")
  {
   var audio = document.getElementById("audio9");
  };
  if (button == "10")
  {
   var audio = document.getElementById("audio10");
  };
  if (button == "11")
  {
   var audio = document.getElementById("audio11");
  };
  if (button == "12")
  {
   var audio = document.getElementById("audio12");
  };
  if (button == "13")
  {
   var audio = document.getElementById("audio13");
  };
  if (button == "14")
  {
   var audio = document.getElementById("audio14");
  };
  if (button == "15")
  {
   var audio = document.getElementById("audio15");
  };
  if (button == "16")
  {
   var audio = document.getElementById("audio16");
  };
  if (button == "17")
  {
   var audio = document.getElementById("audio17");
  };
  if (button == "18")
  {
   var audio = document.getElementById("audio18");
  };
  if (button == "19")
  {
   var audio = document.getElementById("audio19");
  };
  if (button == "20")
  {
   var audio = document.getElementById("audio20");
  };
  if (button == "21")
  {
   var audio = document.getElementById("audio21");
  };
  if (button == "22")
  {
   var audio = document.getElementById("audio22");
  };
  if (button == "23")
  {
   var audio = document.getElementById("audio23");
  };
  if (button == "24")
  {
   var audio = document.getElementById("audio24");
  };
  if (button == "25")
  {
   var audio = document.getElementById("audio25");
  };
  if (button == "26")
  {
   var audio = document.getElementById("audio26");
  };
  if (button == "27")
  {
   var audio = document.getElementById("audio27");
  };
  if (button == "28")
  {
   var audio = document.getElementById("audio28");
  };
  if (button == "29")
  {
   var audio = document.getElementById("audio29");
  };
  if (button == "30")
  {
   var audio = document.getElementById("audio30");
  };
  audio.play();
 }

 
function colorChange() {
  var selectdd5_21 = document.getElementById('dd5_21');
  if (selectdd5_21.options[selectdd5_21.selectedIndex].text == "static"){
    document.getElementById('dd5_21v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_21.options[selectdd5_21.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_21v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange2() {
  var selectdd5_22 = document.getElementById('dd5_22');
  if (selectdd5_22.options[selectdd5_22.selectedIndex].text == "static"){
    document.getElementById('dd5_22v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_22.options[selectdd5_22.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_22v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange3() {
  var selectdd5_23 = document.getElementById('dd5_23');
  if (selectdd5_23.options[selectdd5_23.selectedIndex].text == "static"){
    document.getElementById('dd5_23v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_23.options[selectdd5_23.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_23v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange4() {
  var selectdd5_24 = document.getElementById('dd5_24');
  if (selectdd5_24.options[selectdd5_24.selectedIndex].text == "static"){
    document.getElementById('dd5_24v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_24.options[selectdd5_24.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_24v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange5() {
  var selectdd5_25 = document.getElementById('dd5_25');
  if (selectdd5_25.options[selectdd5_25.selectedIndex].text == "static"){
    document.getElementById('dd5_25v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_25.options[selectdd5_25.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_25v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange6() {
  var selectdd5_26 = document.getElementById('dd5_26');
  if (selectdd5_26.options[selectdd5_26.selectedIndex].text == "static"){
    document.getElementById('dd5_26v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_26.options[selectdd5_26.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_26v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange7() {
  var selectdd5_27 = document.getElementById('dd5_27');
  if (selectdd5_27.options[selectdd5_27.selectedIndex].text == "static"){
    document.getElementById('dd5_21v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_27.options[selectdd5_27.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_27v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange8() {
  var selectdd5_28 = document.getElementById('dd5_28');
  if (selectdd5_28.options[selectdd5_28.selectedIndex].text == "static"){
    document.getElementById('dd5_28v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_28.options[selectdd5_28.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_28v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange9() {
  var selectdd5_29 = document.getElementById('dd5_29');
  if (selectdd5_29.options[selectdd5_29.selectedIndex].text == "static"){
    document.getElementById('dd5_29v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_29.options[selectdd5_29.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_29v').style.backgroundColor = "#ffd1dc";
    }
  }  
}
function colorChange10() {
  var selectdd5_30 = document.getElementById('dd5_30');
  if (selectdd5_30.options[selectdd5_30.selectedIndex].text == "static"){
    document.getElementById('dd5_30v').style.backgroundColor = "#fdfd96";
  }
  else {
    if (selectdd5_30.options[selectdd5_30.selectedIndex].text == "dynamic"){
      document.getElementById('dd5_30v').style.backgroundColor = "#ffd1dc";
    }
  }  
}

document.getElementById('subject2').onclick = changeColorSub;   

 function changeColorSub() {
    document.getElementById('subject2').style.color='red';
    return false;
 }
