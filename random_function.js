exports = function(arg){
  let collection = context.services.get("mongodb-atlas").db("numbers").collection("oz");
  let result = []; 
  const lengthOfResult = 6;
  const maxManual = 40;
  collection.findOne({})
    .then(doc => {
      if(doc) {
        let numbers = doc.numbers;
        let picked = 0;
        for (let i=0; i<lengthOfResult; i++){
          while(result.indexOf(picked) > -1 || picked===0){
              picked = numbers[Math.floor(Math.random() * numbers.length)];
          }
          result.push(picked);
        }
        // One manual wild card number
        result.push(Math.floor(Math.random() * Math.floor(maxManual)));
        console.log(result);
        result = result.sort(function(a, b){return a - b});
      } else {
        console.error('Failed to find document in collection');
      }
    })
    .catch(err => console.error('Failed to find document: ${err}'));
    
  return result;
};
