function showAlbum() {
    var album = document.getElementById('show-page-album');
    album.style.display = 'flex';
}

function showPhoto(photoUrl) {
    var mainPhoto = document.querySelector('.show-page-main-photo img');
    mainPhoto.src = photoUrl;
    var albumPhotos = document.querySelectorAll('show-page-album img');
    albumPhotos.forEach(function(photo) {
        photo.classList.remove('clicked');
    });
}

function toggleButton(clickedButton) {
    var buttons = document.querySelectorAll('.show-page-toggle-btn');
    buttons.forEach(function(button, index) {
        if (index + 1 === clickedButton) {
            button.classList.add('darken');
            
        } else {
            button.classList.remove('darken');
        }
    });
}
