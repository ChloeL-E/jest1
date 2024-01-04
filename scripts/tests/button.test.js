const { TestScheduler } = require("jest");
const buttonClick = require("../button.js");

beforeEach(() => {
    document.body.innerHTML = "<p id ='par'></p>";
});

describe("DOM tests", () => {
    TestScheduler("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});