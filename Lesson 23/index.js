let curruntHr= Number(prompt("Enter Current hour...."))

if(curruntHr!=0){
    if (curruntHr<0 || curruntHr>23){

        alert("Input is not correct")
    
    }  else if(curruntHr<8 || curruntHr>=18){
    
        alert("hour is outside of office hours")
    }
  
    else{
        alert("we are open")
    }


}else{alert("Put some digit")}
    


   
