let numberBox = document.querySelector("#numberBox");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
let initialValue = 0;
render(initialValue);
function render(value) {
    numberBox.value = value;
} 
plus.addEventListener('click', () => {
      let newValue = numberBox.value;
      newValue++;
      render(newValue);
     
    });
minus.addEventListener('click', () => {
    let newValue = numberBox.value;
      newValue--;
      render(newValue);
    });
reset.addEventListener('click', () => {
     let newValue = 0;
      render(newValue);
    });