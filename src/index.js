const numbers = [1, 2, 3];

export default (numbers) => {
    return numbers.reduce((acc, num) => {
        return acc = acc + num;
    }, 0);
};