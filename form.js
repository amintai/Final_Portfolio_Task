function FormData() {
    var firstName = document.forms["joinForm"]["firstName"].value;
    var middleName = document.forms["joinForm"]["middleName"].value;
    var lastName = document.forms["joinForm"]["lastName"].value;
    var education = document.forms["joinForm"]["education"].value;
    var email = document.forms["joinForm"]["email"].value;
    var address = document.forms["joinForm"]["address"].value;
    var phoneNumber = document.forms["joinForm"]["phoneNumber"].value;
    var gender = document.forms["joinForm"]["gender"].value;
    var numberType = document.forms["joinForm"]["numberType"].value;    
    var date = document.getElementById('datePicker').value;
    var img = document.forms["joinForm"]["profilePicture"].files[0]

    
    var bannerImage = document.getElementById('profilePicture').value;
   // imgData = getBase64Image(bannerImage);
    localStorage.setItem("profilePicture", bannerImage);


    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);

    localStorage.setItem("education", education);
    
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email",email)
    localStorage.setItem("gender", gender);
    localStorage.setItem("numberType", numberType);
    localStorage.setItem("birthdaytime",date)




    


    alert(date , selected)  
    alert(`${middleName} ${lastName} ${firstName} ${email} ${education} ${address} ${phoneNumber} ${date} ${gender} ${numberType}`)
    console.log(firstName,lastName,middleName,education)
}
