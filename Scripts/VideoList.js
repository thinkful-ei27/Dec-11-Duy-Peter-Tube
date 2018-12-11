/* global $, fetchVideos, setVideos, decorateResponse, store, api */
'use strict';

const videoList = (function () {
  const generateListItem = function (video) {
    return `
      <li data-video-id=${video.id}>
      <a href= http://www.youtube.com/watch?v=${video.id} target=_blank><img src=${video.thumbnail.url}></a>
      ${video.title}
      </li>
    `;
  };

  const render = function () {
    const videos = Store.store.videos;
    const videoHtml = videos.map(video => {
      return generateListItem(video);
    });
    $('.results').html(videoHtml);
  };

  const handleFormSubmit = function () {
    $('form').submit(function(event){
      event.preventDefault();
      const searchTerm = $('#search-term').val();
      api.fetchVideos(searchTerm, function(response){
        const decoratedResponse = api.decorateResponse(response);
        Store.setVideos(decoratedResponse);
        render();
        $('#search-term').val('');
      });
    });
  };

  const bindEventListeners = function () {
    handleFormSubmit();
  };
  
  return {
    render, bindEventListeners
  };
}());