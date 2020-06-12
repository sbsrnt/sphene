const {
  closeWindow,
  isWindowMaximized,
  maximizeWindow,
  maxUnmaxWindow,
  minimizeWindow,
  unmaximizeWindow,
} = require('./menu-functions');

window.addEventListener('DOMContentLoaded', () => {
  window.minimizeWindow = minimizeWindow;
  window.maximizeWindow = maximizeWindow;
  window.unmaximizeWindow = unmaximizeWindow;
  window.maxUnmaxWindow = maxUnmaxWindow;
  window.isWindowMaximized = isWindowMaximized;
  window.closeWindow = closeWindow;

  const minimizeButton = document.getElementById('minimize-btn');
  const maxUnmaxButton = document.getElementById('max-unmax-btn');
  const closeButton = document.getElementById('close-btn');

  minimizeButton.addEventListener('click', () => {
    window.minimizeWindow();
  });

  maxUnmaxButton.addEventListener('click', () => {
    const icon = maxUnmaxButton.querySelector('i.minmax');

    window.maxUnmaxWindow();
    if (window.isWindowMaximized()) {
      icon.classList.remove('crop_square');
      icon.classList.add('filter_none');
    } else {
      icon.classList.add('crop_square');
      icon.classList.remove('filter_none');
    }
  });
  closeButton.addEventListener('click', () => {
    window.closeWindow();
  });
});
