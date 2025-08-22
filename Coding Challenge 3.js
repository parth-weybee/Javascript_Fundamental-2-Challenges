'use strict';

const mark = {
    fullName: "Mark Miller",
    weight:  78,
    height:1.69,
    calcBMI: function()
    {
        this.BMI= this.weight/(this.height**2);
    }
}

const john = {
    fullName: "John Smith",
    weight:  92,
    height:1.95,
    calcBMI: function()
    {
        this.BMI= this.weight/(this.height**2);
    }
}

john.calcBMI();
mark.calcBMI();

console.log(`Mark BMI: ${mark.BMI} and John BMI: ${john.BMI}`)