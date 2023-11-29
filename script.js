document.addEventListener('DOMContentLoaded', function() {

    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let guessDSP = document.getElementById('guess');
    let lower = document.getElementById('lower');
    let correct = document.getElementById('correct');
    let higher = document.getElementById('higher');
    let reset = document.getElementById('restart');

    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    guessDSP.textContent = guess;

    lower.addEventListener('click', function() {
      max = guess - 1;
      guess = Math.floor(Math.random() * (max - min + 1)) + min;
      guessDSP.textContent = guess;
    });

    correct.addEventListener('click', function() {
      alert('Następnym razem postaraj się bardziej!');
    });

    higher.addEventListener('click', function() {
      min = guess + 1;
      guess = Math.floor(Math.random() * (max - min + 1)) + min;
      guessDSP.textContent = guess;
    });

    reset.addEventListener('click', function() {
      refreshPage();
    });

    function refreshPage() {
      window.location.reload();
    }
  });

  