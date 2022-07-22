const button = document.querySelector(".evaluate");

button.addEventListener("click", () => {
  solve();
});

const fareCalculatorMap = {
  upto10: {
    fare: 100,
  },
  upto50: {
    fare: 300,
  },
  upto100: {
    fare: 500,
  },
  upto200: {
    fare: 1000,
  },
  upto300: {
    fare: 1200,
  },
  upto400: {
    fare: 1500,
  },
};

function solve() {
  const amountToPay = getFare();
  const resultDisplay = document.querySelector(".result h5");

  if (!isNaN(amountToPay)) {
    resultDisplay.innerText = `Total Fare: Ksh. ${amountToPay}`;
  } else {
    resultDisplay.innerText = amountToPay;
  }
}

function getFare() {
  const distance = parseInt(document.querySelector(".num1").value);
  const people = parseInt(document.querySelector(".num2").value);

  if (distance > 400) return "Bus does not travel beyond this point.";

  const uptoTen = distance > 0 && distance <= 10;
  const uptoFifty = distance > 10 && distance <= 50;
  const uptoOneHundered = distance > 50 && distance <= 100;
  const uptoTwoHundred = distance > 100 && distance <= 200;
  const uptoThreeHundred = distance > 200 && distance <= 300;
  const uptoFourHundred = distance > 300 && distance <= 400;

  let fare = 0;

  switch (
    uptoTen ||
    uptoFifty ||
    uptoOneHundered ||
    uptoTwoHundred ||
    uptoThreeHundred ||
    uptoFourHundred
  ) {
    case uptoTen === true:
      fare = calculateFare("upto10", people);
      break;
    case uptoFifty === true:
      fare = calculateFare("upto50", people);
      break;
    case uptoOneHundered === true:
      fare = calculateFare("upto100", people);
      break;
    case uptoTwoHundred === true:
      fare = calculateFare("upto200", people);
      break;
    case uptoThreeHundred === true:
      fare = calculateFare("upto300", people);
      break;
    case uptoFourHundred === true:
      fare = calculateFare("upto400", people);
      break;
  }
  return fare;
}

function calculateFare(mapKey, people) {
  return fareCalculatorMap[mapKey].fare * people;
}
