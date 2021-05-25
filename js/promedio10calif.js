<<<<<<< HEAD
//programa 2.- Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio
  //Munguia Oviedo Elva Melina
  
  
  let calificaciones=[];
  let califmayores=[];
  
	for(let i=0;i<10;i++){
    let leer=parseFloat(prompt("Teclea la calificación"+(i+1)));
    calificaciones.push(leer);
  }
  
  let suma=0;
  let promedio;
  for(let i=0;i<10;i++){
   suma+=calificaciones[i];
   }
   promedio=suma/10;
  for(let i=0;i<10;i++){
   if(promedio<=calificaciones[i]){
       califmayores.push(calificaciones[i]);}
  }
  document.write("<br>Su promedio es "+promedio+"<br> Calificaciones mayores: "+califmayores);
  

  
=======
<script>

  
  //programa 2.- Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio
  //Munguia Oviedo Elva Melina
  
  
  let calificaciones=[];
  let califmayores=[];
  
	for(let i=0;i<10;i++){
    let leer=parseFloat(prompt("Teclea la calificación"+(i+1)));
    calificaciones.push(leer);
  }
  
  let suma=0;
  let promedio;
  for(let i=0;i<10;i++){
   suma+=calificaciones[i];
   }
   promedio=suma/10;
  for(let i=0;i<10;i++){
   if(promedio<=calificaciones[i]){
       califmayores.push(calificaciones[i]);}
  }
  document.write("<br>Su promedio es "+promedio+"<br> Calificaciones mayores: "+califmayores);
  
  
</script>
>>>>>>> 876c65519cb06ac0ad33511b0b86d21edd8ace49
