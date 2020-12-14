$(document).ready(function() {
    // Function to add leading zeroes
    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    // Variable to store the current image index
    var currentIdx = 1; 
    var max = 5; // Qtd of images in the folder

    setInterval(function() {
        // Reset the index when overflow
        if(currentIdx > max) currentIdx = 1;
        // Change the background
        $('body').css({'background-image' : 'url('+'images/'+ pad(currentIdx,3) + '.jpg)',
      'background-repeat': 'no-repeat'});
        currentIdx ++;
    }, 1000); // 5000ms == 5 seconds
});