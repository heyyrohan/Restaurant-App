// console.log(address_data);
var order_foodarr = JSON.parse(localStorage.getItem("order_item")) || [];
let address_arr=JSON.parse(localStorage.getItem("address_detail"))||[];
// document.getElementById("confirm_order").addEventListener("click",proceed);

var confirm_add=document.getElementById("Order_detail");
var food_details=document.querySelector("#food_detail");
var total=document.getElementById("total");
function proceed(){
     confirm_add.style.display="block";
    console.log(food_details);
    let sum_of_food=document.createElement("h2");
    order_foodarr.forEach((elem,i) => {
    sum_of_food.innerHTML=`You order:- ${elem.sum} items`;
    let food_name=document.createElement("p");
    food_name.innerHTML=`${i+1}:-${elem.name}`;
    food_detail.append(food_name,sum_of_food);
});
}
proceed();
address_dataa() 
function address_dataa() {
    confirm_add.style.display="block";

    //   var cust_name = document.getElementById("name").value;
    //   var mobile_num = document.getElementById("mob_num").value;
    //   var house_num = document.getElementById("hou_num").value;
    //   var landmark = document.getElementById("landmark").value;
    //   var street_name = document.getElementById("str_name").value;
    //   var city = document.getElementById("city").value;
    //   var state = document.getElementById("state").value;
    address_arr.forEach(elem => {
    var address=document.getElementById("address_detail");
    let add_heading=document.createElement("h2");
    add_heading.innerText="Your Address"
    let a=document.createElement("p");
    a.innerHTML=elem.cust_name;
    let b=document.createElement("p");
    b.innerHTML=elem.mobile_num;
    let c=document.createElement("p");
    c.innerHTML=elem.house_num;
    let d=document.createElement("p");
    d.innerHTML=elem.landmark;
    let e=document.createElement("p");
    e.innerHTML=elem.street_name;
    let f=document.createElement("p");
    f.innerHTML=elem.city;
    let g=document.createElement("p");
    g.innerHTML=elem.state;
    address.append(add_heading,a,b,c,d,e,f,g);
   });
    //   window.location.href="proceed_order.html";
}
document.getElementById("order_button").addEventListener("click",change)
function change(){
    confirm_add.style.display="none";
    document.getElementById("confirm_detail").style.display="block";
    setTimeout(() => {
        document.getElementById("order_gif").src="https://media.tenor.com/6ZkJEn80W7kAAAAM/green-tick.gif;"
        document.getElementById("confirm_msg").innerHTML=`🎉 Your order will delivered in 30 minutes🎉`
        let ok_button=document.getElementById("confirm_button");
        ok_button.style.display="block";
        ok_button.addEventListener("click",moveto_home);
    }, 5000);
}
function moveto_home(){
    window.location.href="index.html";
}