let data = `[
    {
      "pName": "Apple",
      "pPrice": 500,
      "pImage": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D",
      "pDes": "",
      "pCategory": "Fruits"
    },
    {
      "pName": "Lemon",
      "pPrice": 60,
      "pImage": "https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "pDes": "",
      "pCategory": "Fruits"
    },
    {
      "pName": "Audi",
      "pPrice": 10000,
      "pImage": "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "pDes": "",
      "pCategory": "Cars"
    },
    {
      "pName": "BMW",
      "pPrice": 50000,
      "pImage": "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "pDes": "",
      "pCategory": "Cars"
    },
    {
      "pName": "Shirts",
      "pPrice": 500,
      "pImage": "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "pDes": "",
      "pCategory": "Shirt"
    }
  ]
  `;

let products = JSON.parse(data);
let card = document.getElementById("card");

function allProducts(dataShow) {
    card.innerHTML = ""; 
  for (var a = 0; a < dataShow.length; a++) {
    card.innerHTML += ` 
          <div class="col-md-4 mt-4">
          <div class="card" style="width: 18rem">
                <img src="${dataShow[a].pImage}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${dataShow[a].pName}</h5>
                  <p class="card-text">
                   ${dataShow[a].pPrice}
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>
              `;
  }
}

function filteration(category) {
  card.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].pCategory == category) {
      card.innerHTML += `
          <div class="mt-4 col-md-4">
          <div class="card" style="width: 18rem">
            <img src="${products[i].pImage}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${products[i].pName}</h5>
              <p class="card-text">
               ${products[i].pPrice}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          `;
    }
  }
}

function showAll() {
  allProducts(products);
}

showAll();

//Search Functionality

let search = document.getElementById("searchControl");
let searchResult = "";

search.addEventListener("input", (e) => {
  searchResult = e.target.value.toLowerCase();
  card.innerHTML = "";

  products
    .filter((i) => 
      i.pName.toLowerCase().startsWith(searchResult) ||
        i.pCategory.toLowerCase().includes(searchResult)
    )
    .forEach((res) => {
      card.innerHTML += `
        <div class="mt-4 col-md-4">
          <div class="card" style="width: 18rem">
            <img src="${res.pImage}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${res.pName}</h5>
              <p class="card-text">
               ${res.pPrice}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
        `;
    });
});
