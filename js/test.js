window.onclick = function(e) {
	let el = e.srcElement;
    var parent = el.parentNode;
    if(parent.className && parent.className.includes("menu")){
    	var elText = el.textContent;
        console.Log(elText);
    } else if(el.closest(".nav-menu") && el.nodeName === "A") {
    	var elText = el.textContent;
        console.Log(elText);
    }
}