document.getElementById('toggleButton').addEventListener('click', function() {
    document.querySelector('.wrapper').style.display = 'none';
    document.getElementById('div2').style.display = 'block';
});

document.getElementById('backButton1').addEventListener('click', function() {
    document.querySelector('.wrapper').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
});

document.getElementById('backButton2').addEventListener('click', function() {
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('.school').style.display = 'none';
});
