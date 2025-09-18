const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')
    
    if(Height === '' || Height < 0 || isNaN(Height)){
        result.innerHTML = `Please give a valid height ${Height}`;

    } else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `Please give a valid height ${Weight}`;
    } else{
        const bmi = (Weight/ ((Height*Height)/10000)).toFixed(2)
        // Inside your JavaScript logic
    if(bmi <= 18.6){
    result.innerHTML = `<span class="underweight">your BMI is ${bmi}. you are under weight</span>`;
   } else if(bmi >= 18.6 && bmi <= 24.9 ){
    result.innerHTML = `<span class="normal">your BMI is ${bmi}. you are in normal range </span>`;
   } else {
    result.innerHTML = `<span class="overweight">your BMI is ${bmi}. you are over weight </span>`;
   }
        
        
    }

    
})