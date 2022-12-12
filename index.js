const createEmployeeRecord = function(recordArray) {
    let testEmployee = {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return testEmployee;
};

const createEmployeeRecords = function(recordArray){
    let employee = recordArray.map(createEmployeeRecord)
    return employee
}

let createTimeInEvent = function(punch){
    const [punchDate, punchHour] = punch.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(punchHour),
        date: punchDate
    })
    return this
}

let createTimeOutEvent = function(punch){
    const [punchDate, punchHour] = punch.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(punchHour),
        date: punchDate
    })
    return this
}

const hoursWorkedOnDate = function(date){
    let timeOut = this.timeOutEvents.find(e =>{
        return e.date === date
    })
    let timeIn = this.timeInEvents.find(e =>{
        return e.date === date
    })
    return ((parseInt(timeOut.hour)- parseInt(timeIn.hour))/100)
}

const wagesEarnedOnDate = function(date){
    let timeTaken = hoursWorkedOnDate.call(this, date);
    return timeTaken * this.payPerHour;
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    let targetName = srcArray.find(e =>{
        return e.firstName === firstName;
    })
    return targetName
}

const calculatePayroll = function(records){
    let employeeTotal = records.map((employee) => {
        return allWagesFor.call(employee)
    });
    let payroll = employeeTotal.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0);
    return payroll;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
  })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

