var check = 'index.html';
check = document.querySelector(".check");
check.addEventListener('click', idioma);
function idioma()
{
    let id = check.checked;
    if (id == true) {
        location.href="en/index.html";
    }
    else 
    {
        location.href="../";
    }
}