//array of employee information
let employees = [
    { name: "Sandy", hourlyRate: 16, hoursWorked: 31},
    { name: "Joel", hourlyRate: 20, hoursWorked: 40},
    { name: "Gabe", hourlyRate: 18, hoursWorked: 34},
    { name: "Jenna", hourlyRate: 21, hoursWorked: 39},
];

//function to calculate base pay (40 hr max)
function calculateBasePay(hourlyRate, hoursWorked) {
    if (hoursWorked <= 40) {
        return hourlyRate * hoursWorked;
    } else {
        return hourlyRate * 40;
    }
}

//function to calculate overtime pay (1.5X regular rate)
function calculateOvertimePay(hourlyRate, hoursWorked) {
    if (hoursWorked > 40){
        let overtimeHours = hoursWorked - 40;
        return hourlyRate * 1.5 * overtimeHours;
    } else {
        return 0;
    }
}

//function calculating 15% tax of gross pay
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

//payroll function 
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;
    //what will be displayed in the console
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        taxes: taxes,
        netPay: netPay
    };  
}

//clarifying a functions elements and looping through array
for (let employee of employees ) {
    let payroll = processPayroll(employee);
    console.log("Employee:", payroll.name);
    console.log("Base Pay: $", payroll.basePay.toFixed(2));
    console.log("Overtime Pay: $", payroll.overtimePay.toFixed(2));
    console.log("Gross Pay: $", payroll.grossPay.toFixed(2));
    console.log("Net Pay: $", payroll.netPay.toFixed(2));
    console.log("------------------------");
}

