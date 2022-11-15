const $element_id = new Html5QrcodeScanner('$element_id', {fps: 10, qrbox: {width: 250, height: 250}}, false);
$element_id.render(function (decodedText, decodedResult) {
  console.log(decodedText);
  console.log(decodedResult);
  document.getElementById('$element_id-debug').innerHTML = decodedText;
});
