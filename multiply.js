var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};

var multiply = function(a, b){
  var bunshi; 
  var bunbo;
  
  bunshi = a.bunshi*b.bunshi;
  bunbo = a.bunbo*b.bunbo;
    
  var answer = frac(bunshi, bunbo);
  return answer;
};

a=frac(1,3);
b=frac(4,3);
c=multiply(a,b);
console.log(c);
