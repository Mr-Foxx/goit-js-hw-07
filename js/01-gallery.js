import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

// -----створення розмітки--------

function createGalleryItemsMarkup(gallery){
    const gallaryMarkup = gallery.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
    />
  </a>
</div>
        `
    }).join('');
    
    return gallaryMarkup;
};


function onGalleryClick(event) {
    event.preventDefault();

    // перевіряю чи клік event.target був саме по картинці , якщо ні - вихожу
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    // якщо так запускаю бібліотеку
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
    // закриття зображення через escape
    galleryContainer.addEventListener('keydown',onClose);

    function onClose(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
    
}



