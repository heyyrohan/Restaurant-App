document.getElementById("Indian-Food").addEventListener("click", showitem_indian)
document.getElementById("Canadian-Food").addEventListener("click",showitem_canadian)
document.getElementById("Spanish-Food").addEventListener("click", showitem_spanish)
document.getElementById("Italian-Food").addEventListener("click", showitem_italian)
var food_by_country="";
function showitem_indian(){
    food_by_country="indian";
    showitem();
}
function showitem_canadian(){
    food_by_country="canadian";
    showitem();
}
function showitem_spanish(){
    food_by_country="spanish";
    showitem();
}
function showitem_italian(){
    food_by_country="Italian";
    showitem();
}

function showitem(){
    let url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${food_by_country}`
    fetch(url).then((res)=>{
        return res.json();
    }).then((value)=>{
        console.log(value.meals)
        showfood(value.meals);
    }).catch((err)=>{
        console.log(err);
    })
}
var sidebox=document.querySelector("#food_items");
let slider_div=document.getElementById("slider_box");
function showfood(data){
// console.log(data)
sidebox.innerHTML=null;
slider_div.style.display="none";
  data.forEach(elem => {
    let div=document.createElement("div");
    div.setAttribute("class","food_div");
    let img=document.createElement("img");
    img.setAttribute("class","foodimg")
    img.src=elem.strMealThumb;
    let name_div=document.createElement("div");
    name_div.setAttribute("class","name_div");
    let name=document.createElement("h4");
    name.setAttribute("class","foodname")
    name.innerHTML=elem.strMeal;
    name_div.append(name);
    let book=document.createElement("button");
    book.setAttribute("class","booknow");
    book.innerText="Book Now"
    book.addEventListener("click", function(){
        cart(elem);
    })
    div.append(img,name_div,book);
    sidebox.append(div)
  });
}
var arrayof_cart=JSON.parse(localStorage.getItem("cartdata"))||[]
function cart(elem){
let objof_cart={
    img:elem.strMealThumb,
    name:elem.strMeal
}
arrayof_cart.push(objof_cart);
localStorage.setItem("cartdata",JSON.stringify(arrayof_cart))
console.log(arrayof_cart)
}
