import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);


// -----створення розмітки--------

function createGalleryItemsMarkup(gallery){
    const gallaryMarkup = gallery.map(({preview, original, description}) => {
        return `
       <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }).join('');
    
    return gallaryMarkup;
};


const lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay: 250});
