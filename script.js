function showContent(id){
    var hide=document.getElementsByClassName("content");
    for(var i=0;i<hide.length-1;i++){
        hide[i].style.display="none";
    }
    var show=document.getElementById(id);
    if(show){
        show.style.display="block";
    }
    var hideHover=document.querySelectorAll("#navLinkBox a");
    for(var i=0;i<hideHover.length;i++){
        hideHover[i].classList.remove('active');
    }
    var showHover=document.querySelector('#navLinkBox a[href="#'+id+'"]');
    showHover.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function(){
    var page=window.location.hash.substring(1);
    if(page){
        showContent(page);
    }
    else{
        showContent("home");
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById("navButton");
    const mobNav = document.getElementById("mobNav");

    function hideMenu() {
        mobNav.classList.remove("visible");
    }
    navButton.addEventListener("click", (event) => {
        mobNav.classList.toggle("visible");
        event.stopPropagation();
    });
    document.addEventListener("click", (event) => {
        if (!mobNav.contains(event.target) && event.target !== navButton) {
            mobNav.classList.remove("visible");
        }
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                hideMenu();
            }
        });
    }, { threshold: 1.0 });
    observer.observe(navButton);
});



    