function arraysExamples() {

    const arrayMaker = function (start, end, step) {
        const result = [];
        let value = start;
        for (let index = 0; value <= end; index++) {

            if (result.length !== 0) {
                value = value + step;
            }
            if (value <= end) result[index] = value;
        }
        return result;
    }


    const sum = function (array) {
        let sum = 0;
        for (const element of array) {
            sum += element;
        }
        return sum;
    }

    const reverse = function (array) {
        const reversed = [];
        while (array.length !== 0) {
            let lastElem = array.pop();
            reversed.push(lastElem);
        }
        return reversed;
    }

    const array = arrayMaker(1, 10, 1);
    console.log(sum(array));
    console.log(reverse(array));
}

arraysExamples();