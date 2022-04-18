let binaryInput = document.getElementById("binaryInput");
let decimalOutput = document.getElementById("decimalOutput");

const pattern = {
    binary: /^[0-1]{1,8}$/
};


binaryInput.addEventListener("keyup", (e) => {
    validate(pattern.binary, binaryInput.value);
})



// Validate the input then convert it to decimal
const validate = (regex, bin) => {
    if (regex.test(bin) === true) {
        let decimal = parseInt(bin, 2);
        decimalOutput.value = decimal;
    } else {
        console.log("That is not a binary number");
    }
}


// convert to binary





