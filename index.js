'use strict';

function addToPage(responseJson) {
  const responseData = responseJson.data;
  $('.results').empty();
  const n = responseData.length;
  for (let i = 0; i < n; i++) {
    $('.results').append(
      `<li>${responseData[i].name}
        <p>${responseData[i].description}</p>
        <a href="${responseData[i].url}">Park Website</a>
      </li>
      <hr />`
    );
  }

}

function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(responseJson => addToPage(responseJson));
}

function convertInputs(list, number) {
  const parksArray = list.split(', ').join();
  const l = number - 1;
  const key = 'your-api-key-here';
  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${parksArray}&limit=${l}&api_key=${key}`;
  getData(url);
}

function submitClicked() {
  $('form').submit(event => {
    event.preventDefault();
    const list = $(this).find('#state').val();
    const number = $(this).find('#results').val();
    convertInputs(list, number);
  })
}

$(submitClicked);