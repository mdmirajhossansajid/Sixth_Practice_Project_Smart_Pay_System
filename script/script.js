document.getElementById("login-btn").addEventListener("click",function(){
    const numberInput=document.getElementById("input-number")
    const contactNumber=numberInput.value;
    console.log(contactNumber);

    const numberPin=document.getElementById("input-pin")
    const pin=numberPin.value;
    console.log(pin);

    if(contactNumber=="01402384675" && pin=="1234")
    {
        alert("Log in successFull");
        window.location.assign("/home.html")
    }

    else
        alert("Log in failed");

})