const inputFirst = document.getElementById('family');
const inputSecond = document.getElementById('numberForSeat');
const submit = document.getElementById('submit');
const templateHasil = document.getElementById('hasil');


// function to getMinimumBus
function getMinimumBus() {
    const firstValue = parseInt(inputFirst.value);
    const secondValue = inputSecond.value;
    const emptyData = "";
    const reducer = (acc, currentValue) => {return acc + currentValue}
    // merubah second input menjadi array
    const secondArr = secondValue.split(" ");
    // cek apakah array terdapat data space kosong dalam value
    const secondArrFilter = secondArr.filter(data => emptyData !== data).map(itemFilter => {return parseInt(itemFilter)});
    // cek apakah secondArr.length sama dengan data dari firstValue 
    if(secondArrFilter.length === firstValue){
        const jumlahOrangInBus = 4
        // mereduce arr agar mendapatkan minimal bus yang didapatkan
        const totalOrang = secondArrFilter.reduce(reducer);
        const minimalBus = Math.floor(totalOrang/jumlahOrangInBus);
        templateHasil.innerHTML = `Minimum bus required is : ${minimalBus}`;
    } else{
        templateHasil.innerHTML = 'Input must be equal with count of family';
    }

}

// function submit on click
submit.addEventListener('click', getMinimumBus);
