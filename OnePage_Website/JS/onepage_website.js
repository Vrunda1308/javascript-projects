function openModal(img) {
    
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");

    modal.style.display = "block";
    modalImg.src = img.src.replace('_thumb', '');

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}
