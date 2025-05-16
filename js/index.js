const title = document.getElementById("title");
const age = document.getElementById("age");
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
}

)
.catch(
(err) => {
  console.log(err);
} 

)

});

