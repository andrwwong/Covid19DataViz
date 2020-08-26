$(window).on('load', function () {
  // appendLoadingDiv();
});

function appendLoadingDiv() {
  let divs = document.querySelectorAll('.graph');
  let sideBySide = document.querySelector("#ethnicity-side-by-side-graph");

  for (i = 0; i < divs.length; i++) {
    let loadingP = document.createElement('p');
    loadingP.innerText = 'Loading...';
    loadingP.className = 'loading';
    divs[i].appendChild(loadingP);
  }

  let loadingP = document.createElement('p');
  loadingP.innerText = 'Loading...';
  loadingP.className = 'loading';
  sideBySide.appendChild(loadingP);
}
