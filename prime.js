try
{
function prime(n)
  {
    for(var i = 2; i < n; i++)
    {
      if(n % i == 0)
      {
        return "not prime";
      }}
    return "prime";  
  }
console.log(prime(2));}
catch(ee){
    console.log(ee.message);}
