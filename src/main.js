
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";



export const galleryList = document.querySelector(".gallery");
export let query = "";
const input = document.querySelector("input");
const button = document.querySelector("button");


input.addEventListener("input", event => {
    query = input.value.trim();
    galleryList.innerHTML = "";
});

button.addEventListener("click", event => {
    if (query) {
        fetchImages(query)
            .then(data => renderImages(data))
            .catch(error => {
                console.log(error);
                iziToast.error({
                    title: 'Error',
                    message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
                    position: 'topRight',
                });

            });
    }
});



