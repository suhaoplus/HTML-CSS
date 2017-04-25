
function showPic(mypic){
    var source=mypic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text=mypic.getAttribute("title");
    var description=document.getElementById("description")
    description.firstChild.nodeValue=text;
        
}
