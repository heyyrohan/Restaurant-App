var arrayof_signupdata=JSON.parse(localStorage.getItem("signupdata"))||[];
 
function login(event){
    event.preventDefault();
    // console.log(arrayof_signupdata);
    let login_email=document.getElementById("login_email").value;
    let login_pass=document.getElementById("login_pass").value;
    // arrayof_signupdata.forEach(elem => {
    //     confirm(elem.email);
    // });
    // let flag=false;
    for(let i=0;i<arrayof_signupdata.length;i++){
      
         if(arrayof_signupdata[i].email!==login_email && arrayof_signupdata[i].password!==login_pass)
         {
             alert("🤦‍♂️🤦‍♂️ Email not match🤦‍♂️🤦‍♂️"); 
 
         }
       else if(arrayof_signupdata[i].email===login_email && arrayof_signupdata[i].password!==login_pass)
        {
          alert("🤦‍♂️🤦‍♂️ Passord not match 🤦‍♂️🤦‍♂️");
        }
        else if(arrayof_signupdata[i].email===login_email && arrayof_signupdata[i].password===login_pass){
          
            // flag=true;
            window.location.href="index.html";
          }
  }
  // if(flag){
  // }
}