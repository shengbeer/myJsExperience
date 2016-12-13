function getNewContent() {
    var request=getHTTPObject();
    if(request){
        request.open("GET","abc.txt");
        request.onreadystatechange =function () {
            if (request.readyState==4){
                alert("request Received");
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText)
                para.appendChild(txt);
                document.getElementById('New').appendChild(para);

            }
        }
        request.send();
    }else{
        alert('soory,your browser doesn\'t support XMLHttpRequest');
    }
    alert("function Done");
}
addLoadEvent(getNewContent);

