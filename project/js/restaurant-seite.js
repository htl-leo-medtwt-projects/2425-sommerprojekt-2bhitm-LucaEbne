let test = document.getElementById("test");
console.log(restaurants)
for (let i = 0; i < restaurants[0].dishes.length; i++) {
    test.innerHTML += `
    <div>
    <div class="rect"></div>
    <h1 class="dishName">${restaurants[0].dishes[i].name}</h1>
    <p class="dishPrice">Price:${restaurants[0].dishes[i].price_yen}¥</p>
    
    <img class="imgFood" src="../img/Restaurant1-Food/food${i+1}.jpg" alt="">
  </div>
    `;
}
  