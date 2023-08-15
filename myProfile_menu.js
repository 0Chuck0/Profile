document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("menu-button").addEventListener("click",showmenu);
    document.getElementById("close-menu").addEventListener("click",closemenu);
    function showmenu()
    {
        const menu = document.querySelector("section.menu");
        menu.style.height="100%";
    }

    function closemenu()
    {
        const menu= document.querySelector("section.menu");
        menu.style.height="0";
    }


    function clickLink()
    {
        const menuItems = document.querySelectorAll("section.menu  nav  ul > li");
        for(let item of menuItems)
        {
            item.addEventListener("click",closemenu)
        }
    }
    
    clickLink();


})
