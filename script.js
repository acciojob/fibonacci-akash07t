function fibonacci(num) {
	
// your code here
	if(num < 2){
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}	
var num1=0;
var num2=1;
var sum;
var i=0;
for (i = 0; i < num; i++)
{
sum=num1+num2;
num1=num2;
num2=sum;
}
return num2;
  }

}
fibonacci(num);

module.exports = fibonacci;