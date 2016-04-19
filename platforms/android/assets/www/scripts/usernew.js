define(["jQuery"],function(e){function n(n,a){var t="";t+='<div class="paperListLabel">'+Globalize.translate("HeaderLibraries")+"</div>",t+='<div class="paperCheckboxList paperList" style="padding:.5em 1em;">';for(var l=0,i=a.length;i>l;l++){var c=a[l],r=' checked="checked"';t+='<paper-checkbox class="chkFolder" data-id="'+c.Id+'"'+r+">"+c.Name+"</paper-checkbox>"}t+="</div>",e(".folderAccess",n).html(t).trigger("create"),e("#chkEnableAllFolders",n).checked(!0).trigger("change")}function a(n,a){var t="";t+='<div class="paperListLabel">'+Globalize.translate("HeaderChannels")+"</div>",t+='<div class="paperCheckboxList paperList" style="padding:.5em 1em;">';for(var l=0,i=a.length;i>l;l++){var c=a[l],r=' checked="checked"';t+='<paper-checkbox class="chkChannel" data-id="'+c.Id+'"'+r+">"+c.Name+"</paper-checkbox>"}t+="</div>",e(".channelAccess",n).show().html(t).trigger("create"),a.length?e(".channelAccessContainer",n).show():e(".channelAccessContainer",n).hide(),e("#chkEnableAllChannels",n).checked(!0).trigger("change")}function t(t){e("#txtUserName",t).val(""),Dashboard.showLoadingMsg();var l=ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),i=ApiClient.getJSON(ApiClient.getUrl("Channels"));Promise.all([l,i]).then(function(e){n(t,e[0].Items),a(t,e[1].Items),Dashboard.hideLoadingMsg()})}function l(n){var a=e("#txtUserName",n).val();ApiClient.createUser(a).then(function(a){a.Policy.EnableAllFolders=e("#chkEnableAllFolders",n).checked(),a.Policy.EnabledFolders=a.Policy.EnableAllFolders?[]:e(".chkFolder",n).get().filter(function(e){return e.checked}).map(function(e){return e.getAttribute("data-id")}),a.Policy.EnableAllChannels=e("#chkEnableAllChannels",n).checked(),a.Policy.EnabledChannels=a.Policy.EnableAllChannels?[]:e(".chkChannel",n).get().filter(function(e){return e.checked}).map(function(e){return e.getAttribute("data-id")}),ApiClient.updateUserPolicy(a.Id,a.Policy).then(function(){Dashboard.navigate("userprofiles.html")})},function(e){400==e.status?Dashboard.alert({message:n.querySelector(".labelNewUserNameHelp").innerHTML}):require(["toast"],function(e){e(Globalize.translate("DefaultErrorMessage"))}),Dashboard.hideLoadingMsg()})}function i(){var n=e(this).parents(".page")[0];return Dashboard.showLoadingMsg(),l(n),!1}function c(e){t(e)}e(document).on("pageinit","#newUserPage",function(){var n=this;e("#chkEnableAllChannels",n).on("change",function(){this.checked?e(".channelAccessListContainer",n).hide():e(".channelAccessListContainer",n).show()}),e("#chkEnableAllFolders",n).on("change",function(){this.checked?e(".folderAccessListContainer",n).hide():e(".folderAccessListContainer",n).show()}),e(".newUserProfileForm").off("submit",i).on("submit",i)}).on("pageshow","#newUserPage",function(){var e=this;c(e)})});