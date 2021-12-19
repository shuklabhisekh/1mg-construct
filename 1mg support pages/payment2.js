var count=localStorage.getItem("counter") || 1

var cartpage=JSON.parse(localStorage.getItem("cart"))

display(cartpage);



function display(cartpage){
    cartpage.map(function(e){
        

        var  leftpurchasefirstprice=Number(e.price)*count
       var mrp =1990*count;
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





function cardPayment(){
    
    console.log("here")
}