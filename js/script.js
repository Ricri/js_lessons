"use strict";
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const answers = [];
const  personalMovieDB ={
    count: numberofFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] =b;
personalMovieDB.movies[c] =d;

console.log(personalMovieDB);
/*const category = 'toys';
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