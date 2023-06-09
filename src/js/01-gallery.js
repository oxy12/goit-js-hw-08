
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/01-gallery.css';

const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
  })
  .join('');

const alleryContainerEl = document.querySelector('.gallery');
alleryContainerEl.insertAdjacentHTML('beforeend', createItemsMarkup);
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',

});


//console.log(galleryItems);

//checking