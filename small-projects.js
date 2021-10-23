
let show = document.getElementById('show');
show.onclick = function(){
    let password = document.getElementById('password');
    const type = password.getAttribute('type') == 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    password.classList.toggle('.password');
}

let submit = document.getElementById('signin');

submit.onclick = () =>{
    let pd = document.getElementById('password');
    let text = document.getElementById('text').value;
    
}

// background color changer

var proceed = document.getElementById('proceed');
var box = document.getElementById('box2');
var color = document.getElementById('color')
var colors = ['red','orangered','palegreen','steelblue','pink','purple','hotpink','salmon','seagreen','rosybrown','lime', 'crimson', 'aqua','yellow','tomato','orchid','darkgreen','deeppink','grey','gray','darkslategray','firebrick','dodgerblue','black','brown','teal','blue',];
proceed.addEventListener('click', function(){
    var text = document.getElementById('colorText').value;
    box.style.backgroundColor = `${text}`;
    color.innerHTML = text;
});

let random = document.getElementById('random');
random.onclick = () =>{
    let randomValue = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = `${randomValue}`;
    color.innerHTML = randomValue;
}

// words counter program 

var wordCount = document.getElementById('wordcount');

wordCount.addEventListener('click', () => {
    let numberOfAlphabet = document.getElementById('numberOfAlphabet');
    let numberOfText = document.getElementById('numberOfText');
    let exactCounts = document.getElementById('numberOfAlphabetSpaces');

    let wordCount = document.getElementById('textCount').value.split(' ');
    let numberOfwords = 0;
    for(var i = 0; i < wordCount.length; i++){
      numberOfwords++;
    }
    numberOfText.innerHTML = numberOfwords;

    let textCounts =  document.getElementById('textCount').value.replace(/ /g, '');
    let numberOfAlphabets = 0;
    for(var i = 0; i < textCounts.length; i++){
      numberOfAlphabets++;
    }
    numberOfAlphabet.innerHTML = numberOfAlphabets;

    let exactCount =  document.getElementById('textCount').value.split('');
    let numberOfExactCount = 0;
    for(var i = 0; i < exactCount.length; i++){
      numberOfExactCount++;
    }
    exactCounts.innerHTML = numberOfExactCount;
});

// get day of the week

var calculateDay = document.getElementById('calculate-day');

calculateDay.addEventListener('click', () =>{
  var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
  let date = document.getElementById('date').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;
  let getDate = document.getElementById('get-date');
  let getMonth = document.getElementById('get-month');
  let getYear = document.getElementById('get-year');
  let weekDay = document.getElementById('weekday');
  getDate.innerHTML = `${date}/`, getMonth.innerHTML = `${month}/`, getYear.innerHTML = year;
  var setNewDate = new Date(`${year}/${month}/${date}`);
  weekDay.innerHTML = days[setNewDate.getDay()];
});

// pop up modal
var modalBox = document.getElementById('greetings');
document.getElementById('show-modal').addEventListener('click', function(){
  modalBox.classList.add('show-greetings-box');
});
let cross = document.getElementById('cross');
cross.addEventListener('click', () => {
  modalBox.classList.remove('show-greetings-box');
});

// flip-coin game

var msgDisplay = document.getElementById('msg-of-game');
document.querySelector('#check').addEventListener('click', () => {
  let selectedOptions = document.getElementById('toss').value.toLowerCase();
  let coinSides = ["Head", "Tail"];
  let randomToss = coinSides[Math.floor(Math.random() * coinSides.length)].toLowerCase();
  console.log(randomToss);
  if(selectedOptions == randomToss){
    console.log('You win !!');
    msgDisplay.innerHTML = 'You win !!';
  }
  else{
    msgDisplay.innerHTML = 'Sorry, You lost it\nBetter luck next time !';
    console.log('Sorry, You lost it\nBetter luck next time !');
  }
});

// function updateMsgDisplay(){
//   for(var i = 0; i < msgs.length; i++){
//     msgDisplay.innerHTML = msgs[i];
//   }
// }

