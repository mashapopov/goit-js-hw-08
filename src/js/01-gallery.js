// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

const galleryImgs = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" 
      href="${original}"><img class="gallery__image" 
      src="${preview}" 
      alt="${description}" /></a>`;
    })
    .join("");
};

const photos = galleryImgs(galleryItems);
gallery.insertAdjacentHTML("beforeend", photos);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

