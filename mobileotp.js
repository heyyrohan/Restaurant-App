function hide_show(event){
    event.preventDefault();
    var mobile_num=document.getElementById("mobile_number").value;
    // console.log(typeof(mobile_num))
    //  console.log(mobile_num.length)
    if(mobile_num.length===0){
        alert("Please fill the number");
    }
    else if(mobile_num.length<10){
        alert("Please fill 10 digit of number");
    }
    else if(mobile_num.length>10){
        alert("Please fill 10 digit of number");
    }
    else if(mobile_num.length===10){
        let otp=document.getElementById("otp");
        otp.style.display="block";
        var login_button=document.getElementById("login_button");
        login_button.style.display="block";
        let sendotp_button=document.getElementById("sendotp_button");
        sendotp_button.style.display="none";
    }
    }

function loginotp(event){
    event.preventDefault();
    // console.log("ok")
    let otp_num=document.getElementById("otp_num").value;
    // console.log(otp_num)
    if(otp_num==="10351035"){
        alert("🎉🎉 Login Successfull 🎉🎉");
        window.location.href="index.html";
    }
    else{
        alert("😭😭 Wrong OTP..Try Again😭😭");
    }
}