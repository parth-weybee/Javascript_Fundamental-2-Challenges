'use strict';

const bill = [125,555,44];

const calcTip = (bill)=>{
    return bill>=5 && bill<=300 ? bill*.15 : bill*.20;
}

const tip= [];
tip.push(calcTip(bill[0]))
tip.push(calcTip(bill[1]))
tip.push(calcTip(bill[2]))

const total = [];
total.push(bill[0]+tip[0]);
total.push(bill[1]+tip[1]);
total.push(bill[2]+tip[2]);

console.log("total: ",total);