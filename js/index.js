const title = document.getElementById("title");
const ageElement = document.getElementById("age");
const foodsContiner = document.getElementById("foods-continer");
const drinksContainer = document.getElementById("drinks-container");

fetch("https://romyleads.github.io/my-favorite-book/boris.json")
.then(res => res.json())
.then(data => {
  console.log(data);
  const { firstName, secondName, color } = data;


if (res.ok){ return res.json() }
throw new Error('Something went wrong') 

.then(
(obj) => {
  console.log(obj);
const { firstName, secondName, favFoods, favDrinks, age} = obj;
title.innerText = `${firstName} ${secondName}`;
ageElement.innerText = age;

favFoods.forEach((food) => {
  const li = document.createElement("li");
  li.innerText = food;
  foodsContiner.appendChild(li);
});

favDrinks.forEach((drink) => {
  const drinkElement = document.createElement("div");
  drinkElement.innerText = drink;
  drinksContainer.appendChild(drinkElement);
});


}

)
.catch(
(err) => {
  console.log(err);
} 

)

});

