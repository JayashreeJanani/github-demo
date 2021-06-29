let x=275;
let y=240;
let z=430;
let bill = x+y+z;

let tip = (bill>=50 && bill<=300)?15/100:20/100;
let total= bill+tip;
console.log(total+"=>total " +bill +"=>bill"+tip+"tip");
