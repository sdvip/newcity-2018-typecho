"use strict";var city=new Object;document.addEventListener("DOMContentLoaded",function(){function e(e){var t=e.querySelector(".post-ex"),o=e.querySelector(".more");o&&(o.style.top=o.offsetTop+"px",o.style.bottom="initial"),e.hco?(t.innerHTML="",e.hco=!1):(new Hco(t,"blog",e.getAttribute("cid")),e.hco=!0)}function t(){city.pagenav=document.querySelector(".page-navigator"),city.pagenav&&(city.pagenav.next=city.pagenav.querySelector(".next>a"));for(var e=document.querySelectorAll(".more>a"),t=0;t<e.length;t++)!function(t){e[t].u||(location.host&&e[t].href.indexOf(location.host)>-1?e[t].u=e[t].href.split(location.host)[1]:e[t].u=e[t].href,e[t].href="JavaScript:;",e[t].parentNode.parentNode.className="post-con small\n",e[t].parentNode.parentNode.onclick=function(){var n=this;this.querySelector(".con").innerHTML=city.loadehtml,this.querySelector(".more").style.display="none",o(e[t],function(){n.className="post-con"})})}(t);for(var c=document.querySelectorAll(".page-navigator>li>a"),t=0;t<c.length;t++)location.host&&c[t].href.indexOf(location.host)>-1?c[t].u=c[t].href.split(location.host)[1]:c[t].u=c[t].href,c[t].href="JavaScript:;",c[t].onclick=function(){n(this,!0)}}function o(e,t){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var n=o.responseText,a=e.parentNode.parentNode.querySelector(".post-con-main>.con");a&&(a.innerHTML=n,c(a.parentNode.querySelector(".title>a").innerText+"--"+optionstitle,e.u),t&&t()),e.style.display="none"}},o.open("GET",e.u+"?ajax=true",!0),o.send()}function n(e,o,n){city.loadele.style.display="block",e.u||(e.u=e.href);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var r=a.responseText;if(o)document.querySelector(".container").innerHTML=r,t(),c("第"+e.innerText+"页--"+optionstitle,e.u);else{city.pagenav.parentNode.removeChild(city.pagenav);var i=document.createElement("div");i.innerHTML=r;for(var l=i.children,s=0,d=l.length;s<d;s++)document.querySelector(".container").appendChild(l[0]);t(),c("第"+city.pagenav.querySelector(".current>a").innerText+"页--"+optionstitle,e.u)}city.isload=!1,city.loadele.style.display="none",n&&n()}},a.open("GET",e.u+"?ajax=true",!0),a.send()}function c(e,t){var o={};try{history.pushState(o,e,t)}catch(e){console.log("你的浏览器过时了！")}document.title=e}city.copy=document.querySelector(".h-copy"),city.copy.t=city.copy.querySelector("textarea"),city.share=document.querySelector(".h-share"),city.share.wb=city.share.querySelector(".wb"),city.share.qr=city.share.querySelector(".qr"),city.loadehtml='<div class="cssload-wraper">\n\t<div class="cssload-dots"></div>\n</div>',city.loadele=document.querySelector(".isload"),document.querySelector(".container").addEventListener("click",function(t){var o=t.target;if("SPAN"==o.nodeName&&(o=o.parentNode),"use"==o.nodeName&&(o=o.parentNode),"svg"==o.nodeName&&(o=o.parentNode),o.classList.contains("pointer"))if(o.classList.contains("post-bottom-comnum"))e(o.parentNode.parentNode);else if(o.classList.contains("post-bottom-love"))o.love||(o.love=!0,o.querySelector("span").innerHTML="已喜欢",uplove(o.parentNode.parentNode.pid),fetch(city.api+"love?id="+o.parentNode.parentNode.pid).then(function(e){console.log(e)}));else if(o.classList.contains("post-bottom-share")){var n=o.parentNode.parentNode.querySelector(".title>a").href,c="疯狂减肥带-"+o.parentNode.parentNode.querySelector(".title>a").innerText;city.copy.t.value=n,city.share.wb.href="http://s.share.baidu.com/?click=1&url="+n+"&uid=0&to=tsina&type=text&pic=&title="+c+"&key=&desc=&comment=&relateUid=&searchPic=0&sign=on&l=1c1n207cd1c1n208bl1c1n20ste&linkid=jbdfo64647k&firstime=1513671457197",city.share.qr.src="https://app.haotown.cn/qr/?url="+n+"&&size=3",city.share.style.top=t.clientY+document.documentElement.scrollTop-20+"px",city.share.style.left=t.clientX+document.documentElement.scrollLeft-20+"px",city.share.style.display="block"}}),srollopen&&document.addEventListener("scroll",function(){document.documentElement.clientHeight+document.documentElement.scrollTop>=document.body.offsetHeight-10&&!city.isload&&city.pagenav&&city.pagenav.next&&(console.log("加载下一页"),city.isload=!0,n(city.pagenav.next,!1))}),city.copy.t.addEventListener("click",function(){this.select(),document.execCommand("Copy")}),city.share.onmouseleave=function(){this.style.display="none"},t(),document.documentElement.scrollTop=0,document.querySelector(".nav-btn").addEventListener("click",function(){var e=document.querySelector(".nav");e.a?(e.a=!1,e.className="nav"):(e.a=!0,e.className="nav phone-nav")}),document.querySelector(".phone-show-right").addEventListener("click",function(){document.querySelector(".nav-btn").click();var e=document.querySelector(".container-right");e.a?(e.a=!1,e.style.right="-100%",e.t=setTimeout(function(){e.style.display="none"},1e3)):(e.a=!0,e.style.display="block",clearTimeout(e.t),setTimeout(function(){e.style.right="0"},0))})});