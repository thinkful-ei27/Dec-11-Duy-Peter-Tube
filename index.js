/* global $ */
'use strict';
const url = 'https://www.googleapis.com/youtube/v3/search';
const data = {
  part: 'snippet',
  key: 'AIzaSyBqDajaVDix0W6Yx-6Wg-dhH0zCWJc3_BA',
  q: 'web',
};

$.getJSON(url, data, (response) => console.log(response));