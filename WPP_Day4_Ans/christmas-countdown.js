const today = new Date();
const christmasDay = new Date('2024-12-25');

const difference = christmasDay - today

let difmilsec = 1000*24*60*60;

let days = Math.floor(difference/difmilsec);




console.log(`There are ${days} days, left until christmas`)