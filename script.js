window.onscroll = function() {
    const btn = document.getElementById("voltarAoTopo");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}