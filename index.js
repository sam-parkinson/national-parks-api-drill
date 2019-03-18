'use strict';

function convertInputs(list, number) {
  const parksArray = list.split(', ').join();
  console.log(parksArray, number);
  // convert the string and number into the format required for the api call
  // call function to call API
}

function submitClicked() {
  $('form').submit(event => {
    event.preventDefault();
    const stateList = $(this).find('#state').val();
    const resultsNum = $(this).find('#results').val();
    convertInputs(stateList, resultsNum);
  })
}

$(submitClicked);

// using data from inputs, make call to NPS API

// add relevant data from API to DOM

// `https://developer.nps.gov/api/v1/parks?stateCode=${foo}&limit=${bar}`