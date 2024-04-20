// Get the form and elements
const colorForm = document.getElementById('colorForm');
const heading = document.getElementById('heading');
const hello = document.getElementById('hello');

// Add event listener to the form for submit events
colorForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the color input value from the form
    const colorInput = document.getElementById('colorInput').value.trim();

    // Handle RGB input like "255,0,0" by prefixing "rgb(" and suffixing ")"
    const formattedColor = colorInput.includes(',') ? `rgb(${colorInput})` : colorInput;

    // Change the color of the heading and the word "Hello"
    heading.style.color = formattedColor;
    hello.style.color = formattedColor;
});
