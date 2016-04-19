define(["imageLoader","layoutManager","jQuery","paper-icon-button","paper-button","emby-icons"],function(e,n,t){function a(){var n="";n+='<div class="primaryIcons">';var t=browserInfo.safari?"chevron-left":"arrow-back";n+='<paper-icon-button icon="'+t+'" class="headerButton headerButtonLeft headerBackButton hide"></paper-icon-button>',AppInfo.enableNavDrawer&&(n+='<paper-icon-button icon="menu" class="headerButton mainDrawerButton barsMenuButton headerButtonLeft"></paper-icon-button>'),n+='<paper-icon-button icon="menu" class="headerButton headerAppsButton barsMenuButton headerButtonLeft"></paper-icon-button>',n+='<div class="libraryMenuButtonText headerButton">'+Globalize.translate("ButtonHome")+"</div>",n+='<div class="viewMenuSecondary">',n+='<span class="headerSelectedPlayer"></span>',n+='<paper-icon-button icon="cast" class="btnCast headerButton headerButtonRight hide"></paper-icon-button>',AppInfo.enableSearchInTopMenu&&(n+='<paper-icon-button icon="search" class="headerButton headerButtonRight headerSearchButton hide" onclick="Search.showSearchPanel();"></paper-icon-button>',n+='<div class="viewMenuSearch hide">',n+='<form class="viewMenuSearchForm">',n+='<input type="text" data-role="none" data-type="search" class="headerSearchInput" autocomplete="off" spellcheck="off" />',n+='<paper-icon-button icon="close" class="btnCloseSearch"></paper-icon-button>',n+="</form>",n+="</div>"),n+='<paper-icon-button icon="mic" class="headerButton headerButtonRight headerVoiceButton hide"></paper-icon-button>',n+='<paper-button class="headerButton headerButtonRight btnNotifications subdued" type="button" title="Notifications"><div class="btnNotificationsInner">0</div></paper-button>',n+='<paper-icon-button icon="person" class="headerButton headerButtonRight headerUserButton"></paper-icon-button>',browserInfo.mobile||Dashboard.isConnectMode()||(n+='<paper-icon-button icon="settings" class="headerButton headerButtonRight dashboardEntryHeaderButton" onclick="return LibraryMenu.onSettingsClicked(event);"></paper-icon-button>'),n+="</div>",n+="</div>",n+='<div class="viewMenuBarTabs hiddenScrollX">',n+="</div>";var a=document.createElement("div");a.classList.add("viewMenuBar"),a.innerHTML=n,document.querySelector(".skinHeader").appendChild(a),e.lazyChildren(document.querySelector(".viewMenuBar")),document.dispatchEvent(new CustomEvent("headercreated",{})),b()}function r(){Dashboard.exitOnBack()?Dashboard.exit():history.back()}function o(e){var n,t=document.querySelector(".viewMenuBar"),a=t.querySelector(".headerUserButton");if(e&&e.name&&e.imageUrl){var i=26,r=e.imageUrl;e.supportsImageParams&&(r+="&height="+i*Math.max(window.devicePixelRatio||1,2)),a&&(s(a,r,null),n=!0)}a&&!n&&s(a,null,"person"),e&&c(e.localUser),O=!1}function s(e,n,t){var a=e,e=document.createElement("paper-icon-button");e.className=a.className,e.addEventListener("click",d),n?(e.classList.add("headerUserButtonRound"),e.src=n):t?(e.classList.remove("headerUserButtonRound"),e.icon=t):e.classList.remove("headerUserButtonRound"),a.parentNode.replaceChild(e,a)}function c(e){var n=document.querySelector(".viewMenuBar"),t=n.querySelector(".headerSearchButton"),a=n.querySelector(".btnCast"),i=n.querySelector(".dashboardEntryHeaderButton");e?(a.classList.remove("hide"),t&&t.classList.remove("hide"),i&&(e.Policy.IsAdministrator?i.classList.remove("hide"):i.classList.add("hide")),require(["voice/voice"],function(e){e.isSupported()?n.querySelector(".headerVoiceButton").classList.remove("hide"):n.querySelector(".headerVoiceButton").classList.add("hide")})):(a.classList.add("hide"),n.querySelector(".headerVoiceButton").classList.add("hide"),t&&t.classList.add("hide"),i&&i.classList.add("hide"))}function l(){require(["voice/voice"],function(e){e.startListening()})}function d(e){Dashboard.showUserFlyout(e.target)}function u(){require(["dialogHelper"],function(e){var n=e.createDialog({removeOnClose:!0,modal:!1,autoFocus:!1,entryAnimationDuration:160,exitAnimationDuration:160,enableHistory:!1});n.classList.add("ui-body-a"),n.classList.add("background-theme-a"),n.classList.add("adminAppsMenu");var t="";t+='<div class="adminAppsMenuRow">',t+='<a class="adminAppsButton" href="home.html">',t+='<paper-icon-button icon="home"></paper-icon-button>',t+="<div>"+Globalize.translate("ButtonHome")+"</div>",t+="</a>",t+="</div>",t+='<div class="adminAppsMenuRow">',t+='<a class="adminAppsButton" href="edititemmetadata.html">',t+='<paper-icon-button icon="mode-edit"></paper-icon-button>',t+="<div>"+Globalize.translate("ButtonMetadataManager")+"</div>",t+="</a>",t+='<a class="adminAppsButton" href="reports.html">',t+='<paper-icon-button icon="insert-chart"></paper-icon-button>',t+="<div>"+Globalize.translate("ButtonReports")+"</div>",t+="</a>",t+="</div>",n.innerHTML=t,document.body.appendChild(n),n.addEventListener("click",function(t){var a=k(t.target,"A");a&&e.close(n)}),e.open(n)})}function b(){var e=document.querySelector(".mainDrawerButton");e&&e.addEventListener("click",m);var n=document.querySelector(".headerBackButton");n&&n.addEventListener("click",r);var t=document.querySelector(".headerVoiceButton");t&&t.addEventListener("click",l);var a=document.querySelector(".headerUserButton");a&&a.addEventListener("click",d);var i=document.querySelector(".headerAppsButton");i&&i.addEventListener("click",u);var o=document.querySelector(".viewMenuBar");F(o),o.querySelector(".btnNotifications").addEventListener("click",function(){Dashboard.navigate("notificationlist.html")})}function v(e,n){return LibraryBrowser.getHref(e,n)}function m(){"drawer"==R.selected?y(R):p(R)}function p(e){e=e||document.querySelector(".mainDrawerPanel"),e.openDrawer(),V=(new Date).getTime()}function h(){browserInfo.mobile&&document.body.classList.add("bodyWithPopupOpen")}function y(e){e=e||document.querySelector(".mainDrawerPanel"),e.closeDrawer()}function L(e){var n=e.target;"drawer"!=n.selected?document.body.classList.remove("bodyWithPopupOpen"):h()}function f(e,n){var t="";t+='<div style="height:.5em;"></div>';var a=window.ApiClient?"home.html":"selectserver.html?showuser=1";t+='<a class="lnkMediaFolder sidebarLink" href="'+a+'" onclick="return LibraryMenu.onLinkClicked(event, this);">',t+="<div style=\"background-image:url('css/images/mblogoicon.png');width:28px;height:28px;background-size:contain;background-repeat:no-repeat;background-position:center center;border-radius:1000px;vertical-align:middle;margin:0 1.6em 0 1.5em;display:inline-block;\"></div>",t+=Globalize.translate("ButtonHome"),t+="</a>",t+='<a class="sidebarLink lnkMediaFolder" data-itemid="remote" href="nowplaying.html" onclick="return LibraryMenu.onLinkClicked(event, this);"><iron-icon icon="tablet-android" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonRemote")+"</span></a>",t+='<div class="sidebarDivider"></div>',t+='<div class="libraryMenuOptions">',t+="</div>";var i=e.localUser;i&&i.Policy.IsAdministrator&&(t+='<div class="adminMenuOptions">',t+='<div class="sidebarDivider"></div>',t+='<div class="sidebarHeader">',t+=Globalize.translate("HeaderAdmin"),t+="</div>",t+='<a class="sidebarLink lnkMediaFolder lnkManageServer" data-itemid="dashboard" href="#"><iron-icon icon="dashboard" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonManageServer")+"</span></a>",t+='<a class="sidebarLink lnkMediaFolder editorViewMenu" data-itemid="editor" onclick="return LibraryMenu.onLinkClicked(event, this);" href="edititemmetadata.html"><iron-icon icon="mode-edit" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonMetadataManager")+"</span></a>",browserInfo.mobile||(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="reports" onclick="return LibraryMenu.onLinkClicked(event, this);" href="reports.html"><iron-icon icon="insert-chart" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonReports")+"</span></a>"),t+="</div>"),t+='<div class="userMenuOptions">',t+='<div class="sidebarDivider"></div>',e.localUser&&AppInfo.isNativeApp&&browserInfo.android&&(t+='<a class="sidebarLink lnkMediaFolder lnkMySettings" onclick="return LibraryMenu.onLinkClicked(event, this);" href="mypreferencesmenu.html?userId='+e.localUser.Id+'"><iron-icon icon="settings" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSettings")+"</span></a>"),t+='<a class="sidebarLink lnkMediaFolder lnkMySync" data-itemid="mysync" onclick="return LibraryMenu.onLinkClicked(event, this);" href="mysync.html"><iron-icon icon="sync" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSync")+"</span></a>",Dashboard.isConnectMode()&&(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="selectserver" onclick="return LibraryMenu.onLinkClicked(event, this);" href="selectserver.html?showuser=1"><iron-icon icon="wifi" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSelectServer")+"</span></a>"),e.localUser&&(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="logout" onclick="return LibraryMenu.onLogoutClicked(this);" href="#"><iron-icon icon="lock" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSignOut")+"</span></a>"),t+="</div>";var n=R.querySelector(".mainDrawer");n.innerHTML=t;var r=n.querySelector(".lnkManageServer");r&&r.addEventListener("click",D),require(["imageLoader"],function(e){e.fillImages(R.getElementsByClassName("lazy"))})}function g(e){R.querySelector(".adminDrawerLogo")?M():w(e)}function k(e,n){for(;e.tagName!=n;)if(e=e.parentNode,!e)return null;return e}function M(){for(var e=R.querySelectorAll(".sidebarLink"),n=0,a=e.length;a>n;n++){var i=e[n],r=!1,o=i.getAttribute("data-pageids");if(o&&(r=-1!=o.split(",").indexOf(t.mobile.activePage.id)),r){i.classList.add("selectedSidebarLink");var s="",c=(i.innerText||i.textContent).trim();s+=c;var l=c;Dashboard.setPageTitle(s,l)}else i.classList.remove("selectedSidebarLink")}}function w(){var e="";e+='<a class="adminDrawerLogo clearLink" href="home.html">',e+='<img src="css/images/logo.png" />',e+="</a>",e+=Dashboard.getToolsMenuHtml(),e=e.split("href=").join('onclick="return LibraryMenu.onLinkClicked(event, this);" href='),R.querySelector(".mainDrawer").innerHTML=e,M()}function B(){var e=this.getElementsByClassName("sectionName")[0],n=e?e.innerHTML:this.innerHTML;LibraryMenu.setTitle(n)}function T(e,n){return e.getUserViews({},n).then(function(e){for(var n=e.Items,t=[],a=0,i=n.length;i>a;a++){var r=n[a];if(t.push(r),"livetv"==r.CollectionType){r.ImageTags={},r.icon="live-tv",r.onclick="LibraryBrowser.showTab('livetv.html', 0);";var o=Object.assign({},r);o.Name=Globalize.translate("ButtonGuide"),o.ImageTags={},o.icon="dvr",o.url="livetv.html?tab=1",o.onclick="LibraryBrowser.showTab('livetv.html', 1);",t.push(o);var s=Object.assign({},r);s.Name=Globalize.translate("ButtonRecordedTv"),s.ImageTags={},s.icon="video-library",s.url="livetv.html?tab=3",s.onclick="LibraryBrowser.showTab('livetv.html', 3);",t.push(s)}}return t})}function S(e,n){var t=document.querySelector(e);t&&(n?t.classList.remove("hide"):t.classList.add("hide"))}function C(e){if(!e)return S(".lnkMySync",!1),void S(".userMenuOptions",!1);e.Policy.EnableSync?S(".lnkMySync",!0):S(".lnkMySync",!1);var n=Dashboard.getCurrentUserId(),t=window.ApiClient,a=document.querySelector(".libraryMenuOptions");a&&T(t,n).then(function(e){var n=e,t="";t+='<div class="sidebarHeader">',t+=Globalize.translate("HeaderMedia"),t+="</div>",t+=n.map(function(e){var n="folder",t="inherit",a=e.Id;"channels"==e.CollectionType?a="channels":"livetv"==e.CollectionType&&(a="livetv"),"photos"==e.CollectionType?(n="photo-library",t="#009688"):"music"==e.CollectionType||"musicvideos"==e.CollectionType?(n="library-music",t="#FB8521"):"books"==e.CollectionType?(n="library-books",t="#1AA1E1"):"playlists"==e.CollectionType?(n="view-list",t="#795548"):"games"==e.CollectionType?(n="games",t="#F44336"):"movies"==e.CollectionType?(n="video-library",t="#CE5043"):"channels"==e.CollectionType||"Channel"==e.Type?(n="videocam",t="#E91E63"):"tvshows"==e.CollectionType?(n="tv",t="#4CAF50"):"livetv"==e.CollectionType&&(n="live-tv",t="#293AAE"),n=e.icon||n;var i=e.onclick?" function(){"+e.onclick+"}":"null";return'<a data-itemid="'+a+'" class="lnkMediaFolder sidebarLink" onclick="return LibraryMenu.onLinkClicked(event, this, '+i+');" href="'+v(e,e.CollectionType)+'"><iron-icon icon="'+n+'" class="sidebarLinkIcon" style="color:'+t+'"></iron-icon><span class="sectionName">'+e.Name+"</span></a>"}).join(""),a.innerHTML=t;for(var i=a,r=i.querySelectorAll(".sidebarLink"),o=0,s=r.length;s>o;o++)r[o].removeEventListener("click",B),r[o].addEventListener("click",B)})}function D(){y(),Dashboard.navigate("dashboard.html")}function q(){return getParameterByName("topParentId")||null}function I(){var e=document,n=e.querySelector(".btnCast"),t=MediaController.getPlayerInfo();t.isLocalPlayer?(n.icon="cast",n.classList.remove("btnActiveCast"),e.querySelector(".headerSelectedPlayer").innerHTML=""):(n.icon="cast-connected",n.classList.add("btnActiveCast"),e.querySelector(".headerSelectedPlayer").innerHTML=t.deviceName||t.name)}function P(e){var n,t,a=e.classList.contains("liveTvPage"),i=e.classList.contains("channelsPage"),r=e.classList.contains("metadataEditorPage"),o=e.classList.contains("reportsPage"),s=e.classList.contains("mySyncPage"),c=a||i||r||o||s||e.classList.contains("allLibraryPage")?"":q()||"",l=document.getElementsByClassName("lnkMediaFolder");for(n=0,t=l.length;t>n;n++){var d=l[n],u=d.getAttribute("data-itemid");i&&"channels"==u?d.classList.add("selectedMediaFolder"):a&&"livetv"==u?d.classList.add("selectedMediaFolder"):r&&"editor"==u?d.classList.add("selectedMediaFolder"):o&&"reports"==u?d.classList.add("selectedMediaFolder"):s&&"mysync"==u?d.classList.add("selectedMediaFolder"):c&&u==c?d.classList.add("selectedMediaFolder"):d.classList.remove("selectedMediaFolder")}}function A(e){var n=e.querySelectorAll(".scopedLibraryViewNav a"),t=e.classList.contains("liveTvPage")||e.classList.contains("channelsPage")||e.classList.contains("metadataEditorPage")||e.classList.contains("reportsPage")||e.classList.contains("mySyncPage")||e.classList.contains("allLibraryPage")?"":q()||"";if(t)for(i=0,length=n.length;length>i;i++){var a=n[i],r=a.href;-1==r.indexOf("#")&&(r=replaceQueryString(r,"topParentId",t),a.href=r)}}function E(e,n){var t=n;"UserConfigurationUpdated"===t.MessageType&&t.Data.Id==Dashboard.getCurrentUserId()}function H(e){var t=document.querySelector(".viewMenuBar");e.classList.contains("standalonePage")?t.classList.add("hide"):t.classList.remove("hide"),e.classList.contains("type-interior")&&!n.mobile?t.classList.add("headroomDisabled"):t.classList.remove("headroomDisabled"),O&&ConnectionManager.user(window.ApiClient).then(o)}function N(e){var n=e.getAttribute("data-title")||e.getAttribute("data-contextname");if(!n){var t=getParameterByName("titlekey");t&&(n=Globalize.translate(t))}n&&LibraryMenu.setTitle(n)}function x(e){var n=!e.classList.contains("homePage")&&history.length>0,t=document.querySelector(".headerBackButton"),a=AppInfo.enableBackButton;a||(a="true"==e.getAttribute("data-backbutton")),t&&(n&&a?t.classList.remove("hide"):t.classList.add("hide"))}function F(e){AppInfo.enableHeadRoom&&require(["headroom"],function(){var n=new Headroom(e,{tolerance:{down:40,up:0}});n.init()})}function z(e){Events.off(e,"websocketmessage",E),Events.on(e,"websocketmessage",E)}function G(e){var n=!1;e||window.$&&window.$.mobile&&(e=t.mobile.activePage),e&&e.classList.contains("type-interior")&&(n=!0),n?(R.classList.add("adminDrawerPanel"),R.classList.remove("darkDrawerPanel")):(R.classList.add("darkDrawerPanel"),R.classList.remove("adminDrawerPanel"))}function U(e){var n=e?Promise.resolve(e):ConnectionManager.user(window.ApiClient);n.then(function(e){f(e),document.dispatchEvent(new CustomEvent("libraryMenuCreated",{})),C(e.localUser)})}var R=document.querySelector(".mainDrawerPanel"),O=!0,V=(new Date).getTime();window.LibraryMenu={getTopParentId:q,onLinkClicked:function(e,n,t){return 1!=e.which?!0:((new Date).getTime()-V>200&&setTimeout(function(){y();var e=browserInfo.mobile?350:200;setTimeout(function(){t?t():Dashboard.navigate(n.href)},e)},50),e.stopPropagation(),e.preventDefault(),!1)},onLogoutClicked:function(){if((new Date).getTime()-V>200){y();var e=browserInfo.mobile?350:200;setTimeout(function(){Dashboard.logout()},e)}return!1},onHardwareMenuButtonClick:function(){m()},onSettingsClicked:function(e){return 1!=e.which?!0:(Dashboard.navigate("dashboard.html"),!1)},setTabs:function(e,n,t){var a;return e?(a=document.querySelector(".viewMenuBarTabs"),LibraryMenu.tabType||a.classList.remove("hide"),LibraryMenu.tabType!=e?void require(["paper-tabs"],function(){var i=browserInfo.animate?"":" noink";a.innerHTML='<paper-tabs selected="'+n+'" hidescrollbuttons '+i+">"+t().map(function(e){return'<paper-tab link><a class="clearLink paperTabLink" href="'+e.href+'"><div>'+e.name+"</div></a></paper-tab>"}).join("")+"</paper-tabs>",R.classList.add("withTallToolbar"),LibraryMenu.tabType=e}):(a.querySelector("paper-tabs").selected=n,void(LibraryMenu.tabType=e))):void(LibraryMenu.tabType&&(R.classList.remove("withTallToolbar"),a=document.querySelector(".viewMenuBarTabs"),a.innerHTML="",a.classList.add("hide"),LibraryMenu.tabType=null))},setTitle:function(e){var n=e,a=t.mobile.activePage;if(a){var i=a.getAttribute("data-helpurl");i&&(n+='<a href="'+i+'" target="_blank" class="clearLink" style="margin-left:1em;" title="'+Globalize.translate("ButtonHelp")+'"><paper-icon-button icon="info"></paper-icon-button></a>')}document.querySelector(".libraryMenuButtonText").innerHTML=n},setBackButtonVisible:function(e){var n=document.querySelector(".headerBackButton");n&&(e?n.classList.remove("hide"):n.classList.add("hide"))},setMenuButtonVisible:function(e){var n=document.querySelector(".mainDrawerButton");n&&n.classList.remove(!e&&browserInfo.mobile?"hide":"hide")},setTransparentMenu:function(e){var n=document.querySelector(".viewMenuBar");n&&(e?n.classList.add("semiTransparent"):n.classList.remove("semiTransparent"))}},pageClassOn("pageinit","page",function(){var e=this,n=e.classList.contains("libraryPage");if(n)for(var t=e.querySelectorAll(".libraryViewNav"),a=0,i=t.length;i>a;a++)F(t[a])}),pageClassOn("pagebeforeshow","page",function(){var e=this;e.classList.contains("withTabs")||LibraryMenu.setTabs(null)}),pageClassOn("pageshow","page",function(e){var n=this,t=n.classList.contains("type-interior");t?(g(n),R.forceNarrow=!1):(R.classList.contains("adminDrawerPanel")&&U(),R.forceNarrow=!0),G(n),H(n),A(n),e.detail.isRestored||window.scrollTo(0,0),N(n),x(n),n.classList.contains("libraryPage")?(document.body.classList.add("libraryDocument"),document.body.classList.remove("dashboardDocument"),document.body.classList.remove("hideMainDrawer")):t?(document.body.classList.remove("libraryDocument"),document.body.classList.add("dashboardDocument"),document.body.classList.remove("hideMainDrawer")):(document.body.classList.remove("libraryDocument"),document.body.classList.remove("dashboardDocument"),document.body.classList.add("hideMainDrawer")),P(n)}),window.ApiClient&&z(window.ApiClient),R.addEventListener("iron-select",L),a(),Events.on(ConnectionManager,"apiclientcreated",function(e,n){z(n)}),Events.on(ConnectionManager,"localusersignedin",function(e,n){G();var t=ConnectionManager.getApiClient(n.ServerId);ConnectionManager.user(ConnectionManager.getApiClient(n.ServerId)).then(function(e){U(e),o(e)}),AppInfo.isNativeApp||require(["components/servertestermessage"],function(e){e.show(t)})}),Events.on(ConnectionManager,"localusersignedout",o),Events.on(MediaController,"playerchange",I),G()});