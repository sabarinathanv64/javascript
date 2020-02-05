try {
 var arr1= new Array(3);  
for (var i = 0; i < 3; i++) { 
    arr1[i] = []; 
} 
var h = 0; 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 3; j++) {   
        arr1[i][j] =h++; 
    } 
} 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 3; j++) 
  
    { 
        console.log(arr1[i][j] + " "); 
    }
    console.log("_______"); 
}}
catch(ee){
    console.log(ee.message);
}
