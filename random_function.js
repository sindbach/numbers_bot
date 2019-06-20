exports = function(arg){
  let collection = context.services.get("mongodb-atlas").db("numbers").collection("oz");
  let result = []; 
  const lengthOfResult = 7;
  
  collection.findOne({})
    .then(doc => {
      if(doc) {
        console.log(`Successfully found document: ${doc}.`);
        let numbers = doc.numbers;
        let picked = 0;
        for (let i=0; i<lengthOfResult; i++){
          console.log(result);
          while(result.indexOf(picked) > -1 || picked===0){
              picked = numbers[Math.floor(Math.random() * numbers.length)];
          }
          result.push(picked);
        }
        result = result.sort(function(a, b){return a - b});
      } else {
        console.error('Failed to find document in collection');
      }
    })
    .catch(err => console.error('Failed to find document: ${err}'));
    
  return result;
};
