fetch('illusts.json')
    .then(response => response.json())
    .then(illusts => {
        const galleryContainer = document.querySelector('.gallery-container');

        illusts.forEach(tagData => {
            const tagGallery = document.createElement('div');
            tagGallery.classList.add('tag-gallery');

            const tagHeading = document.createElement('h2');
            tagHeading.textContent = tagData.tag;
            tagGallery.appendChild(tagHeading);

            const imageGallery = document.createElement('div');
            imageGallery.classList.add('row');

            tagData.images.forEach(imageData => {
                const imageCol = document.createElement('div');
                imageCol.classList.add('column', 'column-33');

                const imageEl = document.createElement('img');
                imageEl.src = `illusts/${imageData.name}`;
                imageEl.alt = imageData.name;
                imageCol.appendChild(imageEl);

                const titleEl = document.createElement('h3');
                titleEl.textContent = imageData.title;
                imageCol.appendChild(titleEl);

                const descriptionEl = document.createElement('p');
                descriptionEl.textContent = imageData.description;
                imageCol.appendChild(descriptionEl);

                imageGallery.appendChild(imageCol);
            });

            tagGallery.appendChild(imageGallery);
            galleryContainer.appendChild(tagGallery);
        });
    })
    .catch(err => console.error(err));