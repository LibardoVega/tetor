define(["dialogHelper","inputManager","connectionManager","layoutManager","focusManager","apphost","css!./style","html!./icons","iron-icon-set","paper-icon-button","paper-spinner"],function(e,t,i,a,n,o){function s(e,t,i){return t=t||{},t.type=t.type||"Primary","string"==typeof e?i.getScaledImageUrl(e,t):e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],i.getScaledImageUrl(e.Id,t)):"Primary"==t.type&&e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,i.getScaledImageUrl(e.AlbumId,t)):null}function r(e,t,i){return t=t||{},t.type=t.type||"Backdrop",t.width=null,delete t.width,t.maxWidth=null,delete t.maxWidth,t.maxHeight=null,delete t.maxHeight,t.height=null,delete t.height,t.maxWidth||t.width||t.maxHeight||t.height||(t.quality=100),e.BackdropImageTags&&e.BackdropImageTags.length?(t.tag=e.BackdropImageTags[0],i.getScaledImageUrl(e.Id,t)):null}function l(e,t){var a=i.getApiClient(e.ServerId),n={};return t||(n.maxWidth=screen.availWidth),e.BackdropImageTags&&e.BackdropImageTags.length?r(e,n,a):"Photo"==e.MediaType&&t?a.getUrl("Items/"+e.Id+"/Download",{api_key:a.accessToken()}):(n.type="Primary",s(e,n,a))}return function(i){function s(i){z=e.createDialog({exitAnimationDuration:i.interactive?400:800,size:"fullscreen",autoFocus:!1}),z.classList.add("slideshowDialog");var a="";if(i.interactive?(a+="<div>",a+='<div class="slideshowSwiperContainer"><div class="swiper-wrapper"></div></div>',a+='<paper-icon-button icon="slideshow:keyboard-arrow-left" class="btnSlideshowPrevious slideshowButton" tabindex="-1"></paper-icon-button>',a+='<paper-icon-button icon="slideshow:keyboard-arrow-right" class="btnSlideshowNext slideshowButton" tabindex="-1"></paper-icon-button>',a+='<paper-icon-button icon="slideshow:close" class="btnSlideshowExit" tabindex="-1"></paper-icon-button>',a+='<div class="slideshowBottomBar hide">',a+='<paper-icon-button icon="slideshow:pause" class="btnSlideshowPause slideshowButton" autoFocus></paper-icon-button>',o.supports("filedownload")&&(a+='<paper-icon-button icon="slideshow:file-download" class="btnDownload slideshowButton"></paper-icon-button>'),a+="</div>",a+="</div>"):a+='<div class="slideshowImage"></div><h1 class="slideshowImageText"></h1>',z.innerHTML=a,i.interactive){z.querySelector(".btnSlideshowExit").addEventListener("click",function(){e.close(z)}),z.querySelector(".btnSlideshowNext").addEventListener("click",f),z.querySelector(".btnSlideshowPrevious").addEventListener("click",m);var n=z.querySelector(".btnSlideshowPause");n&&n.addEventListener("click",b);var s=z.querySelector(".btnDownload");s&&s.addEventListener("click",v);var l=z.querySelector(".btnShare");l&&l.addEventListener("click",g)}document.body.appendChild(z),e.open(z).then(function(){N(),z.parentNode.removeChild(z)}),t.on(window,M),document.addEventListener("mousemove",A),z.addEventListener("close",S),i.interactive&&r(z)}function r(e){e.querySelector(".swiper-wrapper").innerHTML=W.slides?W.slides.map(p).join(""):W.items.map(c).join(""),require(["swiper"],function(){H=new Swiper(e.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:i.loop!==!1,autoplay:i.interval||8e3,preloadImages:!1,lazyLoading:!0,autoplayDisableOnInteraction:!1,initialSlide:i.startIndex||0}),H.on("onLazyImageLoad",d),H.on("onLazyImageReady",u),a.mobile?y():w()})}function c(e){return p({imageUrl:l(e),originalImage:l(e,!0)})}function d(e,t){var i=t.querySelector("paper-spinner");i&&(i.active=!0)}function u(e,t){var i=t.querySelector("paper-spinner");i&&(i.active=!1,i.parentNode.removeChild(i))}function p(e){var t="";return t+='<div class="swiper-slide" data-original="'+e.originalImage+'">',t+='<img data-src="'+e.imageUrl+'" class="swiper-lazy">',t+="<paper-spinner></paper-spinner>",(e.title||e.subtitle)&&(t+='<div class="slideText">',t+='<div class="slideTextInner">',e.title&&(t+='<div class="slideTitle">',t+=e.title,t+="</div>"),e.description&&(t+='<div class="slideSubtitle">',t+=e.description,t+="</div>"),t+="</div>",t+="</div>"),t+="</div>"}function m(){H?H.slidePrev():(N(),D(F-1))}function f(){if(H){if(i.loop===!1&&H.activeIndex>=H.slides.length-1)return void e.close(z);H.slideNext()}else N(),D(F+1)}function h(){return H?document.querySelector(".swiper-slide-active").getAttribute("data-original"):null}function v(){var e=h();require(["fileDownloader"],function(t){t.download([{url:e}])})}function g(){}function w(){z.querySelector(".btnSlideshowPause").icon="slideshow:pause",H.startAutoplay()}function y(){z.querySelector(".btnSlideshowPause").icon="slideshow:play-arrow",H.stopAutoplay()}function b(){var e="slideshow:pause"!=z.querySelector(".btnSlideshowPause").icon;e?w():y()}function S(){var e=H;e&&(e.off("onLazyImageLoad"),e.off("onLazyImageReady"),e.destroy(!0,!0),H=null),t.off(window,M),document.removeEventListener("mousemove",A)}function I(e){W=e,N(),s(e),e.interactive||(U=e.interval||8e3,D(e.startIndex||0,!0))}function x(){return X}function L(){return z.querySelector(".slideshowBottomBar")}function T(){B(L()),k()}function q(){E(L())}function k(){P(),j=setTimeout(q,4e3)}function P(){j&&(clearTimeout(j),j=null)}function B(e){e.classList.contains("hide")&&(X=!0,e.classList.remove("hide"),requestAnimationFrame(function(){var t=[{transform:"translate3d(0,"+e.offsetHeight+"px,0)",opacity:".3",offset:0},{transform:"translate3d(0,0,0)",opacity:"1",offset:1}],i={duration:300,iterations:1,easing:"ease-out"};e.animate(t,i).onfinish=function(){n.focus(e.querySelector(".btnSlideshowPause"))}}))}function E(e){e.classList.contains("hide")||requestAnimationFrame(function(){var t=[{transform:"translate3d(0,0,0)",opacity:"1",offset:0},{transform:"translate3d(0,"+e.offsetHeight+"px,0)",opacity:".3",offset:1}],i={duration:300,iterations:1,easing:"ease-out"};e.animate(t,i).onfinish=function(){e.classList.add("hide"),X=!1}})}function A(e){var t=e.screenX||0,i=e.screenY||0,a=R;return a?void(Math.abs(t-a.x)<10&&Math.abs(i-a.y)<10||(a.x=t,a.y=i,T())):void(R={x:t,y:i})}function M(e){switch(e.detail.command){case"left":x()||(e.preventDefault(),m());break;case"right":x()||(e.preventDefault(),f());break;case"up":case"down":case"select":case"menu":case"info":case"play":case"playpause":case"pause":case"fastforward":case"rewind":case"next":case"previous":T()}}function D(e,t){e=Math.max(0,e),e>=W.items.length&&(e=0),F=e;var i=W,a=i.items,n=a[e],o=l(n),s=function(){var t=z.querySelector(".slideshowImage"),a=document.createElement("div");a.className=t.className,i.cover&&a.classList.add("cover"),a.style.backgroundImage="url('"+o+"')",a.classList.add("hide"),t.parentNode.appendChild(a),z.querySelector(".slideshowImageText").innerHTML=i.showTitle?n.Name:"",a.classList.remove("hide");var s=function(){var e=t.parentNode;e&&e.removeChild(t)};if(a.animate){var r=[{opacity:"0",offset:0},{opacity:"1",offset:1}],l={duration:1200,iterations:1};a.animate(r,l).onfinish=s}else s();N(),C=setTimeout(function(){D(e+1,!0)},U)};if(t)s();else{var r=new Image;r.onload=s,r.src=o}}function N(){C&&(clearTimeout(C),C=null)}var H,z,C,U,W,F,j,R,O=this,X=!1;O.show=function(){I(i)},O.hide=function(){var t=z;t&&e.close(t)}}});