let calculation = ''; 
      function updateCalculation(playerMove){
        if(playerMove===1){
          calculation += 1;
        }else if(playerMove===2){
          calculation += 2;
        }else if(playerMove===3){
          calculation += 3;
        }else if(playerMove==='+'){
          calculation += '+';
        }else if(playerMove===4){
          calculation += 4;
        }else if(playerMove===5){
          calculation += 5;
        }else if(playerMove===6){
          calculation += 6;
        }else if(playerMove==='-'){
          calculation += '-';
        }else if(playerMove===7){
          calculation += 7;
        }else if(playerMove===8){
          calculation += 8;
        }else if(playerMove===9){
          calculation += 9;
        }else if(playerMove==='*'){
          calculation += '*';
        }else if(playerMove===0){
          calculation += 0;
        }else if(playerMove==='.'){
          calculation += '.';
        }else if(eval(calculation)){
          calculation =eval(calculation);
        }else if(playerMove==='/'){
           calculation +='/';
        }else if(playerMove===clear){
          inputElement.value ;
            calculation = '';
        }
        
    
      
      
       //console.log(playerMove);
       
    
      
    
      

      }

      function appendToDisplay(playerMove) {
      document.querySelector(".display").value += playerMove;
    }

    function clearDisplay() {
     document.querySelector(".display").value="";
     
    }
  
      