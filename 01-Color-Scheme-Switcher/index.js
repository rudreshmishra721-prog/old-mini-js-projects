const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(element){
        console.log(element);
        console.log(element.target);
        if (element.target.id === 'grey'){
            body.style.backgroundColor = element.target.id;
        }
        if (element.target.id === 'blue'){
            body.style.backgroundColor = element.target.id;
        }
        if (element.target.id === 'yellow'){
            body.style.backgroundColor = element.target.id;
        }
        if (element.target.id === 'olive'){
            body.style.backgroundColor = element.target.id;
        }
        if (element.target.id === 'purple'){
            body.style.backgroundColor = element.target.id;
        }

    })
});