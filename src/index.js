module.exports = function toReadable(number) {
    const numbers1_19 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const numbers20_90 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let result = [];

    if (number < 20) {
        return numbers1_19[number];

    } else if (number < 100) {
        result.push(numbers20_90[Math.floor(number / 10)]);
        number % 10 === 0
            ? result.push("")
            : result.push(numbers1_19[number % 10]);
        return result.join(" ").trim();

    } else if (100 <= number <= 999) {

        if (number % 100 === 0) {
            result.push(`${numbers1_19[number.toString()[0]]} hundred`);
            return result.join(" ").trim();

        } else {
            result.push(`${numbers1_19[number.toString()[0]]} hundred`);
            result.push(toReadable(number % 100));
            return result.join(" ").trim();
        }
    }
};
