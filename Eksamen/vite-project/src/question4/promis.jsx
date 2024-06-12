
const myPromise = new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operationen lykkedes!");
      } else {
        reject("Operationen fejlede!");
      }
    }, 1000);
  });
  
  
  myPromise
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error); 
    });
  