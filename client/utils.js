// handle the issue of hiding the laoder

export function hidePreloader() {
  const preloader = document.querySelector('.b-preloader');
  preloader.classList.add('b-preloader_hidden');
  setTimeout(() => preloader.style.display = 'none', 1050);
}
