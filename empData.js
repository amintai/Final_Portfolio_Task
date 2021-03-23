  function getEmployee() {
    var empStatus = document.forms["employee"]["empStatus"].value
    var seekingJob = document.forms["employee"]["seekingJob"].value
    var jobTittle = document.forms["employee"]["jobTittle"].value
    var jobType = document.forms["employee"]["jobType"].value
    var jobSummary = document.forms["employee"]["jobSummary"].value
    
    alert(`${empStatus} ${seekingJob} ${jobTittle} ${jobType} ${jobSummary}`)
    // var getSkill = document.forms["employee"]["add"].value
    // alert(getSkill)
    localStorage.setItem("empStatus", empStatus);
    localStorage.setItem("seekingJob" , seekingJob);
    localStorage.setItem("jobTittle", jobTittle);
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("jobSummary" , jobSummary)
    localStorage.setItem("getSkill",getSkill)

    
}
// function getModelLiData() {

//       // getModelData();

//       var ul = document.getElementById('head')
  
//       var d = ul.appendChild(document.createTextNode(skill))
//       console.log(d);
//       


// // var node = document.createElement("LI");
// //     var textnode = document.createTextNode('${skill}');
// //     node.appendChild(textnode);
// //     document.getElementById("myList").appendChild(node);
//  }


function getModelData(){

  var skill = document.forms["modelForm"]["headSkill"].value
  
    var type = document.forms["modelForm"]["typedSkill"].value
  localStorage.setItem("typedSkill",type)
  document.getElementById('h3').innerHTML=skill
  var ul = document.getElementById('head')
  
  ul.appendChild(document.createTextNode(`${skill}`))
  localStorage.setItem("headSkill" , skill)
  

  
  
// // var node = document.createElement("LI");
// //     var textnode = document.createTextNode("Water");
// //     node.appendChild(textnode);
// //     document.getElementById("myList").appendChild(node);

}
// }


 

// function addHeadSkill() {
//   var skill = document.forms["modelForm"]["headSkill"].value
//   var newUl = document.getElementById('newUl')
//   ul.appendChild(document.createTextNode(skill))
// }



function getModelLiData(){
 
  var dept = document.getElementById('dept').value;
 
    if(dept=="frontend") {
      localStorage.setItem("FrontEndSkill" , dept)

    var node = document.createElement("LI");
    var textnode = document.createTextNode(dept);

    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    } else if(dept == "backend"){
      localStorage.setItem("BackEndSkill" , dept)
        var node = document.createElement("LI");
        var textnode = document.createTextNode(dept);
        node.appendChild(textnode);
        document.getElementById("myListRe").appendChild(node);
   } else if(dept == "other") {
    localStorage.setItem("OtherSkill" , dept)
     var node = document.createElement("div");
     var textnode = document.createTextNode(dept);
     node.appendChild(textnode);
     document.getElementById("otherDiv").appendChild(node);
   }
}


  function check() {
    
    var d = document.getElementById('inlineCheckbox1').value;  
    var node1 = document.createElement("LI");
    var textnode1 = document.createTextNode(d);
    node1.appendChild(textnode1);
    document.getElementById("myList").appendChild(node1);
  }
  
  
  function skillsGet(){
    var type = document.forms["modelForm"]["typedSkill"].value
    
    var selected = []
    var select = document.querySelectorAll('input[type=checkbox]:checked')
  
    var dept = document.getElementById('dept').value;
    for(var i=0 ; i< select.length ;i++) {
      selected.push(select[i].value)
    }
    
    alert(`${selected}${type}`)
    if(dept == "frontend") {

       // var frontendLi = document.getElementById('myList1')
       selected.push(type)
       alert(selected)
       localStorage.setItem("childFrontendSkills" , JSON.stringify(selected))

       var node = document.createElement("LI");
        var textnode = document.createTextNode(selected);
        node.appendChild(textnode);
        document.getElementById("myList1").appendChild(node);

      }
      else if(dept == "backend") {
       
        selected.push(type)
        alert(selected)
        localStorage.setItem("childBackendSkills" ,JSON.stringify(selected))
        var node = document.createElement("LI");
        var textnode = document.createTextNode(selected);
        node.appendChild(textnode);
        document.getElementById("myList1Re").appendChild(node);
     } else if(dept == "other") {
//       var type = document.forms["modelForm"]["typedSkill"].value
       localStorage.setItem("childOtherSkills" , JSON.stringify(type))
        var p =document.getElementById('otherP')
        p.innerHTML = type
 
  
     }

     

    // frontendLi.innerHTML = "<pre>" + selected + "</pre>";

    //var li = document.createElement('li',selected)
  
  
  //li.appendChild(document.createTextNode(selected))
  // ul.appendChild(li)
  
  // localStorage.setItem("selectedSkill",selected)
  // document.getElementById('h6').innerHTML=selected
  
  // console.log(totalHeadSkills)
}

function deleteSkills(){
    var del = document.getElementById('delete')
    del.remove()
}

function appendOptions(){
  var option = document.createElement('option')
  //option.text = "Text";
  option.value = "myvalue"
  var dynamicSelect = document.getElementById("dept")
  dynamicSelect.appendChild(option)

 
}