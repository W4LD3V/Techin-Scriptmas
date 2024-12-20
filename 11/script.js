document.addEventListener('DOMContentLoaded', () => {
    // Select the light bulb and tree
    const lightBulb = document.getElementById('lightBulb');
    const christmasTree = document.getElementById('christmasTree');

    // Add click event listener to the light bulb
    lightBulb.addEventListener('click', () => {
        // Toggle the 'lit-up' class on the tree
        christmasTree.classList.toggle('lit-up');
    });
});
