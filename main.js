/////////////JS//////////////////
let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");

burger.addEventListener("click", function(){
    burger.classList.toggle('active');
    if (burger.classList[1] == 'active') {
        navbarList.style.display = "block";
    } else {
        navbarList.style.display = "none";
    }  
});

/////////////JQuery///////////////

// $(document).ready(function () {
//     $('.navbar__btn').click(function() {
//         $(this).toggleClass('active');
//         $('.navbar__list').slideToggle(400);
//     });
// });