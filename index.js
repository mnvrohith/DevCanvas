document.getElementById("html-play").addEventListener("click", function(){
    var htmlCode = document.getElementById("html-code").value;
    var output = document.getElementById("output");
    output.contentDocument.body.innerHTML= htmlCode;
   
});
document.getElementById("css-play").addEventListener("click",function (){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    var output = document.getElementById("output");
    output.contentDocument.body.innerHTML="<style>"+cssCode+"</style>";
});
document.getElementById("js-play").addEventListener("click",function (){
    var htmlCode = document.getElementById("html-code").value;
    var cssCode = document.getElementById("css-code").value;
    var jsCode = document.getElementById("js-code").value;
    var output = document.getElementById("output");
    output.contentDocument.body.innerHTML= htmlCode+"<style>" +cssCode +"</style>";
    output.contentWindow.eval(jsCode);
});
document.getElementById("output-play").addEventListener("click",function (){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML= htmlCode+"<style>" +cssCode +"</style>";
    output.contentWindow.eval(jsCode);
});
