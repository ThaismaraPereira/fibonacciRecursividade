//Crie uma função que calcule até o 10° elemento da sequência de fibonacci utilizando recursividade.

function Fibonacci(n1 = 0, n2 = 1, index = 10){
  if((n1 == 0) && (n2 == 1)){
    console.log(n1);
    console.log(n2);
  }
 
  index = index - 1;
 
  let atual = n1 + n2;
 
  if(index >=2){
    console.log(atual);
    n1 = n2;
    n2 = atual;
    Fibonacci(n1, n2, index);
  }
}
 
Fibonacci();
