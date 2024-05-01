import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar;
// console.log(navbar)

var myIndex = 0;
function change() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(x , 'slides') ; 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
myIndex++;
  if (myIndex > x.length) myIndex = 1
  x[myIndex-1].style.display = "block";  
  setTimeout(change, 2000); 
}

change();

document.getElementById("search_id").addEventListener("click", showitem_by_search);
let slider_div=document.getElementById("slider_box");

function showitem_by_search(event){
    event.preventDefault();
    var searchitem=document.getElementById("searchbox").value;
    if(searchitem.length!==0){
      slider_div.style.display="none";
    // console.log("code to thik h")
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`
    // let url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchitem}`
    fetch(url).then((res)=>{
        return res.json();
    }).then((value)=>{
        // console.log(value.meals)
        showfood(value.meals);
    }).catch((err)=>{
        console.log(err);
        alert("🤦‍♂️🤦‍♂️ OOPS..!! This item is not available🤦‍♂️🤦‍♂️");
        window.location.reload();
    })
  }
}
var sidebox=document.querySelector("#food_items");
function showfood(data){
    sidebox.innerHTML=null;
// console.log(data)
  data.forEach((elem) => {
    let div=document.createElement("div");
    div.setAttribute("class","food_div");
    let img=document.createElement("img");
    img.setAttribute("class","foodimg")
    img.src=elem.strMealThumb;
    let name_div=document.createElement("div");
    name_div.setAttribute("class","name_div");
    let name=document.createElement("h5");
    name.setAttribute("class","foodname")
    name.innerHTML=elem.strMeal;
    name_div.append(name);
    let book=document.createElement("button");
    book.setAttribute("class","booknow");
    book.innerText="Book Now";
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



















// // function searchfun(){
// //     //     let apikey="4203354a049aacb9b1ff402fa7da8cdb";
// //     //     let basedata="https://api.themoviedb.org/3";
// //         // let url=`${basedata}/discover/movie?sort_by=popularity.desc&api_key=${apikey}`
// //         let url=`www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`;
// //         fetch(url).then((res)=>{
// //             return res.json();
// //         }).then((data)=>{
// //             console.log(data.Search);
// //             show(data.Search)
// //         }).catch((err)=>{
// //             console.log(err);
// //         })
// // }

// // fetch(url)
// //   .then((response) => response.json())

// //   .then((data) => console.log(data));



