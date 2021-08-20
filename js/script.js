"use strict";

let numberofFilms;

function start() {
    numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const  personalMovieDB ={
    count: numberofFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if(a != null && b!= null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies[a] = b; 
            console.log('DONE');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();


function ShowMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
ShowMyDB(personalMovieDB.privat);
function  writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();






////////////////////////////////

/*
function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World");
const logg = 'Hello world';

console.log(logg.slice(6,23));

function calc(a,b){
    return (a+b);
}
const a = calc(4,3);
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));




let i = 0;
while (i<2){
    
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b!= null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b; 
        console.log('DONE');
        i++;
    } else {
        console.log('error');
        i--;
    }
}

do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b!= null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b; 
        console.log('DONE');
        i++;
    } else {
        console.log('error');
        i--;
    }
} while(i<2);*/
/*
let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a.length == 0) {
        alert("Вы не ввели название фильма");
        i--;
        break;
    } else if (a.length > 50) {
        alert("Название фильмо не может привыщать 50 симмволов");
        i--;
        break;
    }
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

/*
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] =b;
personalMovieDB.movies[c] =d;

console.log(personalMovieDB);


/*
let  num =50;
do{
    console.log(num);
    num++;
} 
while (num<55);

while (num<=55){
    console.log(num);
    num++;
}

for (let i = 1; i<8; i++){

}
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

//alert("Hello");

//const result = confirm("Are you here?");
/*
const answer = prompt("Вам есть 18?", "18");

console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имЯ?','');
answers[1] = prompt('Как ваше фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

document.write(answers);*/
/*
console.log(-4/0);

console.log('string' * 9);

const da = true;

console.log(da);

console.log(1);
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj ={
    name:'John',
    age: 25,
    isMarried: false
};
console.log(obj["name"]);
obj.a = 10;

console.log(obj.a);*/