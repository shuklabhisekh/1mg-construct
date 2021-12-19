var product = JSON.parse(localStorage.getItem("ProjectData"));
var recent = [];

product.map(function(elem){
    var div = document.createElement("div")
    div.addEventListener("click",function(){
        console.log(elem);
        var view = [elem];
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















var count=localStorage.getItem("counter") || 1
console.log(count)
document.querySelector("#betweenIncDec").textContent=count



function dec(){
    count--;
    if(count==0){
        window.location.href="cartempty.html"
        return;
    }
var NumberIncDec=document.querySelector("#betweenIncDec")
NumberIncDec.textContent =count;
display(cartpage);
localStorage.setItem("counter",count)
}

function inc(){
    count++;
    var NumberIncDec=document.querySelector("#betweenIncDec")
    NumberIncDec.textContent =count;
    display(cartpage);
    localStorage.setItem("counter",count)
}




var cartpage=JSON.parse(localStorage.getItem("cart"))

display(cartpage);


function display(cartpage){
    cartpage.map(function(e){
        document.querySelector("#leftPurchaseName").textContent=e.productName
        document.querySelector("#quant").textContent=e.quantity
       var leftpurchasefirstprice= document.querySelector("#leftPurchasePriceFirst").textContent= Number(e.price)*count;
    
       var mrp =document.querySelector("#mrpdash").textContent=1990*count;
       document.querySelector("#cartSummarymrp").textContent="₹"+mrp;
       var discount=document.querySelector("#cartSummaryDiscount").textContent="₹"+Math.floor(mrp-leftpurchasefirstprice)

    if(leftpurchasefirstprice>500){
        document.querySelector("#cartSummaryShippingFee").textContent="₹0"
        document.querySelector("#cartSummaryToBePaid").textContent= "₹"+Number(e.price)*count 
    }
    else{
        document.querySelector("#cartSummaryShippingFee").textContent="₹50";
        document.querySelector("#cartSummaryToBePaid").textContent= "₹"+Number(e.price)*count +50
    }
    document.querySelector("#totalSavingGreen").textContent=discount;
    })

}
