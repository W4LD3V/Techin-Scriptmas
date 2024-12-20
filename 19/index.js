const CONVERSION_FACTORS = {
    foot: 30.48,  // 1 foot => 30.48 cm
    inch: 2.54,   // 1 inch => 2.54 cm
    mile: 160934, // 1 mile => 160934 cm
    yard: 91.44,  // 1 yard => 91.44 cm
    wm: 60        // 1 washing machine => 60 cm
};

const measurements = {
    inches: 146, 
    extraInches: 92, 
    feet: 112 + 189 + 180 + 144, 
    yards: 95, 
    washingMachines: 44 
};

let totalCm = 0;

totalCm += measurements.inches * CONVERSION_FACTORS.inch;
totalCm += measurements.extraInches * CONVERSION_FACTORS.inch;

totalCm += measurements.feet * CONVERSION_FACTORS.foot;

totalCm += measurements.yards * CONVERSION_FACTORS.yard;

totalCm += measurements.washingMachines * CONVERSION_FACTORS.wm;

totalCm = totalCm.toFixed(2);

console.log(`The total in centimeters is: ${totalCm} cm`);
