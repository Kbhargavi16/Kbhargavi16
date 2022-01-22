
function details()
{
     var id=document.getElementById("a").value;
    var firstName=document.getElementById("b").value;
    var lastName=document.getElementById("c").value;
   var gender=document.querySelector('input[name="gender"]:checked').value;
    var age=document.getElementById("f").value;
    var education=document.getElementById("g").value;
    var yearOfPassedOut=document.getElementById("h").value;
    var prefferedBatch=document.querySelector('input[name="Prefferedbatch"]:checked').value;
    var location=document.getElementById("k").value;
    var phoneNumber=document.getElementById("l").value;
    var emaiId=document.getElementById("m").value;
    var table=document.getElementById("table");
    var row=table.insertRow(1);

    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    var cell10=row.insertCell(9);
    var cell11=row.insertCell(10)
    cell1.innerHTML=id;
    cell2.innerHTML=firstName
    cell3.innerHTML=lastName
    cell4.innerHTML=gender
    cell5.innerHTML=age
    cell6.innerHTML=education
    cell7.innerHTML=yearOfPassedOut
    cell8.innerHTML=prefferedBatch
    cell9.innerHTML=location
    cell10.innerHTML=phoneNumber
    cell11.innerHTML=emaiId
}
document.getElementById("mouse").addEventListener("mouseover",showTable)
function showTable()
{
    document.getElementById("a1").style.visibility="visible"
}

    

//     let output=" "
//     var newuser={
//         id:id,
//         fName:firstName,
//         lName:lastName,+
//         gender:gender,
//         ag:age,
//         qualification:education,
//         year:yearOfPassedOut,
//         batch:prefferedBatch,
//         location:location,
//         contactDetails:phoneNumber,
//         emailId:emaiId
//     }
//     user.push(newuser)
//    for(i=0;i<user.length;i++)
//    {
//         output=output+" "+user[i].id+" "+user[i].fName+" "+user[i].lName+" "+user[i].gender+" "+user[i].ag+" "+user[i].qualification+" "+user[i].year+" "+
//         user[i].year+" "+user[i].batch+" "+user[i].location+" "+user[i].contactDetails+" "+user[i].emailId;
//    } 
//    document.getElementById("demo").innerHTML= output;
