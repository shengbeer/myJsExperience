/**
 * Created by Administrator on 2016/12/7.
 */
function addLoadEvent(func) {
    var oldonload=window.onload;
    if (typeof  window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function () {
             oldonload();
            func();
        }
    }
}
/**function showPic(wherePic) {
    var pic_source=wherePic.getAttribute("href");
    var zhanwei=document.getElementById("zhanwei");
    zhanwei.setAttribute("src",pic_source);
    var ti_source=wherePic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=ti_source;
}
 function popUp(winURL) {
    window.open(winURL,"popUp","height=220,width=320");
}
window.onload=prepareLinks;
function prepareLinks() {
    var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if (links[i].getAttribute("class")=="popUp"){
            links[i].onclick=function(){
               showPic(this);
                return false;
            }

        }
    }
}
function preparePhoto() {
    var img=document.createElement("img");
    img.setAttribute("id","photo");
    img.setAttribute("src","images/placeholder.gif");
    img.setAttribute("alt","this is a host photo");
    var txtp=document.createElement("p");
    txtp.setAttribute("id","txt1");
    var txt=document.createTextNode("txt");
    txtp.appendChild(txt);
    document.body.appendChild(txtp);
    document.body.appendChild(img);
    var gallery=document.getElementById("image");
    gallery.parentNode.insertBefore(img,gallery);
    gallery.parentNode.insertBefore(txtp,gallery);
}
var oldonload=window.onload;
addLoadEvent(prepareLinks);
addLoadEvent(preparePhoto);
**/
