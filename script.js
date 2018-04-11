
(function electricMucus() {

  // Queries
  const input = document.getElementById('textinputid');
  const btn = document.getElementById('buttonid');

  // Check input value, change bg color and validate to enable button
  input.addEventListener('input', e => {
    input.value.toLowerCase() === 'electric mucus' ? btn.style.backgroundColor = "lightgreen" : btn.style.backgroundColor = input.value;
    input.value.toLowerCase() === 'electric mucus' ? btn.disabled = false : btn.disabled = true;
  });

})();
