define(["jQuery"],function(e){function t(e,t,i,n,r,o){var s='<div class="paperCheckboxList paperList" style="padding: .5em 1em;">';s+=t.map(function(e){var t=o?-1!=r.indexOf(e.Id):-1==r.indexOf(e.Id),n=t?' checked="checked"':"";return'<paper-checkbox class="'+i+'" type="checkbox" data-itemid="'+e.Id+'"'+n+">"+e.Name+"</paper-checkbox>"}).join(""),s+="</div>",e.html(s).trigger("create")}function i(i){var n=getParameterByName("type"),r=ApiClient.getUsers(),s=ApiClient.getNamedConfiguration(o),a=ApiClient.getJSON(ApiClient.getUrl("Notifications/Types")),c=ApiClient.getJSON(ApiClient.getUrl("Notifications/Services"));Promise.all([r,s,a,c]).then(function(r){var o=r[0],s=r[1],a=r[2],c=r[3],l=s.Options.filter(function(e){return e.Type==n})[0],d=a.filter(function(e){return e.Type==n})[0]||{};d.IsBasedOnUserEvent?e(".monitorUsers",i).show():e(".monitorUsers",i).hide(),d.Variables.length?(e(".tokenHelp",i).show(),e(".tokenList",i).html(d.Variables.map(function(e){return"{"+e+"}"}).join(", "))):e(".tokenHelp",i).hide(),e(".notificationType",i).html(d.Name||"Unknown Notification"),l||(l={DisabledMonitorUsers:[],SendToUsers:[],DisabledServices:[],SendToUserMode:"Admins"}),t(e(".monitorUsersList",i),o,"chkMonitor","chkMonitor",l.DisabledMonitorUsers),t(e(".sendToUsersList",i),o,"chkSendTo","chkSendTo",l.SendToUsers,!0),t(e(".servicesList",i),c,"chkService","chkService",l.DisabledServices),e("#chkEnabled",i).checked(l.Enabled||!1),e("#txtTitle",i).val(l.Title||d.DefaultTitle),e("#selectUsers",i).val(l.SendToUserMode).trigger("change")})}function n(t){var i=getParameterByName("type"),n=ApiClient.getNamedConfiguration(o),r=ApiClient.getJSON(ApiClient.getUrl("Notifications/Types"));Promise.all([n,r]).then(function(n){var r=n[0],s=n[1],a=r.Options.filter(function(e){return e.Type==i})[0];a||(a={Type:i},r.Options.push(a));var c=s.filter(function(e){return e.Type==i})[0]||{};a.Enabled=e("#chkEnabled",t).checked(),a.Title=e("#txtTitle",t).val(),a.SendToUserMode=e("#selectUsers",t).val(),a.Title==c.DefaultTitle&&(a.Title=null),a.DisabledMonitorUsers=e(".chkMonitor",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-itemid")}),a.SendToUsers=e(".chkSendTo",t).get().filter(function(e){return e.checked}).map(function(e){return e.getAttribute("data-itemid")}),a.DisabledServices=e(".chkService",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-itemid")}),ApiClient.updateNamedConfiguration(o,r).then(function(){Dashboard.navigate("notificationsettings.html")})})}function r(){var t=e(this).parents(".page");return n(t),!1}var o="notifications";e(document).on("pageinit","#notificationSettingPage",function(){var t=this;e("#selectUsers",t).on("change",function(){"Custom"==this.value?e(".selectCustomUsers",t).show():e(".selectCustomUsers",t).hide()}),e(".notificationSettingForm").off("submit",r).on("submit",r)}).on("pageshow","#notificationSettingPage",function(){var e=this;i(e)})});