inicio = false;







window.onload = function () {

visor=document.getElementById("marcador"); 

document.cron.boton1.onclick = activo; 

document.cron.boton1.disabled=false;

}




function activo (){   

     if (document.cron.boton1.value=="Empezar") {

        empezar() 
     }
     }
     
     

function empezar() {

      inicio = true;

      var i = 0;
      intervat = setInterval(increment,50);
      function increment(){
  
         
       i=i+1;
       console.log(i);
       $('#progressbar').progressbar({value:i});
     
      }
     

        for(var i = 0; i < 10; i++){
            var h = setTimeout(hideCube, 0);
            
            var h = setTimeout(showCube, 0);
            }
      

        sumatoria_puntos()

  

      }



function timerup(){


  number = 10;

  const timer = setInterval(()=>{
  
      console.log(number);
  
  
  
      number--;
      if(number == 0){
          clearInterval(timer);
      }
  },100);
  
  
  


  
}






    function hideCube() {
    
        $("button").show('slow');
        $("button").each(function(index, element) {
            var sleepTime = 0;
            var t = setTimeout(function() {
                var d = Math.floor(Math.random() *500);
                $(element).fadeTo(d, 0);
              $(element).disabled = true;
            }, sleepTime);
        });
        }     



 function showCube() {
    
    $("button").show('slow');
    $("button").each(function(index, element) {
        var sleepTime = 0;
        var t = setTimeout(function() {
            var d = Math.floor(Math.random() * 500);
            $(element).fadeTo(d, 1);
            $(element).disabled = false;
        }, sleepTime);
    });
    }  




 async function sumatoria_puntos(){


let quantity = document.getElementById('puntaje');
let button_plus1 = document.getElementById("btn-1");
let button_plus2 = document.getElementById("btn-2");
let button_plus3 = document.getElementById("btn-3");
let button_plus4 = document.getElementById("btn-4");
let button_plus5 = document.getElementById("btn-5");
let button_plus6 = document.getElementById("btn-6");
let button_plus7 = document.getElementById("btn-7");
let button_plus8 = document.getElementById("btn-8");
let button_plus9 = document.getElementById("btn-9");
let button_plus10= document.getElementById("btn-10");
let button_plus11 = document.getElementById("btn-11");
let button_plus12 = document.getElementById("btn-12");


let items = 0;      
function increaseItem() {
items +=20;
quantity.textContent = items;
}

button_plus1.addEventListener("click", increaseItem);
button_plus2.addEventListener("click", increaseItem);
button_plus3.addEventListener("click", increaseItem);
button_plus4.addEventListener("click", increaseItem);
button_plus5.addEventListener("click", increaseItem);
button_plus6.addEventListener("click", increaseItem);
button_plus7.addEventListener("click", increaseItem);
button_plus8.addEventListener("click", increaseItem);
button_plus9.addEventListener("click", increaseItem);
button_plus10.addEventListener("click", increaseItem);
button_plus11.addEventListener("click", increaseItem);
button_plus12.addEventListener("click", increaseItem);




    
}



async function resultados(){

        if(  puntuacion>=510 &&  puntuacion<=1000)
        {
            
            Swal.fire(
                'Good job!',
                'YOU ARE ASWOME!',
                'success'
              )
    
        }else if(  puntuacion>=300 &&  puntuacion<=500)
        {
          
            Swal.fire(
                'VERY GOOD!',
                'success'
              )
    
    
        }else
        {
         
            Swal.fire(
                'NOT GOOD!',
                'YOU ARE SOO SLOW!'        
              )
    
        }
    }




   
    
   

