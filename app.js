document.addEventListener('DOMContentLoaded', () => {

  // Turn counter
  let turnCounter = 1;

  let div = document.createElement('div');
  let h1 = document.createElement('h1');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let h4 = document.createElement('h4');
  let h5 = document.createElement('h5');
  let h6 = document.createElement('h6');

  // Querry selector
  let button = document.querySelector('.main-btn')




  let h1Txt = document.createTextNode('This is an h1');
  let h2Txt = document.createTextNode('This is an h2');
  let h3Txt = document.createTextNode('This is an h3');
  let h4Txt = document.createTextNode('This is an h4');
  let h5Txt = document.createTextNode('This is an h5');
  let h6Txt = document.createTextNode('This is an h6');







  h1.className = 'h1';
  h2.className = 'h2';
  h3.className = 'h3';
  h4.className = 'h4';
  h5.className = 'h5';
  h6.className = 'h6';
  div.className = 'header-container';



  h1.appendChild(h1Txt);
  div.appendChild(h1);
  document.body.appendChild(div);

  h2.appendChild(h2Txt);
  div.appendChild(h2);
  document.body.appendChild(div);

  h3.appendChild(h3Txt);
  div.appendChild(h3);
  document.body.appendChild(div);

  h4.appendChild(h4Txt);
  div.appendChild(h4);
  document.body.appendChild(div);

  h5.appendChild(h5Txt);
  div.appendChild(h5);
  document.body.appendChild(div);

  h6.appendChild(h6Txt);
  div.appendChild(h6);
  document.body.appendChild(div);





  var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'aqua', 'brown'];

  // Event listener
  div.addEventListener('dblclick', (e) => {
    e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
  })



  button.addEventListener('click', () => {

    var entry = document.createElement('li');
    entry.id = turnCounter
    entry.appendChild(document.createTextNode(`This is list item ${turnCounter}`));
    document.body.appendChild(entry);
    turnCounter++

    entry.addEventListener('click', function () {
      entry.style.color = colors[Math.floor(Math.random() * colors.length)];
    })
    
    entry.addEventListener('dblclick', () => {

      entry.parentNode.removeChild(entry);
    })
  })
})

