/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyBqDajaVDix0W6Yx-6Wg-dhH0zCWJc3_BA';
  
  const fetchVideos = function (searchTerm, callback) {
    const data = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm,
    };
    $.getJSON(BASE_URL, data, callback);
  };

  const decorateResponse = function (response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default
      };
    }); 
  };
  
  return {
    fetchVideos, decorateResponse
  };
}());