function arraysExamples() {

    const arrayMaker = function (start, end, step) {
        const result = [];
        let value = start;
        for (let index = 0; value <= end; index++) {
            
            if (result.length !== 0) {
                value = value + step;
            }
            
            result[index] = value;
        }
        return result;
    }

    console.log(arrayMaker(1, 9, 3));
}

arraysExamples();