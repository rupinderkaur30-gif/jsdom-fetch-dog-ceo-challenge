console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
   fetchImg()
   fetchBreed()
});

function fetchImg(){
   const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
   fetch(imgUrl)
       .then(response => response.json())
       .then(json => addImageElements(json))
}

function addImageElements(json){
   const imgLink = json.message
   const imgDiv = document.querySelector('#dog-image-container')
       imgLink.forEach(link => {
       const img = document.createElement("img")
       img.src = link
       img.alt = "dog ceo image"
       imgDiv.appendChild(img)
   })
}

function fetchBreed(){
   return fetch('https://dog.ceo/api/breeds/list/all')
   .then(resp => resp.json())
   .then(results => {
     const breeds = Object.keys(results.message);
     addBreeds(breeds);
   });
}

function addBreeds(breeds) {
 const ul = document.getElementById("dog-breeds");
 breeds.forEach(breed => {
   const li = document.createElement("li");
   li.innerText = breed;
   ul.appendChild(li);
   li.addEventListener("click", function(event) {
     event.target.style.color = "blue";
   });
 });
}

