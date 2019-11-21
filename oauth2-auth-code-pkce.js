module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.LOCALSTORAGE_ID="oauth2authcodepkce",t.LOCALSTORAGE_CONFIG=t.LOCALSTORAGE_ID+"-config",t.LOCALSTORAGE_STATE=t.LOCALSTORAGE_ID+"-state",t.RECOMMENDED_CODE_VERIFIER_LENGTH=128,t.RECOMMENDED_STATE_LENGTH=32;var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",c=function(){function e(){this.state={}}return e.prototype.assertStateAndConfigArePresent=function(){if(!this.state||!this.config)throw console.error("state:",this.state,"config:",this.config),new Error("state or config is not set.")},e.prototype.fetchAccessToken=function(e,r){var n=this;this.assertStateAndConfigArePresent();var o=this.state,i=o.authorizationGrantCode,a=void 0===i?r:i,c=o.codeVerifier,s=void 0===c?"":c,u=this.config,l=u.redirectUrl,f=u.clientId;s?a||console.warn("No authorization grant code is being passed."):console.warn("No code verifier is being sent.");var h=this.config.tokenUrl,d="grant_type=authorization_code&code="+encodeURIComponent(a||"")+"&redirect_uri="+encodeURIComponent(l)+"&client_id="+encodeURIComponent(f)+"&code_verifier="+s;return fetch(h,{method:"POST",body:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return 400===e.status?Promise.reject(e.json()):e.json()})).then((function(e){var t=e.access_token,r=e.expires_in;return{value:t,expiry:new Date(Date.now()+parseInt(r)).toString()}})).then((function(e){return n.state.token=e,localStorage.setItem(t.LOCALSTORAGE_STATE,JSON.stringify(n.state)),e})).catch((function(e){return Promise.reject(e)})).catch((function(t){var r=t.error||"There was a network error.";switch(r){case"invalid_grant":e((function(){return n.fetchAuthorizationGrant().catch((function(e){return console.error(e)}))}))}return Promise.reject(r)}))},e.prototype.fetchAuthorizationGrant=function(){return o(this,void 0,void 0,(function(){var r,o,a,c,s,u,l,f,h;return i(this,(function(i){switch(i.label){case 0:return this.assertStateAndConfigArePresent(),r=this.config,o=r.clientId,a=r.redirectUrl,c=r.scopes,[4,e.generatePKCECodes()];case 1:return s=i.sent(),u=s.codeChallenge,l=s.codeVerifier,f=e.generateRandomState(t.RECOMMENDED_STATE_LENGTH),this.state=n(n({},this.state),{codeChallenge:u,codeVerifier:l,stateQueryParam:f}),localStorage.setItem(t.LOCALSTORAGE_STATE,JSON.stringify(this.state)),h=this.config.authorizationUrl+"?response_type=code&client_id="+encodeURIComponent(o)+"&redirect_uri="+encodeURIComponent(a)+"&scope="+encodeURIComponent(c.join(" "))+"&state="+f+"&code_challenge="+encodeURIComponent(u)+"&code_challenge_method=S256",location.replace(h),[2]}}))}))},e.prototype.getAccessToken=function(e){var t=this.state.token;return!t||new Date>=new Date(t.expiry)?this.fetchAccessToken(e):Promise.resolve(t)},e.prototype.recoverState=function(){return this.state=JSON.parse(localStorage.getItem(t.LOCALSTORAGE_STATE)||"{}"),this},e.prototype.setState=function(e){return this.state=e,localStorage.setItem(t.LOCALSTORAGE_STATE,JSON.stringify(e)),this},e.prototype.setConfig=function(e){return this.config=e,localStorage.setItem(t.LOCALSTORAGE_CONFIG,JSON.stringify(e)),this},e.base64urlEncode=function(e){var t=btoa(e);return t=(t=(t=t.replace(/\+/g,"-")).replace(/\//g,"_")).replace(/=/g,"")},e.extractParamFromUrl=function(e,t){var r=e.split("?");if(r.length<2)return"";var n=r[1].split("&").reduce((function(e,t){return e.concat(t.split("="))}),[]);if(n.length<2)return"";var o=n.indexOf(t);return o>=0?n[o+1]:""},e.generatePKCECodes=function(){var r=new Uint32Array(t.RECOMMENDED_CODE_VERIFIER_LENGTH);crypto.getRandomValues(r);var n=e.base64urlEncode(Array.from(r).map((function(e){return a[e%a.length]})).join(""));return crypto.subtle.digest("SHA-256",(new TextEncoder).encode(n)).then((function(e){for(var t=new Uint8Array(e),r="",n=t.byteLength,o=0;o<n;o++)r+=String.fromCharCode(t[o]);return r})).then(e.base64urlEncode).then((function(e){return{codeChallenge:e,codeVerifier:n}}))},e.generateRandomState=function(e){var t=new Uint32Array(e);return crypto.getRandomValues(t),Array.from(t).map((function(e){return a[e%a.length]})).join("")},e.isComingBackFromAuthServer=function(){var r=e.extractParamFromUrl(location.href,"error");if(r)return Promise.reject(r);var n=e.extractParamFromUrl(location.href,"code");if(!n)return Promise.reject();var o=JSON.parse(localStorage.getItem(t.LOCALSTORAGE_CONFIG)||"{}"),i=JSON.parse(localStorage.getItem(t.LOCALSTORAGE_STATE)||"{}");return e.extractParamFromUrl(location.href,"state")!==i.stateQueryParam?Promise.reject("Returned state query param does not match original."):(i.authorizationGrantCode=n,localStorage.setItem(t.LOCALSTORAGE_STATE,JSON.stringify(i)),Promise.resolve((new e).setConfig(o).setState(i)))},e}();t.OAuth2AuthCodePKCE=c}]);