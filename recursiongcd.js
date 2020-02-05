try{
function gcd(a,b) {
    if(a==0){
        return b;
    }
    else if(b==0){
        return a;
    }
    else if(a==b){
        return a;
    }
    else if(a>b){
        return gcd(a-b,b);
    }
    else{
    return gcd(a,b-a);
    }
}
console.log(gcd(98,56));
}
catch(ee){
    console.log(ee.message);
}
