const book = document.getElementById("book");




fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
  //  Promise<res>
  .then((res) => {
    // console.log(res.status);
    // console.log(res.ok); //
    // console.log(res);
    if (res.status === 404) {
      throw new Error("Custom not found message");
    }
    // .json() - распарсит json
    // .text() - вернул строку json как есть - с кавычками
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data); // ОБЯЗАТЕЛЬНО ПОСМОТРИТЕ ЧЕМ ЯВЛЯЕТСЯ ТЕЛО ОТВЕТА
    const { name, url } = data;
    heading.innerText = name;
		imgPirate.src = url;
		imgPirate.style.width = "200px";	
		favDrinkElement.innerText = data.favouriteDrink;


		data.parrots.forEach((parrot) => {
			const parrotElement = document.createElement("li");
			parrotElement.innerText = parrot.name;
			parrotsContainer.appendChild(parrotElement);
		});

  })
  .catch((err) => {
    console.log(err.message); // Custom not found message
  });