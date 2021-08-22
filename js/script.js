"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('DONE');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    ShowMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == null || genre === '' ){
                console.log("Вы ввели некорректные данные или не вввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
            // let genre = prompt(`Введите ваши любимые жанры через запятую`);

            // if (genre == null || genre === '') {
            //     console.log("Вы ввели некорректные данные или не вввели их вовсе");
            //     i--;
            // } else {
            //     personalMovieDB.genres = genre.split(', ');
            //     personalMovieDB.genres.sort();
            // }
        }
        personalMovieDB.genres.forEach((item, i) => {
          console.log(`Любимый жанр ${i+1} - это ${item}`);  
        });

    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat=false;
        }else{
            personalMovieDB.privat=true;
        }
    }
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if(a != null && b!= null && a != '' && b != '' && a.length < 50 ){
//             personalMovieDB.movies[a] = b; 
//             console.log('DONE');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel(){
    
//     if (personalMovieDB.count < 10) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
// }

// detectPersonalLevel();


// function ShowMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }
// ShowMyDB(personalMovieDB.privat);
// function  writeYourGenres(){
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();






////////////////////////////////

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// const solider = {
//     health: 400,
//     armor: 100
// };

// const john = Object.create(solider);
// // const john = {
// //     health: 100
// // };

// Object.setPrototypeOf(john, solider);

 



// //john.__proto__=solider;

// console.log(john.armor); 
// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);


// function copy(mainObj){
//     let objCopy ={};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const add = {
//     d:17,
//     e:20
// };

// const clone = Object.assign({},add);

// clone.d = 20;
// console.log(add);
// console.log(clone);
// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// const oldArray= ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[2] = 'asdasd';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejurnal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2,5,7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];


// const q = {
//     one: 1,
//     two: 2
// };

// const newObj ={...q};



// const arr = [1,2,3,6,8];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}:${item} внутри массива ${arr}`);
// });

//arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));




// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок!');
// });

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for(let key in options){

//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i}, имеет значение ${options[key] [i]}`);
//             //counter++;
//         }
//     }else{
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);

// console.log(Object.keys(options).length);

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