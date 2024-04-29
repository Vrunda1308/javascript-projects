document.addEventListener('DOMContentLoaded', function () {
    var colors = ['#f4f4f9', '#e1e5ee', '#ccd1e4', '#b8bdda'];
    var currentColorIndex = 0;

    function changeBackground() {

        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }


    setInterval(changeBackground, 2000);
});
