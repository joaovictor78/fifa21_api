export default (number: number | string): number => {
    if (typeof number === 'string') {
        if (number.length == 0) {
            return 0;
        } else if (!isNaN(parseInt(number))) {
            return parseInt(number);
        } else {
            throw Error('Invalid format parameter');
        }
    } else if (typeof number === 'number') {
        return number;
    }
};
