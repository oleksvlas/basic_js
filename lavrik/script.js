window.onload = (e) => {
    // посмотреть информацию о событию
    document.body.onclick = (e) => {
        console.log(e);
    };
    //подвесить один обработчик на событие
    document.body.onclick = (e) => {
        console.log(2);
    };
    //подвесить сколько угодно обработчиков на событие
    document.body.addEventListener('click', ()=>{
        console.log(3);
    });
    document.body.addEventListener('click', ()=>{
        console.log(3);
    });
};