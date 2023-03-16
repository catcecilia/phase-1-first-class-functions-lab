// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    const twoDrivers = [];
    twoDrivers.push(drivers[0]);
    twoDrivers.push(drivers[1]);
    return twoDrivers;
}

function returnLastTwoDrivers(drivers){
    const twoDrivers = [];
    twoDrivers.push(drivers[drivers.length-2]);
    twoDrivers.push(drivers[drivers.length-1]);
    return twoDrivers;
}

let selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

function createFareMultiplier(num){
    return createFareMultiplier => 25;
}

function fareDoubler(num){
    return 2*num;
}

function fareTripler(num){
    return 3*num;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}