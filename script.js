
console.log("Age Calculator connected");

let birthYearInput = document.getElementById("birthyear");
let button = document.getElementById("calculate-btn");
let result = document.getElementById("result");


button.addEventListener("click", function () {

    let birthYear = Number(birthYearInput.value);

    let currentYear = new Date().getFullYear();


    
    if (!birthYearInput.value) {

        result.textContent = "Please enter your birth year.";

        result.classList.add("show");

        return;
    }


    if (
        birthYear < 1900 ||
        birthYear > currentYear
    ) {

        result.textContent =
            `Please enter a year between 1900 and ${currentYear}.`;

        result.classList.add("show");

        return;
    }


    
    let age = currentYear - birthYear;


    result.textContent =
        `🎉 Your age is ${age} years old.`;

    result.classList.remove("show");


    void result.offsetWidth;

    result.classList.add("show");
});

birthYearInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        button.click();
    }

});

