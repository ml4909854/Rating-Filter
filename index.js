let rating = document.getElementById("rating");
let filterBtn = document.getElementById("ratingBtn");
let productlist = document.getElementById("productlist");

let getData = async () => {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    showdata(data.products);
    filterbyRating(data.products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function showdata(productData) {
  productlist.innerHTML = "";
  productData.forEach((product) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = product.images[0];
    image.style.width = "100px";

    let title = document.createElement("p");
    title.innerHTML = `Title : ${product.title}`;

    let price = document.createElement("p");
    price.innerHTML = `Price : ${product.price}`;

    let rating = document.createElement("p");
    rating.innerHTML = `Rating : ${product.rating}`;

    div.append(image, title, price, rating);
    productlist.append(div);
  });
}

function filterbyRating(products) {
  filterBtn.addEventListener("click", function () {
    let ratingvalue = Number(rating.value) || 0;
    if (ratingvalue > 5 || ratingvalue < 0) {
      alert("The rating range is between 1 and 5.");
    } else {
      let filterProducts = products.filter((product) => {
        return product.rating >= ratingvalue; 
      });
      showdata(filterProducts);
    }
  });
}

getData();
