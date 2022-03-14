var now = JSON.parse(localStorage.getItem("view"));

now.map(function (elem) {
  // image
  var divImg = document.createElement("img");
  divImg.setAttribute("id", "pic");
  divImg.setAttribute("src", elem.url);

  // name , by, rating, review, highlight

  var combo = document.createElement("div");
  combo.setAttribute("id", "rare");
  //combo.textContent = "combo"

  var divName = document.createElement("div");
  divName.textContent = elem.productName;

  var by = document.createElement("p");
  by.textContent = elem.productby;

  var rat = document.createElement("p");
  rat.textContent = elem.rating;

  // rating table start
  var ratT = document.createElement("span");
  ratT.textContent = elem.rating;
  document.querySelector("#b").append(ratT);

  var revT = document.createElement("p");
  revT.textContent = elem.review;
  document.querySelector("#name").append(revT);
  // rating table end

  var rev = document.createElement("p");
  rev.textContent = elem.review;

  var un = document.createElement("ul");
  for (var i = 0; i < elem.prodHeading.length; i++) {
    var sub = document.createElement("li");
    sub.textContent = elem.prodHeading[i];
    //console.log(sub);
    un.append(sub);
  }
  // var l1 = document.createElement("li");
  //     l1.textContent = elem.prodHeading1;

  // var l2 = document.createElement("li");
  //     l2.textContent = elem.prodHeading2;

  // var l3 = document.createElement("li");
  //     l3.textContent = elem.prodHeading3;
  //     un.append(l1, l2, l3);

  var p = document.createElement("p");
  combo.append(rat, rev);
  p.append(divName, by, combo, "Product Highlights", un);
  p.setAttribute("id", "prod");
  console.log(elem, "testing");
  // price , add to cart
  var divPricecont = document.createElement("div");
  divPricecont.setAttribute("id", "divPricecont");
  var divPrice = document.createElement("div");
  divPrice.textContent = `₹${elem.price}`;
  var divPricetext = document.createElement("p");
  divPricetext.textContent = ` ${elem.discount}% off`;
  divPricecont.append(divPrice, divPricetext);

  var divPrice2cont = document.createElement("div");
  divPrice2cont.setAttribute("id", "divPrice2cont");
  var divPrice2 = document.createElement("div");
  divPrice2.textContent = `₹${elem.price}`;
  divPrice2text = document.createElement("p");
  divPrice2text.textContent = `+ free shipping and 5% cashback with`;
  var divPrice2Img = document.createElement("img");
  divPrice2Img.setAttribute("id", "divPrice2Img");

  divPrice2Img.src =
    "https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png";
  divPrice2cont.append(divPrice2, divPrice2text);

  var btn = document.createElement("button");
  btn.textContent = "Add To Cart";
  btn.addEventListener("click", function () {
    console.log("here");
    alert("Product is added in cart");
    addCart(elem);
  });

  function addCart(elem) {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart === null) {
      localCart = [];
    }
    localCart.push(elem);
    localStorage.setItem("cart", JSON.stringify(localCart));
    console.log(localCart);
  }

  var btn1 = document.createElement("button");
  btn1.setAttribute("id", "emptycartButton");
  btn1.textContent = "Empty Cart";
  btn1.addEventListener("click", function () {
    console.log("here1");
    emptyCart(elem);
  });
  function emptyCart(elem) {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    let l = localCart.length;
    console.log(l);
    for (var i = 0; i < l; i++) {
      localCart.pop();
    }
    localStorage.setItem("cart", JSON.stringify(localCart));
  }
  var recent = document.createElement("p");
  recent.setAttribute("id", "recent");
  recent.textContent = "389 people viewed this recently";
  var divbt = document.createElement("div");
  divbt.setAttribute("id", "cost");

  divbt.append(recent, divPricecont, divPrice2cont, divPrice2Img, btn);

  // Product discription information
  // info by, description(dd1,dd2),keyIngridents, keyIng list, keyBenefits, DirectionForUse, uses,safetyInfo, saftey measures

  var nameDes = document.createElement("p");
  nameDes.textContent = "Information By " + elem.productName;

  var dd1 = document.createElement("b");
  dd1.textContent = elem.description1;

  var dd2 = document.createElement("span");
  dd2.textContent = elem.description2;

  var keyIng = document.createElement("p");
  keyIng.textContent = "Key Ingredients:";

  var ing = document.createElement("ul");
  for (var i = 0; i < elem.keyIngredient.length; i++) {
    var sub = document.createElement("li");
    sub.textContent = elem.keyIngredient[i];
    //console.log(sub);
    ing.append(sub);
  }

  // var l1 = document.createElement("li");
  // l1.textContent = elem.keyIngredient1;
  // var l2 = document.createElement("li");
  // l2.textContent = elem.keyIngredient2;
  // var l3 = document.createElement("li");
  // l3.textContent = elem.keyIngredient3;
  // var l4 = document.createElement("li");
  // l4.textContent = elem.keyIngredient4;
  // var l5 = document.createElement("li");
  // l5.textContent = elem.keyIngredient5;
  // var l6 = document.createElement("li");
  // l6.textContent = elem.keyIngredient6;
  // var l7 = document.createElement("li");
  // l7.textContent = elem.keyIngredient7;

  // ing.append(l1, l2, l3, l4, l5, l6, l7 )

  var keyBenifit = document.createElement("b");
  keyBenifit.textContent = "Key Benefits:";

  var benifit = document.createElement("ul");
  for (var i = 0; i < elem.keyBenefit.length; i++) {
    var sub = document.createElement("li");
    sub.textContent = elem.keyBenefit[i];
    //console.log(sub);
    benifit.append(sub);
  }

  // var bn1 = document.createElement("li");
  // bn1.textContent = elem.keyBenefit1;
  // var bn2 = document.createElement("li");
  // bn2.textContent = elem.keyBenefit2;
  // var bn3 = document.createElement("li");
  // bn3.textContent = elem.keyBenefit3;
  // var bn4 = document.createElement("li");
  // bn4.textContent = elem.keyBenefit4;
  // var bn5 = document.createElement("li");
  // bn5.textContent = elem.keyBenefit5;

  // benifit.append(bn1, bn2, bn3, bn4, bn5)

  var direction = document.createElement("b");
  direction.textContent = "Directions For Use:";

  var uses = document.createElement("p");
  uses.textContent = elem.directionUse;

  var safety = document.createElement("b");
  safety.textContent = "Safety Information:";

  var saft = document.createElement("ul");
  for (var i = 0; i < elem.safetyInfo.length; i++) {
    var sub = document.createElement("li");
    sub.textContent = elem.safetyInfo[i];
    //console.log(sub);
    saft.append(sub);
  }

  // var s1 = document.createElement("li");
  // s1.textContent = elem.safetyInfo1;
  // var s2 = document.createElement("li");
  // s2.textContent = elem.safetyInfo2;
  // var s3 = document.createElement("li");
  // s3.textContent = elem.safetyInfo3;

  // saft.append(s1,s2,s3);

  var divInfo = document.createElement("div");
  divInfo.setAttribute("id", "info");
  divInfo.append(
    nameDes,
    dd1,
    dd2,
    keyIng,
    ing,
    keyBenifit,
    benifit,
    direction,
    uses,
    safety,
    saft
  );

  // Footer
  //rating,
  // var rating = document.createElement("strong");
  // rating.textContent = "Ratings & Reviews";

  // var rat = document.createElement("p");
  // rat.textContent = elem.rating;

  // var revi = document.createElement("bold");
  // revi.textContent = elem.review;

  // var divFoot = document.createElement("div");
  // divFoot.setAttribute("id", "foot");
  // divFoot.append(rating, rat, revi);

  //right extra space
  var divExtra = document.createElement("div");
  divExtra.setAttribute("id", "more");
  divExtra.textContent = " ";

  //down extra space
  var divDown = document.createElement("div");
  divDown.setAttribute("id", "down");
  divDown.textContent = "";

  //append all to cont
  var div = document.createElement("div");

  div.append(divImg, p, divbt, divInfo, divExtra, divDown);
  document.querySelector("#cont").append(div);
});

// header start
// Get the modal
var signup_modal = document.getElementById("signup_modal");
var login_modal = document.getElementById("login_modal");
var signup_close = document.getElementById("signup_close");
var login_close = document.getElementById("login_close");

// Get the button that opens the modal
var login_btn = document.getElementById("login_button");

var signup_btn = document.getElementById("signup_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
login_btn.onclick = function () {
  login_modal.style.display = "block";
};

signup_btn.onclick = function () {
  signup_modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
login_close.onclick = function () {
  login_modal.style.display = "none";
};

signup_close.onclick = function () {
  signup_modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    login_modal.style.display = "none";
    signup_modal.style.display = "none";
  }
};
// header end

function goToCartPage() {
  window.location.href = "cart.html";
}
