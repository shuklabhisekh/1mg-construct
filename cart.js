var product = JSON.parse(localStorage.getItem("ProjectData"));
var recent = [];

product.map(function(elem){
    var div = document.createElement("div")
    div.addEventListener("click",function(){
        console.log(elem);
        var view = [elem];
        //window.location.href = "single.html";
        window.open('single.html', '_blank');
        localStorage.setItem("view",JSON.stringify(view))
    })

    var name = document.createElement("p");
    name.textContent = elem.prodName;
    name.setAttribute("class","buyMoreName")


    var by=document.createElement("p")
    by.textContent=elem.by
    by.setAttribute("class","reviewfont")

    var rating = document.createElement("p");
    rating.innerText = (elem.rating+" ☆");

    var review = document.createElement("p");
    review.textContent = (elem.review);
    review.setAttribute("class","reviewfont")

    var img = document.createElement("img");
    img.setAttribute("src", elem.url)

     var price = document.createElement("p");
    price.textContent = (elem.price);
    price.setAttribute("class","buyMoreName")

     var divprice=document.createElement("div")
     divprice.setAttribute("id","pricediv")
     var add=document.createElement("p")
     add.textContent="ADD"

var ratingReview=document.createElement("div")
ratingReview.setAttribute("class","ratingreview")
var ratingdiv=document.createElement("div")
ratingdiv.setAttribute("class","ratingdiv")
var reviewdiv=document.createElement("div")
reviewdiv.setAttribute("class","reviewdiv")   
var divImg = document.createElement("div")    
divImg.append(img);
var divText = document.createElement("div") 
ratingdiv.append(rating)
reviewdiv.append(review)
divprice.append(price,add)
 ratingReview.append(ratingdiv,reviewdiv)   
divText.append(name,by,ratingReview, divprice);

    div.append(divImg, divText);

    document.querySelector(".smallbox1").append(div);

})










var cartpage=JSON.parse(localStorage.getItem("champData"))
console.log(cartpage)

// cartpage.map(function(e){
//     document.querySelector(#leftPurchaseName).textContent=e.productName
// })


var count=1
var leftpurchasefirstprice=document.querySelector("#leftPurchasePriceFirst").innerText
    leftshowprice=+leftpurchasefirstprice

function dec(){
    count--;
    if(count==0){
        window.location.href="cartempty.html"
    }
var NumberIncDec=document.querySelector("#betweenIncDec")
NumberIncDec.textContent =count;
leftshowprice-= Number(leftpurchasefirstprice);
console.log(leftshowprice);
leftpurchasefirstprice.textContent=leftshowprice;
}

function inc(){
    count++;
    var NumberIncDec=document.querySelector("#betweenIncDec")
    NumberIncDec.textContent =count;
    leftshowprice+= Number(leftpurchasefirstprice);
    console.log(leftshowprice);
    leftpurchasefirstprice.textContent="leftshowprice";
}

