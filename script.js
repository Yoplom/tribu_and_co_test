document.addEventListener("DOMContentLoaded", function() {
    
    // document.querySelector('h1').style.color = "blue";
    // document.getElementsByTagName('h1').style.color = "blue";

    // console.log("50" == 50);    console.log("50" === 50);


    const bigTitle = document.querySelector('h1');
    bigTitle.addEventListener('click', function(event) {
        event.preventDefault();
        // // console.log(event.target);    
        // bigTitle.style.color = "green";
        // bigTitle.classList.toggle('overlay');
    });

});