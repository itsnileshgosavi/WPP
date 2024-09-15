// Function to add a double-click event listener to an element
function addDoubleClickListener(elementId, action) {
    // Get the element by its ID
    var element = document.getElementById(elementId);
    // Check if the element exists
    if (element) {
        // Add a double-click event listener to the element
        element.addEventListener('dblclick', action);
    }
    else {
        console.error("Element with ID ".concat(elementId, " not found."));
    }
}
// Specific action to perform on double-click
var handleDoubleClick = function () {
    alert('Double-clicked!');
};
addDoubleClickListener('myElement', handleDoubleClick);
