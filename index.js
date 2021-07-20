// Code your solution in this file!
const hqBlock = 42;
function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(pickupBlock - hqBlock);
}

function distanceFromHqInFeet(pickupBlock) {
    return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet(pickupBlock, dropoffBlock) {
    return Math.abs((pickupBlock - dropoffBlock) * 264);
}

let farePrice;
function calculatesFarePrice(pickupBlock, dropoffBlock) {
    if (distanceTravelledInFeet(pickupBlock, dropoffBlock) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(pickupBlock, dropoffBlock) > 400 && distanceTravelledInFeet(pickupBlock, dropoffBlock) <= 2000) {
        return (distanceTravelledInFeet(pickupBlock, dropoffBlock) - 400) * .02;
    } else if (distanceTravelledInFeet(pickupBlock, dropoffBlock) > 2000 && distanceTravelledInFeet(pickupBlock, dropoffBlock) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(pickupBlock, dropoffBlock) > 2500) {
        return "cannot travel that far";
    }
}