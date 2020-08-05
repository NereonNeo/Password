let arr2 = [1,2,3,4,5,6,7,8,9,0];
let arr3 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];
let arr4 = ['A','B','C','D','E','F','G','H','i','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
let arr5 = ['!','@','#','$','%','&','*','(',')','=','+'];

const input = document.querySelector('#param-1')
      span = document.querySelector('#password-length')
input.addEventListener('input',()=>{
    span.innerHTML = input.value
    console.log(input.value);
})
generatePath() // запуск при старте
document.querySelector('.btn').onclick = generatePath;

function generatePath(){
    let result = [];
    if(document.querySelector('#param-2').checked){
        // включины ли цифры
        result = result.concat(arr2)
    }
    if(document.querySelector('#param-3').checked){
        // включины ли Строчные буквы
        result = result.concat(arr3)
    }
    if(document.querySelector('#param-4').checked){
        //  включины ли Прописные буквы
        result = result.concat(arr4)
    }
    if(document.querySelector('#param-5').checked){
        // включины ли спец символы
        result = result.concat(arr5)
    }
    result.sort(compareRandom) // перемешиваю массив
    // console.log(result);
    document.querySelector('#out').innerHTML = ''; // очищаю
    for(let k = 0; k < 3; k++){
        let pass = ''; // будуший пароль
        let j = parseInt( document.querySelector('#param-1').value) // длина пароля 
        for(let i= 0 ; i < j; i++){
            // цикл по длине пароля 
            // выбераю случайное знасение из массива result
            pass += result[randomInteger(0,result.length-1)]
        }
        // console.log(pass);
        document.querySelector('#out').innerHTML += '<p  class="border-bottom" >'+ pass +'</p>' // вывожу
    }
}

function compareRandom(a,b){
    return Math.random() - 0.5
}
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
