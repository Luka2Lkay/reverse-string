const btn = document.getElementById('submit-btn');
const reversedText = document.getElementById('reversed');
const myForm = document.getElementById("my-form");



const reverse = (str) =>{
    let myString = '';

    for(let i= str.length-1; i>=0 ;i--){
        myString += str[i];
    }
    return myString;
}

myForm.addEventListener('submit', e =>{
    e.preventDefault();
    reversedText.textContent = '';
    appendText();
    myForm.reset();
    })

const appendText = () => {
    const str = document.getElementById('word').value;
    const text = document.createElement('h3');
    text.textContent = reverse(str);
    reversedText.appendChild(text)
    }