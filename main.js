const count = document.querySelector('#How-much');
const length = document.querySelector('#How-long');
const ul = document.querySelector('ul');
const passwordLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


const add = () => {
    // long alerts
    if (count.value > 17) return alert('Max count = 17');
    if (count.value < 1) return alert('Min count = 1');
    if (length.value > 32) return alert('Max long = 32');
    if (length.value < 1) return alert('Min long = 1');
    // password count
    for (let i = 0; i < count.value; i++) {
        let li = document.createElement('li');
        // password value
        for (let i = 0; i < length.value; i++) {
            li.innerHTML += passwordLetters[Math.floor(Math.random() * (passwordLetters.length))]
        }
        ul.appendChild(li);
    }
}


document.querySelector('#button').addEventListener('click', (e) => {
    e.preventDefault();
    ul.innerHTML = '';
    add();
})