exports = function(arg){
  let result = []; 
  const lengthOfResult = 7;
  const maxManual = 40;
  let picked = 0;
  for (let i=0; i<lengthOfResult; i++){
    while(result.indexOf(picked) > -1 || picked===0){
        picked = Math.floor(Math.random() * Math.floor(maxManual));
    }
    result.push(picked);
  }
  result = result.sort(function(a, b){return a - b});
  console.log(result);
  return result;
};
