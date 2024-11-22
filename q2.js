// Selection Sort

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let lowestValue = array[i];
        let indexOfLowesetValue = i;

        for (let j = i; j < array.length; j++) {
            if (array[j] < lowestValue) {
                lowestValue = array[j];
                indexOfLowesetValue = j;
            }
        }

        let temp = array[i];
        array[i] = array[indexOfLowesetValue];
        array[indexOfLowesetValue] = temp;
    }
    return array;
};

console.log(selectionSort([29, 10, 14, 37, 14]));