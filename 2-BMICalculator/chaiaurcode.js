const form = document.querySelector('form');

const bmi = (weight / ((height * height) / 10000)).toFixed(2)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const text = document.querySelector('#text');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      text.innerHTML = `<span>( You are Under weight )</span>`;
    }else if(bmi <= 24.9 ) {
      text.innerHTML = `<span>( You are normal weight ) </span>`;
    }else if(bmi >= 24.9 ) {
      text.innerHTML = `<span>( You are  overweight ) </span>`;
    }
    results.innerHTML = `<span>${bmi}</span>`;
  }
  
});