// event count down timer

document.querySelector('#calculate-time').addEventListener('click', timeLeft);


function timeLeft(){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  const fromDate = new Date(`${from}`).getTime()
  const toDate = new Date(`${to}`).getTime();
  console.log(toDate);
  var leftTime = fromDate - toDate;
  
  var daysLeft = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesLeft = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  var secondsLeft = Math.floor((leftTime % (1000 * 60)) / 1000);

  console.log( daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

// counter project
var count = 0;
var number = document.getElementById('number');
function counterNumber(){
  if(event.srcElement.id == 'add'){
    count++;
    number.innerHTML = count;
  }
  else if(event.srcElement.id == 'subtract'){
    count--;
    number.innerHTML = count;
    if(count < 0){
      count = 0;
      number.innerHTML = count;
    }
  }
  else if(event.srcElement.id = 're-set'){
    count = 0;
    number.innerHTML = count;
  }
}

// Music player

var  listOfSongs =['./audio/Barsaat Ki Dhun - Jubin Nautiyal.mp3','./audio/Brown Munde.mp3','./audio/Filhaal 2 Mohabbat - B Praak.mp3','./audio/Bewafa Tera Muskurana - Jubin Nautiyal.mp3','./audio/Baawla - Badshah.mp3','./audio/Kutti Mohabbat.mp3','./audio/Saath Kya Nibhaoge - Tony Kakkar.mp3','./audio/Saiyaan Ne Dekha Aise Main Pani Pani Ho Gayi.mp3','./audio/Tera Suit Bada Tight.mp3'];

let play = document.getElementById('play');
let prev = document.getElementById('previous');
var next = document.getElementById('next');
var audioPlayer = document.getElementById('audio-player');

var trackNumber = 0;

play.onclick = function(){
  if(audioPlayer.paused){
    audioPlayer.play();
    play.src = './images/svg/pause-circle.svg'
  } 
  else{
    audioPlayer.pause();
    play.src = './images/svg/play-circle.svg';
  } 
}

next.onclick = function(){
  if(trackNumber < listOfSongs.length - 1){
    trackNumber++;
  }
  else{
    trackNumber = 0;
  }
  audioPlayer.src = listOfSongs[trackNumber];
  audioPlayer.play();
}

prev.onclick = function(){
  if(trackNumber > 0){
    trackNumber--;
  }
  else{
    trackNumber = 0;
  }
  audioPlayer.src = listOfSongs[trackNumber];
  audioPlayer.play();
}

//video player

//analogue watch and digital watch

function analogueWatch(){
  

  
}
setInterval(function getTime(){
  // Html elements
  let hourNeedle = document.querySelector('.hour-needle');
  let mntNeedle = document.querySelector('.mnt-needle');
  let secNeedle = document.querySelector('.sec-needle');

  let hourText = document.getElementById('hour-text');
  let mntText = document.getElementById('mnt-text');
  let secText = document.getElementById('sec-text');
  // date declare
  let time = new Date();
  let hour = time.getHours();
  let mnts = time.getMinutes();
  let seconds = time.getSeconds();
  
  //conditions
  hourText.innerHTML =  hour;
  let mntsCondition = mnts < 10 ? '0' : '';
  mntText.innerHTML = mntsCondition + mnts;
  let secsCondition = seconds < 10 ? '0' : '';
  secText.innerHTML = secsCondition + seconds;

  let hourCircle = 30 * hour + mnts / 2;
  let mntCircle = 6 * mnts;
  let secCircle = 6 * seconds;
  hourNeedle.style.transform = `rotate(${hourCircle}deg)`;
  mntNeedle.style.transform = `rotate(${mntCircle}deg)`;
  secNeedle.style.transform = `rotate(${secCircle}deg)`;
},1000);

//Image Slider

let allImages = ['./images/makoto-shinkai-kimi-no-na-wa-wallpaper-preview.jpg','./images/anime-anime-girls-bicycle-brunette-wallpaper-preview.jpg','./images/anime-naruto-itachi-uchiha-madara-uchiha-wallpaper-preview.jpg','./images/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg','./images/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg','./images/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg','./images/your-name-sky-stars-kimi-no-na-wa-wallpaper-preview.jpg'];

var imgNumber = 0;

function imgSlider(){
  var htmlId = event.srcElement.id;
  let sliderImgContainer = document.getElementById('slider-img-container');
  let imgContainer = document.querySelector('.img-container');
  if(htmlId == 'next-img'){
    if(imgNumber < allImages.length - 1){
      imgNumber++;
      // imgContainer.classList.add('img-container-active');
    }
    else{
      imgNumber = 0;
    }
    // imgContainer.classList.add('img-container-active');
    sliderImgContainer.src = allImages[imgNumber];
    console.log(allImages[imgNumber]);
  }
  else if(htmlId == 'prev-img'){
    if(imgNumber > 0){
      imgNumber--;
    }
    else{
      imgNumber = allImages.length - 1;
    }
    sliderImgContainer.src = allImages[imgNumber];
    console.log(allImages[imgNumber]);
  }
}

// setInterval(nxtSlide, 2000);
// function nxtSlide(){
//   let sliderImgContainer = document.getElementById('slider-img-container');
//   if(imgNumber < allImages.length - 1){
//     imgNumber++;
//   }
//   else{
//     imgNumber = 0;
//   }
//   sliderImgContainer.src = allImages[imgNumber];
// }

// Add contact function

let addContact = document.getElementById('add-contact');
let addSerialNumber = 3;
addContact.addEventListener('click', function(){
  var contactName = document.getElementById('contact-name').value;
  var contactNumber = document.getElementById('contact-number').value;
  // local storage function
  var contactNameDetails = localStorage.getItem('contact-name') ? JSON.parse(localStorage.getItem('contact-name')):[];
  contactNameDetails.push(contactName);
  localStorage.setItem('contact-name', JSON.stringify(contactNameDetails));
  //creating a dynamically table for contacts form
  // for(var i = 0; i < 1000; i++){
    
  // }
  // serialNumberTd.innerHTML = addSerialNumber++;
  // document.getElementById('table').appendChild(tr).appendChild(serialNumberTd);
});

// function for displaying contact 

function display(){
  var contactNameDetails = localStorage.getItem('contact-name') ? JSON.parse(localStorage.getItem('contact-name')):[];
  for(let key in contactNameDetails){
    var tr = document.createElement('tr');
    var serialNumberTd = document.createElement('td');
    var personName = document.createElement('td');
    personName.innerHTML = contactNameDetails[key];
  }
  // document.getElementById('table').appendChild(tr).appendChild(serialNumberTd);
  document.getElementById('table').appendChild(tr).appendChild(personName);
}
// display();

// practice

// document.getElementById('adding').addEventListener('click', () => {
//   let insput = document.getElementById('lsitem').value;
//   let jst = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
//   jst.push(insput);
//   localStorage.setItem('task', JSON.stringify(jst));
//   dispalyData();
// })
// function dispalyData(){
//   let jst = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
//   let htst = document.getElementById('htst');
//   for(let key in jst){
//     var lit = document.createElement('li');
//     lit.innerHTML = jst[key];
//     document.getElementById('gettext').appendChild(lit);
//   }
// }
// dispalyData();
// document.getElementById('addd').addEventListener('click', function(){
//   let kalim = document.getElementById('kalim').value.trim();
//   var myStorage = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
//   myStorage.push(kalim);
//   localStorage.setItem('task', JSON.stringify(myStorage));
  
// })


//To do list

document.getElementById('add-list').addEventListener('click', () => {
  let item = document.getElementById('remainder-text').value;
  let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
  task.push(item);
  localStorage.setItem('task',JSON.stringify(task));
  toDoListDisplay();
});

function toDoListDisplay(){
  let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
  let listofremainder = document.querySelector('.to-do-list-items');
  if(task !== 0){
    let eachtask = '';
    for(let key of task){
      eachtask += `<li class='list-item' style="list-style: none; background:#555;width:850px;text-align:center;padding:1vh 2vh;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #000">
      <span style="font-size: 2rem;">${key}</span>
      <button class="fa-fa" style="background:none;border:none;color:#fff;font-size:1.3rem;border:3px solid #fff;border-radius:5px;"id='task-dlt'>Delete</button></li>`;
    }
    listofremainder.innerHTML = eachtask;
  }
}
toDoListDisplay();

document.querySelector('.to-do-list-items').addEventListener('click', function(event){
  let int = document.getElementById('h1t');
  let targetEl = event.target;
  if(targetEl.classList.contains('fa-fa')){
    let dltEl = targetEl.parentElement.parentElement;
    let actText = dltEl.innerText;
    let tasklist = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
    console.log(tasklist);
    
  }
})
document.getElementById('clear-text').addEventListener('click', (event) => {
  let item = document.getElementById('remainder-text');
  item.value = '';
})

// change background with menu options

function changeImage(imgSrc){
  document.getElementById('hover-img').src = imgSrc;
  document.getElementById('hover-img').classList.toggle('img-effect');
  // document.querySelector('.list-items').style.background = imgSrc;
  // document.querySelector('.list-items').style.transition = '1.5s';
}

var listItems = document.querySelectorAll('.list-items a').forEach(elements =>{
  elements.onmouseleave = function(){
    // document.querySelector('.list-items').style.background = '#222'; 
    document.getElementById('hover-img').src = './images/png/—Pngtree—chinese style ink landscape beautiful_4213970.png';
  }
});

// Calculator

document.querySelectorAll('.btns input').forEach(btn =>{
  btn.onclick = function(){
    let screen = document.querySelector('.screen');
    screen.innerHTML = document.querySelectorAll('input').value;
  }
})

var screen = document.querySelector('.screen');

document.querySelectorAll('.btns input').forEach(btn =>{
  let number = '';
  btn.onclick = function(){
    number += btn.value;
    screen.innerHTML = number;
  }
})
document.getElementById('result').onclick = function(){
  var operator = document.getElementById('operator').value;
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var ans;
  var cls = document.querySelector('.cls');
  switch(operator){
    case '+':
      ans = num1 + num2;
      break;
    case '-':
      ans = num1 - num2;
      break;
    case '*':
      ans = num1 * num2;
      break;
    case '/':
      ans = num1 / num2;
      break;
    default:
      ans = 'Invalid Operator!'
      break;
  }
  cls.innerHTML = ans;
}
//copy from textarea

document.getElementById('copy').addEventListener('click', () =>{
  let text = document.querySelector('#text-copy').select();
  document.execCommand('copy');
})

// random circles
                
// const box24 = document.getElementById('box24');

// for(i = 0; i < 55; i++){
//   const circles = document.createElement('div');
//   let animeCircles = box24.appendChild(circles);
//   animeCircles.classList.add('anime-circle');
// }

// let animeCircles = document.querySelectorAll('.anime-circle');

// let randomAnimations = anime({
//   targets: animeCircles,
//   background: ()=>{
//     let hue = anime.random(0, 360);
//     let sat = 120;
//     let lum = 55;
//     let hslValue = "hsl("+hue+","+sat+"%,"+lum+"%)";
//     return hslValue
//   },
//   translateX: ()=>{
//     return anime.random(-90, 90)+'vh';
//   }
// })

// web scrapping

// let url = 'https://www.goodreads.com/quotes';
// fetch(url)
// .then(response => response)
// .then(data => console.log(data))

//extra


function insOne(arr){
  return arr.slice(2,6)
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

function insOne(arr, fv, sv, av){
  let secondHalfArr = arr.slice(sv, arr.length);
  let firstHalfArr = arr.splice(fv, sv);
  firstHalfArr.push(av);
  let result = firstHalfArr.concat(secondHalfArr);
  return result;
}

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr1[5] = 18;
console.log(arr1);

// console.log(insOne(arr1, 0, 5, 12))

  