let binaryInput = document.getElementById("binaryInput");
let decimalOutput = document.getElementById("decimalOutput");
let errorText = document.getElementById("error_text");

const pattern = {
    binary: /^[0-1]{1,8}$/
};


binaryInput.addEventListener("keyup", (e) => {
    validate(pattern.binary, binaryInput.value);
});



// Validate the input then convert it to decimal
const validate = (regex, bin) => {
    if (regex.test(bin) === true) {
        valid();
        let decimal = parseInt(bin, 2);
        decimalOutput.value = decimal;
    } else {
        invalid();
    }
}

// Add invalid class to input area
function invalid() {
    binaryInput.classList.add("invalid");
    errorText.style.display = "";
}

function valid() {
    binaryInput.classList.remove("invalid");
    errorText.style.display = "none";
}
