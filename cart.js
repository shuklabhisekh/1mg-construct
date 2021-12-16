
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
 ratingReview.append(ratingdiv,reviewdiv)   
divText.append(name,by,ratingReview, price);

    div.append(divImg, divText);

    document.querySelector(".smallbox1").append(div);

})