// Initialize medium zoom.
$(document).ready(function () {
  var overlayBg =
    getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee"; // + 'ee' for transparency.

  medium_zoom = mediumZoom("[data-zoomable]:not(.pub-preview-zoom)", {
    background: overlayBg,
  });

  // Publication list thumbnails: same contain + white letterboxing as in-page (see _publications.scss).
  medium_zoom_pub_preview = mediumZoom("[data-zoomable].pub-preview-zoom", {
    background: "#ffffff",
  });
});
