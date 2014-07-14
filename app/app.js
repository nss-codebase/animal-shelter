/* global prompt:true */

var prompt = require('sync-prompt').prompt;

var people = [], dogs = [], cats = [], bees = [];

var person1 = {name:'bob', age:10, pets:[]};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('(d)og, (c)at, (b)ee or (q)uit: ');
while(option !== 'q'){
  switch(option){
    case 'd':
      var name = prompt('Name : ');
      var age = prompt('Age : ');
      var gender = prompt('Gender : ');
      var dog = {name:name, age:age, gender:gender};
      dogs.push(dog);
      break;
    case 'c':
      var name = prompt('Name : ');
      var breed = prompt('Breed : ');
      var color = prompt('Color : ');
      var cat = {name:name, breed:breed, color:color};
      cats.push(cat);
      break;
    case 'b':
      var name = prompt('Name : ');
      var size = prompt('Size : ');
      var venom = prompt('Venom : ');
      var bee = {name:name, size:size, venom:venom};
      bees.push(bee);
      break;
  }

  option = prompt('(d)og, (c)at, (b)ee or (q)uit: ');
}

option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
while(option !== 'q'){
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){
      var client = people[i];
      break;
    }
  }

  var animals;
  console.log('Client:', client);
  var choice = prompt('What type of Pet? (d)og, (c)at, (b)ee: ');
  switch(choice){
    case 'd':
      console.log('Dogs:', dogs);
      animals = dogs;
      break;
    case 'c':
      console.log('Cats:', cats);
      animals = cats;
      break;
    case 'b':
      console.log('Bees:', bees);
      animals = bees;
  }

  name = prompt('What is the name of the animal you want to adopt? ');

  for(i = 0; i < animals.length; i++){
    if(animals[i].name === name){
      var animal = animals[i];
      var index = i;
      break;
    }
  }

  console.log('Animal:', animal);
  animals.splice(index, 1);
  client.pets.push(animal);
  console.log('After adoption:', client);
  console.log('Animals array:', animals);

  option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
}



console.log('dogs:', dogs);
console.log('cats:', cats);
console.log('bees:', bees);

