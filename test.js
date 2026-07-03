const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let currentLikes = 0;
let isLiked = false;

likeButton.addEventListener('click', () => {
   isLiked =! isLiked;

   if (isLiked) {
        currentLikes++;
        likeButton.classList.add('liked');
   } else {
        currentLikes--;
        likeButton.classList.remove('liked');
   }
   likeCount.textContent = currentLikes;
});