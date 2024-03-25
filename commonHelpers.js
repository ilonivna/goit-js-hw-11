import{S as u,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(){const s=new URLSearchParams({key:"43047953-84179c8300fd9f33658a206cf",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});i.innerHTML='<span class="loader"></span>';const t=`https://pixabay.com/api/?${s}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function p(s){i.innerHTML="";const t=s.hits;t.length===0&&h.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});const o=t.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");i.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt"}).refresh()}const d=new u(".gallery a",{});d.refresh();const i=document.querySelector(".gallery");let l="";const c=document.querySelector("input"),g=document.querySelector("button");c.addEventListener("input",s=>{l=c.value.trim(),i.innerHTML=""});g.addEventListener("click",s=>{l&&f().then(t=>p(t)).catch(t=>{console.log(t),h.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
