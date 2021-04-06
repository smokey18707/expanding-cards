// Bringing in all the panels 
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Removing all active classes 
        removeActiveClasses();

        // Adding the active class to the clicked element
        panel.classList.add("active");
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}