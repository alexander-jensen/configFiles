!function(o){o.shouldOpenDropdown()?window.location="extensionDropdown.html":o.shouldOpenLogin()?o.shouldOpenLogin()&&o.LPContentScriptFeatures.react_login&&!LPTools.getURLParams().showCreateAccount&&!o.shouldShowErrorDialogue()&&(o.sendLpEvent("login_viewed"),window.location="webclient-popover.html"):window.location="lp_toolstrip.html?browseraction=1",window.bg=o.LPPlatform.getBackgroundInterface()}(chrome.extension.getBackgroundPage()),window.addEventListener("DOMContentLoaded",function(){Topics.get(Topics.INITIALIZED).publish(),ExtensionDropdown.open()});
//# sourceMappingURL=sourcemaps/initializeLogin.js.map