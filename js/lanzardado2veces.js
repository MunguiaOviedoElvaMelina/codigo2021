<<<<<<< HEAD
//Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas 
 // Veces cayó cada posible valor de la suma.
 //Munguia Oviedo Elva Melina
  
 class Dado{
    lanzar(){
      return Math.ceil(Math.random()*6);
    }}
  
  function sumar(cara,cara2){
   return suma=cara+cara2;
  }   
  
  
let dado=new Dado();
let dado2=new Dado();
let sumacaras=[0,0,0,0,0,0,0,0,0,0,0,0];
let suma;
for(let i=0;i<=100;i++){
  let cara1=dado.lanzar();
  let cara2=dado2.lanzar();
   suma=sumar(cara1,cara2);
  sumacaras[suma-1]++;
   
 }
    
for(let i=0;i<12;i++){
document.write("posible valor " + (1+i) +" fueron "+ sumacaras[i] + " veces<br>");

}

=======
<script>

  
//Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas 
 // Veces cayó cada posible valor de la suma.
  
	class Dado{
  	lanzar(){
    	return Math.ceil(Math.random()*6);
  	}}
    
    function sumar(cara,cara2){
     return suma=cara+cara2;
    }   
    
	
  let dado=new Dado();
  let dado2=new Dado();
  let sumacaras=[0,0,0,0,0,0,0,0,0,0,0,0];
  let suma;
  for(let i=0;i<=100;i++){
    let cara1=dado.lanzar();
    let cara2=dado2.lanzar();
     suma=sumar(cara1,cara2);
    sumacaras[suma-1]++;
     
   }
  	
  for(let i=0;i<12;i++){
 document.write("posible valor " + (1+i) +" fueron "+ sumacaras[i] + " veces<br>");
  
  }
  
</script>
>>>>>>> 876c65519cb06ac0ad33511b0b86d21edd8ace49
