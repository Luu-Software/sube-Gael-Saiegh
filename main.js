/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR 

  let registro = registrada.value 
  let dist = distancia.value
  let localidadbondi = localidad.value
  let precio;

if (localidadbondi==="caba") {
  if (registro==="si") {
    
   if (dist<=3) { 
    precio= ("753.74")
   }
  else if (dist <= 6) {
    precio= ("837.52")
  }
  else if (dist <=12){
    precio = ("902.04")
  }
  else if (dist<=27){
    precio=("966.61")
  }
   }
else  {
   if(dist<=3){
    precio= ("1137.23")
   }
  else  
  if(dist <= 6) {
    precio= ("1263.64")
  }
  else 
   if(dist <=12) {
    precio = ("1360.99")
  }
  else 
  if(dist<=27) 
    {
    precio=("1458.41")
  }
  }
  if (registro==="tarifa social") {
    if (dist<=3) {
      precio= ("339,18")
     }
    else if (dist <= 6) {
      precio= ("376,88")
    }
    else if (dist <=12) {
      precio = ("405,91")
    }
    else if (dist<=27) {
      precio=("434,97")
    }
  }
  
} 
if (localidadbondi==="provincia") {
  if (registro==="si") {
    
   if (dist<=3) { 
    precio= ("968,57")
   }
  else if (dist <= 6) {
    precio= (" 1.089,64")
  }
  else if (dist <=12){
    precio = ("1.210,71	")
  }
  else if (dist<=27){
    precio=("1.452,85")
  }
   }
else  {
   if(dist<=3){
    precio= (" 1.937,14")
   }
  else  
  if(dist <= 6) {
    precio= ("2.179,28")
  }
  else 
   if(dist <=12) {
    precio = ("2.421,42")
  }
  else 
  if(dist<=27) 
    {
    precio=("2.905,70")
  }
  }
  if (registro==="tarifa social") {
    if (dist<=3) {
      precio= (" 435,85")
     }
    else if (dist <= 6) {
      precio= ("490,33")
    }
    else if (dist <=12) {
      precio = ("544,81")
    }
    else if (dist<=27) {
      precio=("653,78")
    }
  }
  
} 
if (localidadbondi==="nacional") {
  if (registro==="si") {
    
   if (dist<=3) { 
    precio= (" 700,00")
   }
  else if (dist <= 6) {
    precio= ("779,78 ")
  }
  else if (dist <=12){
    precio = (" 839,86	")
  }
  else if (dist<=27){
    precio=("899,99")
  }
   }
else  {
   if(dist<=3){
    precio= ("1.113,00 ")
   }
  else  
  if(dist <= 6) {
    precio= (" 1.239,85")
  }
  else 
   if(dist <=12) {
    precio = ("1.335,38")
  }
  else 
  if(dist<=27) 
    {
    precio=("1.430,98")
  }
  }
  if (registro==="tarifa social") {
    if (dist<=3) {
      precio= ("315,00")
     }
    else if (dist <= 6) {
      precio= ("350,90")
    }
    else if (dist <=12) {
      precio = (" 377,93")
    }
    else if (dist<=27) {
      precio=("404,99	")
    }
  }
  
} 
 tarifa.innerText = precio;

});

 
