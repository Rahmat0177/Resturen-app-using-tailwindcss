const menuToggle = (ele) => {

    if(document.getElementById('menuItems').classList.contains('-translate-x-full'))
    {
        document.getElementById('menuItems').classList.remove('-translate-x-full');
        document.getElementById("hiddenMenuButton").classList.remove("hidden");
    } else{
        document.getElementById('menuItems').classList.add('-translate-x-full');
        document.getElementById("hiddenMenuButton").classList.add("hidden");

    }
}