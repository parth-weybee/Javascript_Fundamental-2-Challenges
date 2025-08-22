'use strict';

const bill=  [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];

const tip = [];

const total = [];

const calcTip = (billAmt)=>
{
    billAmt>=50 && billAmt<=300 ? bill*0.15: bill*0.20;
}

for(let i=0;i<bill.length;i++)
{
    tip.push(bill[i]);
    total.push(tip[i]+bill[i]);
}

console.log("total :",total);