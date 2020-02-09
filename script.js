
var memnum = document.querySelector(".nomem");
const member= document.querySelector(".member");
var mem1=document.querySelector(".mem1");
var mem2=document.querySelector(".mem2");
var mem3=document.querySelector(".mem3");
var mem4=document.querySelector(".mem4");
member.style.display = "none";
memnum.addEventListener("change",function(){

    var num = memnum.value;
    console.log(num);
    console.log(mem1);
    
	if(num =="1")
	 {
         console.log("working");
             member.style.display="block";
            mem1.style.display ="block";
            mem2.style.display="none";
            mem3.style.display="none";
            mem4.style.display="none";
   

	 }
    else if(num=="2")
	 {
        member.style.display="block";
        mem1.style.display="block";
        mem2.style.display="block";
        mem3.style.display="none";
        mem4.style.display="none";
        }
    else if(num=="3")
	 {
        member.style.display="block";
        mem1.style.display="block";
        mem2.style.display="block";
        mem3.style.display="block";
        mem4.style.display="none";
        }
    else if(num=="4")
	 {
        member.style.display="block";
        mem1.style.display="block";
        mem2.style.display="block";
        mem3.style.display="block";
        mem4.style.display="block";
        }
    else  if(num=="0")
    {
        member.style.display="none";
    }
})