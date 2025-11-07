// External JS demonstration
console.log("JavaScript is working!");

// When user clicks the "Run External Script" button
document.getElementById("externalBtn").addEventListener("click", function () {
    alert("This message is printed through external JS!");
});

// Variables and loops demonstration
document.getElementById("consoleDemo").addEventListener("click", function () {
    console.clear();

    // Try changing these variables!
    console.log("Variables");
    const pi = 3.14159; // Don't change this one
    let username = "user";
    let num = 10;

    console.log("Const pi =", pi);
    console.log("Let username =", username);

    console.log("\nLoop Example");
    for (let i = 0; i < 5; i++) {
        console.log("Iteration:", i);
    }

    console.log("\nFunction Example");
    function greet() {
        console.log("Hello QWeb!");
    }
    // Call the function
    greet();

    console.log("\nArrow Function Example");
    const greetArrow = (name) => {
        console.log("Hello " + name + "!");
    };
    greetArrow(username);
});

// DOM Manipulation example
const button = document.getElementById("changeBtn");
button.addEventListener("click", function () {
    const textElement = document.getElementById("change-text");
    textElement.textContent = "Button was clicked!";

    // Changes background colour of parent container
    const container = document.getElementById("parentContainer");
    container.style.backgroundColor = "lightblue";
});
