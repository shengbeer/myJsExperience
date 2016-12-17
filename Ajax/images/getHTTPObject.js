function getHTTPObject () {
    if (typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function () {
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
             catch (e){}
             try {return new ActiveXObject("Msxml2.XMLHTTP");}
             catch (e){}
             return false;
        }
    }
        return new XMLHttpRequest();

}
/*通过对象检测技术检测XMLHttpRequest对象是否存在*,处理Ajax在不同浏览器兼容的问题**/