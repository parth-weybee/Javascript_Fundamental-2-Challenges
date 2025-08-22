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

if(mark.BMI > john.BMI)
{
    console.log(`${mark.fullName} BMI (${mark.BMI}) is greater then ${john.fullName} BMI (${john.BMI})`);
}
else
{
    console.log(`${john.fullName} BMI (${john.BMI}) is greater then ${mark.fullName} BMI (${mark.BMI})`)
}