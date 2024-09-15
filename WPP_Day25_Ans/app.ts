// Function to add a double-click event listener to an element
function addDoubleClickListener(elementId: string, action: () => void): void {
  // Get the element by its ID
  const element = document.getElementById(elementId);

  // Check if the element exists
  if (element) {
    // Add a double-click event listener to the element
    element.addEventListener('dblclick', action);
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}

// Specific action to perform on double-click
const handleDoubleClick = (): void => {
  alert('Double-clicked!');
};


addDoubleClickListener('myElement', handleDoubleClick);
