document.addEventListener('DOMContentLoaded', () => {
    const gnomes = document.querySelectorAll('img');
    const bench = document.getElementById('div1');

    gnomes.forEach(gnome => {
        gnome.draggable = true;
        gnome.addEventListener('dragstart', (event) => {
            const relativePath = gnome.getAttribute('src'); 
            event.dataTransfer.setData('text/plain', relativePath);
            event.dataTransfer.setData('id', gnome.id);
        });
    });

    bench.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    bench.addEventListener('drop', (event) => {
        event.preventDefault();
        const gnomeSrc = event.dataTransfer.getData('text/plain');
        const gnomeId = event.dataTransfer.getData('id');

        console.log("Dropping gnome with src:", gnomeSrc, "and ID:", gnomeId);

        if (gnomeSrc) {
            const gnome = document.createElement('img');
            gnome.src = gnomeSrc;
            gnome.alt = "Dropped Gnome";
            gnome.style.margin = "10px";
            bench.appendChild(gnome); 

            const originalGnome = document.getElementById(gnomeId);
            if (originalGnome) {
                originalGnome.parentNode.removeChild(originalGnome);
            }
        } else {
            console.error("No valid src found for dropped gnome.");
        }
    });
});
