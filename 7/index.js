let input = 8005551212

function formatPhoneNumber(input) {
    input = input.toString();
    let formattedNumber = "(" + input.substring(0, 3) + ")" + input.substring(3, 6) + "-" + input.substring(6, 10);
    return formattedNumber;
}

console.log(formatPhoneNumber(input));