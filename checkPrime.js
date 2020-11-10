
function isPrime(n){
    let divisor = 2;
  
    while (n > divisor){
      if(n % divisor == 0){
       return 'this number not prime'; 
      }
      else
        divisor++;
    }
    return 'this number is prime';
  }
  
  const check= isPrime(8);
  console.log(check);
//    const check1=  isPrime(237);
//    console.log(check1);