const numbers = [1, 2, 3];

const sum = (numbers = [0]) => {
    return numbers.reduce((acc, num) => {
        return acc = acc + num;
    }, 0);
};

export default sum;