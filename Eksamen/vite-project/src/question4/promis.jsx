// Opret en ny promise
const myPromise = new Promise((resolve, reject) => {
    // Simuler en asynkron operation (f.eks. en netværksanmodning)
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operationen lykkedes!");
      } else {
        reject("Operationen fejlede!");
      }
    }, 1000);
  });
  
  // Håndterer promise
  myPromise
    .then((result) => {
      console.log(result); // "Operationen lykkedes!"
    })
    .catch((error) => {
      console.error(error); // "Operationen fejlede!"
    });
  