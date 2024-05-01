function mobileno(){
    window.location.href="mobileotp.html";    
}
var login_count=0;
let arrayof_signupdata=JSON.parse(localStorage.getItem("signupdata"))||[];
function signup(event){
    event.preventDefault();
   let name=document.getElementById("name").value;
   let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
   let confirm_password=document.getElementById("confirm_pass").value;
   if(name.length===0){
    alert("Please fill the name");
   }
   else if(name.length===1){
    alert("Please fill the name more than one character");
   }
   else{
      if(email.length===0){
        alert("Please fill the email");
      }
      else{
        if(password.length===0){
        alert("Please fill the password");
        }
        else if(password.length<8 || password.length>8){
            alert("Please fill max 8 length of password");
        }
        else{
            if(confirm_password.length===0){
                alert("Please fill Confirm password");
            }
            else if(confirm_password!==password){
                alert("confirm password not match");
            }
            else{
                login_count++;
                let objof_signupdata={
                    name,email,password,confirm_password,login_count
                }
                arrayof_signupdata.push(objof_signupdata);
                // console.log(arrayof_signupdata);
                localStorage.setItem("signupdata",JSON.stringify(arrayof_signupdata));
                window.location.href="login.html";
                }
            }
        }
      }
   }
   

