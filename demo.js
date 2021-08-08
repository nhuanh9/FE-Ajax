function loadLayout() {
    let str = "<h1>Top</h1>"
                +"<div id='menu'>Mid</div>"
                +"<h1>Footter</h1>"
    document.getElementById('content').innerHTML = str;
}
function loadMenu() {
    let str = "<h1>Menu</h1>"
    document.getElementById('menu').innerHTML = str;
}
