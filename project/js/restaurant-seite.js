let test = document.getElementById("test");
let currentRestaurant = 0;

renderRestaurant(currentRestaurant);

document.getElementById("arrow-left2").addEventListener("click", () => {
  currentRestaurant =
    (currentRestaurant - 1 + restaurants.length) % restaurants.length;
  renderRestaurant(currentRestaurant);
});

document.getElementById("arrow-right2").addEventListener("click", () => {
  currentRestaurant = (currentRestaurant + 1) % restaurants.length;
  renderRestaurant(currentRestaurant);
});

function renderRestaurant(index) {
  const restaurant = restaurants[index];
  const dishContainer = document.getElementById("test");
  dishContainer.innerHTML = "";

  for (let i = 0; i < restaurant.dishes.length; i++) {
    dishContainer.innerHTML += `
        <div>
            <div class="rect"></div>
            <h1 class="dishName">${restaurant.dishes[i].name}</h1>
            <p class="dishPrice">Price:<br>${
              restaurant.dishes[i].price_yen
            }¥</p>
            <img class="imgFood" src="../img/Restaurant${index + 1}-Food/food${
      i + 1
    }.jpg" alt="">
        </div>
        `;
  }

  document.getElementById("cover2").src = `../img/Restaurant${
    index + 1
  }-Food/Restaurant${index + 1}.jpg`;
  document.querySelector(".headerText2").innerHTML = `
        <p>${restaurant.name}<br>${restaurant.location} – <span style="color:gold">★</span>${restaurant.rating}</p>
    `;

  document.getElementById(
    "description"
  ).innerText = `Öffnungszeiten: ${restaurant.opening_hours}`;
}
