document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbs-input').addEventListener('input', e => {
    document.getElementById('output').style.visibility = 'visible';

    // Get the measurement the user wants i.e. kg, lbs, oz
    const measurement = document.getElementById('weight').value;
    // Get the value the user input
    const weight = e.target.value;

    if (measurement === 'lbs') {
        document.getElementById('kg-output').innerHTML = weight / 2.2046;
        document.getElementById('gram-output').innerHTML = weight / 0.0022046;
        document.getElementById('oz-output').innerHTML = weight * 16;
        document.getElementById('lb-output').innerHTML = weight;
    } else if (measurement === 'kg') {
        document.getElementById('kg-output').innerHTML = weight;
        document.getElementById('gram-output').innerHTML = weight * 1000;
        document.getElementById('oz-output').innerHTML = weight * 35.274;
        document.getElementById('lb-output').innerHTML = weight * 2.20462;
    } else if (measurement === 'grams'){
        document.getElementById('kg-output').innerHTML = weight / 1000;
        document.getElementById('gram-output').innerHTML = weight;
        document.getElementById('oz-output').innerHTML = weight * 0.035274;
        document.getElementById('lb-output').innerHTML = weight * 0.00220462;
    } else {
        document.getElementById('kg-output').innerHTML = weight * 0.0283495;
        document.getElementById('gram-output').innerHTML = weight * 28.3495;
        document.getElementById('oz-output').innerHTML = weight;
        document.getElementById('lb-output').innerHTML = weight * 0.06249994901875;
    }
});