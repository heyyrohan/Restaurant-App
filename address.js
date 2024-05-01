let address_arr=JSON.parse(localStorage.getItem("address_detail"))||[];
document.getElementById("confirm_order").addEventListener("click",address_data);
 function address_data(){
    var cust_name=document.getElementById("name").value;
    var mobile_num=document.getElementById("mob_num").value;
    var house_num=document.getElementById("hou_num").value;
    var landmark=document.getElementById("landmark").value;
    var street_name=document.getElementById("str_name").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value; 
    if(cust_name.length===0){
        alert("Please fill the name");
    }
    else{
        if(mobile_num.length===0){
            alert("Please fill the mobile number");
        }
        else{
            if(house_num.length===0){
                alert("Please fill the house number");
            }
            else{
                if(landmark.length===0){
                    alert("Please fill the landmark");
                }
                else{
                    if(street_name.length===0){
                        alert("Please fill the street name");
                    }
                    else{
                        if(city.length===0){
                            alert("Please fill the city");
                        }
                        else{
                            if(state.length===0){
                                alert("Please fill the state");
                            }
                            else{
                                let address_obj={
                                    cust_name:cust_name,
                                    mobile_num:mobile_num,
                                    house_num:house_num,
                                    landmark:landmark,
                                    street_name:street_name,
                                    city:city,
                                    state:state
                                }
                                address_arr.push(address_obj);
                                localStorage.setItem("address_detail",JSON.stringify(address_arr));
                                console.log(address_arr)
                                // proceed();
                                window.location.href="proceed_order.html";
                            }
                            }
                        }
                    }
                }
            }
        }
    }
 
