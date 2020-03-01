function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};

function setRightDistance(distance) {
  let distanceKm = Math.floor(+distance/1000);
  let distanceM = +distance % 1000;
  let wordKm = declOfNum(distanceKm, ['километр', 'километра', 'километров']);
  let wordM = declOfNum(distanceM, ['метр', 'метра', 'метров']);
  if (!distanceKm) {
    return distanceM.toString() + ' ' + wordM;
  }
  return distanceKm.toString() + ' ' + wordKm + ' ' + distanceM.toString() + ' ' + wordM;
};

setRightDistance('301');



export default setRightDistance;
//let a = declOfNum(1501, ['километр', 'километра', 'километров'])