const distanceFromHqInBlocks = (pickUpLocation) => {
  const headQuarters = 42;
  if (headQuarters > pickUpLocation) {
    return headQuarters - pickUpLocation;
  } else {
    return pickUpLocation - headQuarters;
  }
};

const distanceFromHqInFeet = (pickUpLocation) => {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
};

const distanceTravelledInFeet = (pickUpLocation, destination) => {
  if (destination > pickUpLocation) {
    return (destination - pickUpLocation) * 264;
  } else {
    return (pickUpLocation - destination) * 264;
  }
};

const calculatesFarePrice = (pickUpLocation, destination) => {
  let travelDistance = distanceTravelledInFeet(pickUpLocation, destination);
  if (travelDistance <= 400) {
    return 0;
  } else if (travelDistance > 400 && travelDistance < 2000) {
    return 0.02 * (travelDistance - 400);
  } else if (travelDistance > 2000 && travelDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
