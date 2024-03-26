
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";



const galleryList = document.querySelector(".gallery");
let query;
const input = document.querySelector("input");
const button = document.querySelector("button");


input.addEventListener("input", () => {
    query = input.value.trim();
    galleryList.innerHTML = "";
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (query === "") {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search`,
      position: 'topRight',
    });
    galleryList.innerHTML = '';
  }
    if (query) {
       
        fetchImages(query)
            .then(data => renderImages(data.hits))
            .catch(error => {
                console.log(error);
                iziToast.error({
                    title: 'Error',
                    message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
                    position: 'topRight',
                });

            });
    }
    galleryList.innerHTML = "";
});



