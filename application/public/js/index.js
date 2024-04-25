const photosContainer = document.getElementById('photos-container');
const numPhotos = document.getElementById('num-photos');

fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
    .then(response => response.json())
    .then(data => {
        // Show the number of photos being displayed
        numPhotos.textContent = `Showing ${data.length} photos`;

        // Display each photo and title in a separate div
        data.forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-container');
            photoDiv.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;

            // Add the click event to fade out the photo and remove it from the DOM
            photoDiv.addEventListener('click', () => {
                photoDiv.style.opacity = '0';
                setTimeout(() => {
                    photosContainer.removeChild(photoDiv);
                    numPhotos.textContent = `Showing ${photosContainer.childElementCount} photos`;
                }, 1000);
            });

            photosContainer.appendChild(photoDiv);
        });
    })
    .catch(error => console.error(error));
