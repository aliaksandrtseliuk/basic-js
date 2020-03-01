const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let c = 0.693 / HALF_LIFE_PERIOD

  if (typeof sampleActivity !== "string"
   || /[a-zA-Z]/.test(sampleActivity) 
   ||sampleActivity > MODERN_ACTIVITY 
   || sampleActivity <= 0) 
   return false

  return Math.abs(Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / c))
};
