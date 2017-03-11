
// get all the elements with an iframe tag
var iframesColl = document.getElementsByTagName('iframe');
// this iterates through ALL the iframes and selects only the audio players
for ( var i = 0; i < iframesColl.length; i++ ) {
  if (iframesColl[i].classList.contains('tumblr_audio_player')) {
      addEventListener(iframesColl[i]);
  }
}
// this function takes the iframe as a parameter, traverses to the respective equaliser and toggles the class hide
function findEqualiser(iframe) {
    var musicPlayerDiv = iframe.parentNode.parentNode.parentNode.parentNode;
    var equaliserDiv = musicPlayerDiv.lastChild;
    return equaliserDiv;
}

// this function adds an event listener to each iframe
function addEventListener(iframe) {
  console.log("called event listener add");
  iframe.addEventListener('click', toggleEqualiserBars);
}

// this function toggles the equaliser bars
function toggleEqualiserBars(iframe) {
  var equaliserBars = findEqualiser(this);
  console.log(equaliserBars);
  equaliserBars.classList.toggle('hide');
}
