import navbar from "./navbar.js";
document.getElementById("navbar_id").innerHTML=navbar;
var arrayof_cart=JSON.parse(localStorage.getItem("cartdata"))||[];
var showcart_items=document.getElementById("food_items");
function cart_items(){
    arrayof_cart.forEach((elem,ind) => {
        // console.log(elem.img)
        let div=document.createElement("div");
        div.setAttribute("class","food_div");
        let img=document.createElement("img");
        img.setAttribute("class","foodimg")
        img.src=elem.img;
        let name_div=document.createElement("div");
        name_div.setAttribute("class","name_div");
        let name=document.createElement("h5");
        name.setAttribute("class","foodname")
        name.innerHTML=elem.name;
        name_div.append(name);
        let book=document.createElement("button");
        book.setAttribute("class","booknow");
        book.innerText="Order";
        book.addEventListener("click", function(){
           order(elem);
    })
    let remove_item=document.createElement("button");
    remove_item.setAttribute("class","booknow");
    remove_item.innerText="Remove";
    remove_item.addEventListener("click" ,function(){
        clear(ind)
    });
        div.append(img,name_div,book,remove_item);
        showcart_items.append(div) 
        // console.log(elem1.elem.strMealThumb)
    });
    // console.log(arrayof_cart)
}
cart_items();
var order_foodarr=JSON.parse(localStorage.getItem("order_item"))||[];
var sum=0;
function clear(ind){
    sum--;
    arrayof_cart.splice(ind,1)
    localStorage.setItem("cartdata" , JSON.stringify(arrayof_cart));
    window.location.reload();
}

            let order_items=document.getElementById("sum");
            function order(elem){
                // order_items.style.display="block";
                sum++;
                // console.log(sum)
                order_items.innerHTML=sum;
                let order_foodobj={
                    name:elem.name,
                    sum:sum
            }
            order_foodarr.push(order_foodobj);
            localStorage.setItem("order_item",JSON.stringify(order_foodarr));
            console.log(order_foodarr)
            }
            let arrayof_signupdata=JSON.parse(localStorage.getItem("signupdata"))||[];
            var flag=0;
function check(){
    arrayof_signupdata.forEach(elem => {
        flag=elem.login_count;
        console.log(elem)
    });
}
check()
if(flag===0){
    window.location.href="signup.html";
    alert("Please login first");
    console.log("pta ni kya error h")
}
else{
    document.getElementById("order_item").addEventListener("click",move)
    function move(){
        window.location.href="address.html";
    }
}

