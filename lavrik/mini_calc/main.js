window.onload = () => {
    document.querySelector('.sum').addEventListener('click', () => {
        let a = Number (document.querySelector('.numb1').value);
     let b = Number (document.querySelector('.numb2').value);

       document.querySelector('.result').innerHTML = a + b;
    });
};