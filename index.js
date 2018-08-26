var check= document.getElementById("check")
console.log(check)
 function Andela () {
    var c= document.getElementById("number").value 
    console.log(c)
    var arrayArmstrong= c.toString(10).replace(/\D/g, "0").split("").map(Number)
    console.log(arrayArmstrong)

     var sum=0
    for (i=0;i<arrayArmstrong.length;i++) {
        sum += arrayArmstrong[i]**3;
        }
        return sum;
 }
 check.addEventListener("click", result);
//  check.addEventListener('dblclick', secondResult)
 function result () {
    var c= document.getElementById("number").value 
    console.log(c)
    var arrayArmstrong= c.toString(10).replace(/\D/g, "0").split("").map(Number)
    console.log(arrayArmstrong)
    // document.getElementById("view").innerHTML=arrayArmstrong;
    console.log(view)
         if (arrayArmstrong.length===3) {
            document.getElementById("view").innerHTML=Andela()   
             }     else if (arrayArmstrong.length !=3) {
                check.style.backgroundColor= '#A9A9A9'
             } else if (arrayArmstrong.length !=3 &&  (check.style.backgroundColor = '#A9A9A9') ){
                 document.getElementById('view')= 'kindly insert a 3 digit number'
             }
         
    }
  
        
   
    