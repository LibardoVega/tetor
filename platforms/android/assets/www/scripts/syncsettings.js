define(["jQuery"],function(e){function n(n,t){e("#txtSyncTempPath",n).val(t.TemporaryPath||""),e("#txtUploadSpeedLimit",n).val(t.UploadSpeedLimitBytes/1e6||""),e("#txtCpuCoreLimit",n).val(t.TranscodingCpuCoreLimit),e("#chkEnableFullSpeedConversion",n).checked(t.EnableFullSpeedTranscoding),Dashboard.hideLoadingMsg()}function t(){Dashboard.showLoadingMsg();var n=this;return ApiClient.getNamedConfiguration("sync").then(function(t){t.TemporaryPath=e("#txtSyncTempPath",n).val(),t.UploadSpeedLimitBytes=parseInt(1e6*parseFloat(e("#txtUploadSpeedLimit",n).val()||"0")),t.TranscodingCpuCoreLimit=parseInt(e("#txtCpuCoreLimit",n).val()),t.EnableFullSpeedTranscoding=e("#chkEnableFullSpeedConversion",n).checked(),ApiClient.updateNamedConfiguration("sync",t).then(Dashboard.processServerConfigurationUpdateResult)}),!1}function a(){return[{href:"syncactivity.html",name:Globalize.translate("TabSyncJobs")},{href:"devicesupload.html",name:Globalize.translate("TabCameraUpload")},{href:"syncsettings.html",name:Globalize.translate("TabSettings")}]}e(document).on("pageinit","#syncSettingsPage",function(){var n=this;e("#btnSelectSyncTempPath",n).on("click.selectDirectory",function(){require(["directorybrowser"],function(t){var a=new t;a.show({callback:function(t){t&&e("#txtSyncTempPath",n).val(t),a.close()}})})}),e(".syncSettingsForm").off("submit",t).on("submit",t)}).on("pageshow","#syncSettingsPage",function(){Dashboard.showLoadingMsg(),LibraryMenu.setTabs("syncadmin",2,a);var e=this;ApiClient.getNamedConfiguration("sync").then(function(t){n(e,t)})})});