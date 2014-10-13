var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};

var add = function(a, b){
  var bunshi; 
  var bunbo;
  
  if(Number.isInteger(b)){
    b = frac(b, 1);
  }
  
  if(a.bunbo != b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a.bunbo * b.bunbo;
  }else{
    bunshi = a.bunshi + b.bunshi;
    bunbo = a.bunbo;
  }
  
  var answer = frac(bunshi, bunbo);
  return answer;
};

a=frac(1,3);
b=frac(4,3);
c=add(a,b);
console.log(c);