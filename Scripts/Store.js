/* global $ */
'use strict';

const Store = (function () {
  const store = {
    videos: []
  };

  const setVideos = function (videos) {
    store.videos = videos;
  };

  return {
    store, setVideos
  };

}());
