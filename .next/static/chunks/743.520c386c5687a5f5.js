(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{4820:function(t,e,r){var n=r(114),o=r(4063),i=r(2189),a=r(3219),s=r(1619);function u(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var c=u(n),p=u(o);function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var f,h=function(t,e,r){var n;n=t,"undefined"!=typeof window&&n.addEventListener===window.EventSource.prototype.addEventListener&&t.addEventListener(e,r,!1),t.addEventListener(e,r)};function d(t){return t._id.startsWith("drafts.")?t._id.slice(7):t._id}function v(t,e){var r=l({},t);return delete r._rev,s.applyPatch(r,e)}function y(){return Promise.resolve()}function m(t,e,r){if(!t.s){if(r instanceof g){if(!r.s)return void(r.o=m.bind(null,t,e));1&e&&(e=r.s),r=r.v}if(r&&r.then)return void r.then(m.bind(null,t,e),m.bind(null,t,2));t.s=e,t.v=r;let n=t.o;n&&n(t)}}var g=function(){function t(){}return t.prototype.then=function(e,r){var n=new t,o=this.s;if(o){var i=1&o?e:r;if(i){try{m(n,1,i(this.v))}catch(a){m(n,2,a)}return n}return this}return this.o=function(t){try{var o=t.v;1&t.s?m(n,1,e?e(o):o):r?m(n,1,r(o)):m(n,2,o)}catch(i){m(n,2,i)}},n},t}();function b(t){return t instanceof g&&1&t.s}var $=function(t){var e=t.projectId,r=t.dataset,n=t.token,o=t.documentLimit;try{return Promise.resolve(fetch("https://"+e+".api.sanity.io/v1/data/export/"+r,{credentials:"include",headers:n?{Authorization:"Bearer "+n}:void 0})).then(function(t){function e(e){var r,n,i=(function(t){if(!t)throw Error("Failed to read body from response");var e,r=!1;function n(){r=!0,e&&e.cancel()}return new ReadableStream({start:function(o){e=t.getReader();var i=new TextDecoder,a="";e.read().then(function t(s){try{if(s.done)return r?Promise.resolve():0===(a=a.trim()).length?(o.close(),Promise.resolve()):(o.enqueue(JSON.parse(a)),o.close(),Promise.resolve());for(var u=(a+=i.decode(s.value,{stream:!0})).split("\n"),c=0;c<u.length-1;++c){var p=u[c].trim();if(0!==p.length)try{o.enqueue(JSON.parse(p))}catch(l){return o.error(l),n(),Promise.resolve()}}if(a=u[u.length-1],!e)return Promise.resolve();var f=function(r,n){try{var o=Promise.resolve(e.read()).then(function(e){t(e)})}catch(i){return n(i)}return o&&o.then?o.then(void 0,n):o}(0,function(t){o.error(t)});return Promise.resolve(f&&f.then?f.then(function(){}):void 0)}catch(h){return Promise.reject(h)}}).catch(function(t){return o.error(t)})},cancel:n})})(t.body).getReader(),a=[],s=function(t,e){do{var r,n=t();if(n&&n.then){if(!b(n)){r=!0;break}n=n.v}var o=e();if(b(o)&&(o=o.v),!o)return n}while(!o.then);var i=new g,a=m.bind(null,i,2);return(r?n.then(s):o.then(u)).then(void 0,a),i;function s(r){for(n=r;b(o=e())&&(o=o.v),o;){if(o.then)return void o.then(u).then(void 0,a);if((n=t())&&n.then){if(!b(n))return void n.then(s).then(void 0,a);n=n.v}}m(i,1,n)}function u(r){if(r){do{if((n=t())&&n.then){if(!b(n))return void n.then(s).then(void 0,a);n=n.v}if(b(r=e())&&(r=r.v),!r)return void m(i,1,n)}while(!r.then);r.then(u).then(void 0,a)}else m(i,1,n)}}(function(){return Promise.resolve(i.read()).then(function(t){var e;if((e=n=(r=t).value)&&"error"in e&&"object"==typeof e.error&&null!==e.error&&"description"in e.error&&"string"==typeof e.error.description&&!("_id"in e))throw Error("Error streaming dataset: "+n.error);if(n&&!n._id.startsWith("_.")&&a.push(n),o&&a.length>o)throw i.cancel("Reached document limit"),Error("Error streaming dataset: Reached limit of "+o+" documents")})},function(){return!r.done});return s&&s.then?s.then(function(t){return a}):a}var r=function(){if(200!==t.status)return Promise.resolve(t.json()).then(function(t){var e;throw Error("Error streaming dataset: "+("object"==typeof(e=t)&&"error"in e&&"message"in e?e.message||e.error:"<unknown error>"))})}();return r&&r.then?r.then(e):e()})}catch(i){return Promise.reject(i)}};Object.defineProperty(e,"groq",{enumerable:!0,get:function(){return c.default}}),e.groqStore=function(t){!function(){var t=["EventSource","ReadableStream","fetch"].filter(function(t){return!(t in window)});if(t.length>0)throw Error("Browser not supported. Missing browser APIs: "+t.join(", "))}();var e,r=null!=(e=t.EventSource)?e:window.EventSource;if(t.token&&r===window.EventSource)throw Error("When`token` option is used, `EventSource` option must also be provided. EventSource cannot be `window.EventSource`, as it does not support passing a token.");return function(t,e){var r,n=function(t,e){return Promise.resolve(o()).then(function(){var r=a.parse(t,{params:e});return Promise.resolve(a.evaluate(r,{dataset:s,params:e})).then(function(t){return t.get()})})},o=function(){try{return r||(r=function(t,e,r){var n=r.getDocuments,o=r.EventSource,i=t.projectId,a=t.dataset,s=t.overlayDrafts,u=t.documentLimit,c=t.token;if(!t.listen)return{unsubscribe:y,loaded:n({projectId:i,dataset:a,documentLimit:u,token:c}).then(M).then(y)};var p,f,m,g,b,$,S,w,j,k,A,_,P=new Map,E=[],O=new Promise(function(t,e){f=t,m=e});return{unsubscribe:(S=o,w=t,j={next:function(t){var e,r;p?(function(t){if(t.effects&&!t.documentId.startsWith("_.")){var e,r,n,o,i,a=P.get(t.documentId)||null;e=t.documentId,r=v(a,t.effects.apply),n=P.get(e),o=p||[],i=n?o.indexOf(n):-1,-1===i&&r?(o.push(r),P.set(e,r)):r?(o.splice(i,1,r),P.set(e,r)):(o.splice(i,1),P.delete(e))}}(t),e=p,r=t,clearTimeout($),b!==r.transactionId&&g?(M(g),b=void 0):(b=r.transactionId,g=e.slice()),$=setTimeout(M,25,e.slice())):E.push(t)},open:function(){try{return Promise.resolve(n({projectId:i,dataset:a,documentLimit:u,token:c})).then(function(t){var e,r,n;(p=(e=t,r=E,n=new Map,r.forEach(function(t){var e=n.get(t.documentId)||[];e.push(t),n.set(t.documentId,e)}),n.forEach(function(t,r){var n=e.find(function(t){return t._id===r});if(n){var o=!1,i=n;t.forEach(function(t){(o=o||t.previousRev===n._rev)&&t.effects&&(i=v(i,t.effects.apply))}),e.splice(e.indexOf(n),1,i)}else console.warn("Received mutation for missing document %s",r)}),e)).forEach(function(t){return P.set(t._id,t)}),M(p),f()})}catch(t){return Promise.reject(t)}},error:function(t){return m(t)}},A=w.token,_=new S("https://"+w.projectId+".api.sanity.io/v1/data/listen/"+w.dataset+"?query=*&effectFormat=mendoza",{withCredentials:!0,headers:A?{Authorization:"Bearer "+A}:void 0}),h(_,"welcome",j.open),h(_,"mutation",(k=j.next,function(t){var e;try{e=JSON.parse(t.data)}catch(r){return}k(e)})),h(_,"channelError",function(t){var e;_.close();try{e=JSON.parse(t.data)}catch(r){return void j.error(Error("Unknown error parsing listener message"))}j.error(Error(e.message||e.error||"Listener returned HTTP "+e.statusCode))}),h(_,"error",function(t){var e,r="undefined"!=typeof window&&window.location.origin,n=(e=t,"object"==typeof e&&null!==e&&"message"in e)?" ("+t.message+")":"";j.error(Error("Error establishing listener - check that the project ID and dataset are correct"+(r?", and that the CORS-origin ("+r+") is allowed":"")+n))}),{unsubscribe:function(){return Promise.resolve(_.close())}}).unsubscribe,loaded:O};function M(t){var r,n;g=void 0,$=void 0,b=void 0,e(s?(r=t,n=new Map,r.forEach(function(t){var e,r=n.get(d(t));t._id.startsWith("drafts.")?n.set(d(t),(e=t,l({},e,{_id:d(e)}))):r||n.set(t._id,t)}),Array.from(n.values())):t)}}(t,function(t){s=t,u()},e)),Promise.resolve(r.loaded).then(function(){})}catch(n){return Promise.reject(n)}},s=[],u=i.throttle(t.subscriptionThrottleMs||50,function(){m.forEach(g)}),m=[];function g(t){return n(t.query,t.params).then(function(e){"previousResult"in t&&p.default(t.previousResult,e)||(t.previousResult=e,t.callback(void 0,e))}).catch(function(e){t.callback(e)})}return{query:n,getDocument:function(t){return Promise.resolve(o()).then(function(){var e,r;return n(c.default(f||(e=["*[_id == $id][0]"],r||(r=e.slice(0)),e.raw=r,f=e)),{id:t})})},getDocuments:function(t){return Promise.resolve(o()).then(function(){return n("["+t.map(function(t){return'*[_id == "'+t+'"][0]'}).join(",\n")+"]")})},subscribe:function(e,r,n){if(!t.listen)throw Error("Cannot use `subscribe()` without `listen: true`");var o={query:e,params:r,callback:n};m.push(o);var i=!1;return g(o),{unsubscribe:function(){return i||(i=!0,m.splice(m.indexOf(o),1)),Promise.resolve()}}},close:function(){return u.cancel(),r?r.unsubscribe():Promise.resolve()}}}(t,{EventSource:r,getDocuments:$})}},4063:function(t){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var n,o,i,a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!=e&&r!=r}},1619:function(t,e,r){"use strict";r.r(e),r.d(e,{applyPatch:function(){return v},incremental:function(){return n}});var n={};r.r(n),r.d(n,{applyPatch:function(){return h},getType:function(){return f},rebaseValue:function(){return function t(e,r){var n=f(e),o=f(r);if(n!==o)return r;var i=new c(e.endMeta),u=new c(r.endMeta);switch(n){case"object":for(var p=i.asObject(e),h=u.asObject(r),d=0,v=Object.keys(p.fields).length,y=Object.keys(h.fields).length,m=0,g=Object.entries(h.fields);m<g.length;m++){var b=g[m],$=b[0],S=b[1],w=p.fields[$];w&&(h.fields[$]=t(w,S),h.fields[$]===w&&d++)}return v===y&&v===d?e:r;case"array":var j=i.asArray(e),k=u.asArray(r);if(j.elements.length!==k.elements.length)break;for(var A=0,_=0;_<k.elements.length;_++)k.elements[_]=t(j.elements[_],k.elements[_]),k.elements[_]!==j.elements[_]&&A++;return 0===A?e:r;case"null":case"boolean":case"number":if(l(e)===l(r))return e;break;case"string":var P=l(e),E=l(r);if(P===E)return e;var O=u.copyString(null),M=function(t,e){for(var r=Math.min(t.length,e.length),n=0,o=0;o<r;){var i=t.codePointAt(o),s=e.codePointAt(o);if(i!==s)break;var u=a(i);n+=u,o+=4===u?2:1}return n}(P,E),I=function(t,e,r){void 0===r&&(r=0);for(var n=Math.min(t.length,e.length)-r,o=0,i=0;i<n;){var s=t.codePointAt(t.length-1-i);if(s!==e.codePointAt(e.length-1-i))break;var u=a(s);o+=u,i+=4===u?2:1}return o}(P,E,M),F=s(E),R=s(P);0<M&&u.stringAppendSlice(O,e,0,M),M<F-I&&u.stringAppendSlice(O,r,M,F-I),R-I<R&&u.stringAppendSlice(O,e,R-I,R);var V=u.finalize(O);if(l(V)!==E)throw Error("incorrect string rebase");return V}return r}},unwrap:function(){return l},wrap:function(){return p}});var o=["Value","Copy","Blank","ReturnIntoArray","ReturnIntoObject","ReturnIntoObjectSameKey","PushField","PushElement","PushParent","Pop","PushFieldCopy","PushFieldBlank","PushElementCopy","PushElementBlank","ReturnIntoObjectPop","ReturnIntoObjectSameKeyPop","ReturnIntoArrayPop","ObjectSetFieldValue","ObjectCopyField","ObjectDeleteField","ArrayAppendValue","ArrayAppendSlice","StringAppendString","StringAppendSlice"],i=function(){function t(t,e,r){this.i=0,this.inputStack=[],this.outputStack=[],this.model=t,this.root=e,this.patch=r}return t.prototype.read=function(){return this.patch[this.i++]},t.prototype.process=function(){for(this.inputStack.push({value:this.root}),this.outputStack.push({value:this.root});this.i<this.patch.length;){var t=this.read(),e=o[t];if(!e)throw Error("Unknown opcode: "+t);this["process"+e].apply(this)}var r=this.outputStack.pop();return this.finalizeOutput(r)},t.prototype.inputEntry=function(){return this.inputStack[this.inputStack.length-1]},t.prototype.inputKey=function(t,e){return t.keys||(t.keys=this.model.objectGetKeys(t.value).sort()),t.keys[e]},t.prototype.outputEntry=function(){return this.outputStack[this.outputStack.length-1]},t.prototype.outputArray=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyArray(t.value)),t.writeValue},t.prototype.outputObject=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyObject(t.value)),t.writeValue},t.prototype.outputString=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyString(t.value)),t.writeValue},t.prototype.finalizeOutput=function(t){return t.writeValue?this.model.finalize(t.writeValue):t.value},t.prototype.processValue=function(){var t=this.model.wrap(this.read());this.outputStack.push({value:t})},t.prototype.processCopy=function(){var t=this.inputEntry();this.outputStack.push({value:t.value})},t.prototype.processBlank=function(){this.outputStack.push({value:null})},t.prototype.processReturnIntoArray=function(){var t=this.outputStack.pop(),e=this.finalizeOutput(t),r=this.outputArray();this.model.arrayAppendValue(r,e)},t.prototype.processReturnIntoObject=function(){var t=this.read(),e=this.outputStack.pop(),r=this.finalizeOutput(e);r=this.model.markChanged(r);var n=this.outputObject();this.model.objectSetField(n,t,r)},t.prototype.processReturnIntoObjectSameKey=function(){var t=this.inputEntry(),e=this.outputStack.pop(),r=this.finalizeOutput(e),n=this.outputObject();this.model.objectSetField(n,t.key,r)},t.prototype.processPushField=function(){var t=this.read(),e=this.inputEntry(),r=this.inputKey(e,t),n=this.model.objectGetField(e.value,r);this.inputStack.push({value:n,key:r})},t.prototype.processPushElement=function(){var t=this.read(),e=this.inputEntry(),r=this.model.arrayGetElement(e.value,t);this.inputStack.push({value:r})},t.prototype.processPop=function(){this.inputStack.pop()},t.prototype.processPushFieldCopy=function(){this.processPushField(),this.processCopy()},t.prototype.processPushFieldBlank=function(){this.processPushField(),this.processBlank()},t.prototype.processPushElementCopy=function(){this.processPushElement(),this.processCopy()},t.prototype.processPushElementBlank=function(){this.processPushElement(),this.processBlank()},t.prototype.processReturnIntoObjectPop=function(){this.processReturnIntoObject(),this.processPop()},t.prototype.processReturnIntoObjectSameKeyPop=function(){this.processReturnIntoObjectSameKey(),this.processPop()},t.prototype.processReturnIntoArrayPop=function(){this.processReturnIntoArray(),this.processPop()},t.prototype.processObjectSetFieldValue=function(){this.processValue(),this.processReturnIntoObject()},t.prototype.processObjectCopyField=function(){this.processPushField(),this.processCopy(),this.processReturnIntoObjectSameKey(),this.processPop()},t.prototype.processObjectDeleteField=function(){var t=this.read(),e=this.inputEntry(),r=this.inputKey(e,t),n=this.outputObject();this.model.objectDeleteField(n,r)},t.prototype.processArrayAppendValue=function(){var t=this.model.wrap(this.read()),e=this.outputArray();this.model.arrayAppendValue(e,t)},t.prototype.processArrayAppendSlice=function(){var t=this.read(),e=this.read(),r=this.outputArray(),n=this.inputEntry().value;this.model.arrayAppendSlice(r,n,t,e)},t.prototype.processStringAppendString=function(){var t=this.model.wrap(this.read()),e=this.outputString();this.model.stringAppendValue(e,t)},t.prototype.processStringAppendSlice=function(){var t=this.read(),e=this.read(),r=this.outputString(),n=this.inputEntry().value;this.model.stringAppendSlice(r,n,t,e)},t}();function a(t){return t>>16?4:t>>11?3:t>>7?2:1}function s(t){for(var e=0,r=0;r<t.length;r++){var n=t.codePointAt(r),o=a(n);4==o&&r++,e+=o}return e}function u(t,e,r){void 0===r&&(r=0);var n=r,o=0;for(o=r;n<e;o++){var i=t.codePointAt(o),s=a(i);4===s&&o++,n+=s}return o}var c=function(){function t(t){this.meta=t}return t.prototype.wrap=function(t){return this.wrapWithMeta(t,this.meta,this.meta)},t.prototype.wrapWithMeta=function(t,e,r){return void 0===r&&(r=this.meta),{data:t,startMeta:e,endMeta:r}},t.prototype.asObject=function(t){if(!t.content){for(var e={},r=0,n=Object.entries(t.data);r<n.length;r++){var o=n[r],i=o[0],a=o[1];e[i]=this.wrapWithMeta(a,t.startMeta)}t.content={type:"object",fields:e}}return t.content},t.prototype.asArray=function(t){var e=this;if(!t.content){var r=t.data.map(function(r){return e.wrapWithMeta(r,t.startMeta)}),n=r.map(function(){return e.meta});t.content={type:"array",elements:r,metas:n}}return t.content},t.prototype.asString=function(t){if(!t.content){var e=t.data,r={value:e,utf8size:s(e),uses:[],startMeta:t.startMeta,endMeta:t.endMeta};t.content=this.stringFromParts([r])}return t.content},t.prototype.stringFromParts=function(t){for(var e={type:"string",parts:t},r=0,n=t;r<n.length;r++)n[r].uses.push(e);return e},t.prototype.objectGetKeys=function(t){return t.content?Object.keys(t.content.fields):Object.keys(t.data)},t.prototype.objectGetField=function(t,e){return this.asObject(t).fields[e]},t.prototype.arrayGetElement=function(t,e){return this.asArray(t).elements[e]},t.prototype.finalize=function(t){return this.updateEndMeta(t),{content:t,startMeta:this.meta,endMeta:this.meta}},t.prototype.markChanged=function(t){return this.wrap(l(t))},t.prototype.updateEndMeta=function(t){if("string"==t.type)for(var e=0,r=t.parts;e<r.length;e++)r[e].endMeta=this.meta;else if("array"===t.type)for(var n=0,o=t.elements;n<o.length;n++){var i=o[n];i.content&&i.endMeta!==this.meta&&this.updateEndMeta(i.content),i.endMeta=this.meta}else for(var a=0,s=Object.values(t.fields);a<s.length;a++){var i=s[a];i.content&&i.endMeta!==this.meta&&this.updateEndMeta(i.content),i.endMeta=this.meta}},t.prototype.copyString=function(t){if(!t)return{type:"string",parts:[]};var e=this.asString(t);return this.stringFromParts(e.parts.slice())},t.prototype.copyObject=function(t){var e={type:"object",fields:{}};if(t){var r=this.asObject(t);Object.assign(e.fields,r.fields)}return e},t.prototype.copyArray=function(t){var e,r=t?this.asArray(t):null;return{type:"array",elements:r?r.elements:[],metas:r?r.metas:[]}},t.prototype.objectSetField=function(t,e,r){t.fields[e]=r},t.prototype.objectDeleteField=function(t,e){delete t.fields[e]},t.prototype.arrayAppendValue=function(t,e){t.elements.push(e),t.metas.push(this.meta)},t.prototype.arrayAppendSlice=function(t,e,r,n){var o,i,a=this.asArray(e),s=a.elements.length===r;if((o=t.elements).push.apply(o,a.elements.slice(r,n)),s)(i=t.metas).push.apply(i,a.metas.slice(r,n));else for(var u=r;u<n;u++)t.metas.push(this.meta)},t.prototype.stringAppendValue=function(t,e){for(var r=this.asString(e),n=0,o=r.parts;n<o.length;n++){var i=o[n];this.stringAppendPart(t,i)}},t.prototype.stringAppendPart=function(t,e){t.parts.push(e),e.uses.push(t)},t.prototype.resolveStringPart=function(t,e,r){if(0===r)return e;for(var n=e;n<t.parts.length;n++){var o=t.parts[n];if(r===o.utf8size)return n+1;if(r<o.utf8size)return this.splitString(o,r),n+1;r-=o.utf8size}throw Error("splitting string out of bounds")},t.prototype.splitString=function(t,e){var r,n,o=e,i=t.utf8size-o;if(t.utf8size!==t.value.length){var s=0;for(e=0;s<o;e++){var u=t.value.codePointAt(e),c=a(u);4===c&&e++,s+=c}}r=t.value.slice(0,e);var p={value:t.value.slice(e),utf8size:i,uses:t.uses.slice(),startMeta:t.startMeta,endMeta:t.endMeta};t.value=r,t.utf8size=o;for(var l=0,f=t.uses;l<f.length;l++){var h=f[l],d=h.parts.indexOf(t);if(-1===d)throw Error("bug: mismatch between string parts and use.");h.parts.splice(d+1,0,p)}},t.prototype.stringAppendSlice=function(t,e,r,n){for(var o=this.asString(e),i=this.resolveStringPart(o,0,r),a=this.resolveStringPart(o,i,n-r),s=i;s<a;s++){var u=o.parts[s];this.stringAppendPart(t,u)}},t}();function p(t,e){return{data:t,startMeta:e,endMeta:e}}function l(t){if(void 0!==t.data)return t.data;var e,r=t.content;switch(r.type){case"string":e=r.parts.map(function(t){return t.value}).join("");break;case"array":e=r.elements.map(function(t){return l(t)});break;case"object":e={};for(var n=0,o=Object.entries(r.fields);n<o.length;n++){var i=o[n],a=i[0],s=i[1];e[a]=l(s)}}return t.data=e,e}function f(t){return t.content?t.content.type:Array.isArray(t.data)?"array":null===t.data?"null":typeof t.data}function h(t,e,r){var n=new c(r);return new i(n,t,e).process()}var d={wrap:function(t){return t},finalize:function(t){return Array.isArray(t)?t:t.data},markChanged:function(t){return t},objectGetKeys:function(t){return Object.keys(t)},objectGetField:function(t,e){return t[e]},arrayGetElement:function(t,e){return t[e]},copyObject:function(t){var e={type:"object",data:{}};if(null!==t)for(var r=0,n=Object.entries(t);r<n.length;r++){var o=n[r],i=o[0],a=o[1];e.data[i]=a}return e},copyArray:function(t){return null===t?[]:t.slice()},copyString:function(t){return{type:"string",data:null===t?"":t}},objectSetField:function(t,e,r){t.data[e]=r},objectDeleteField:function(t,e){delete t.data[e]},arrayAppendValue:function(t,e){t.push(e)},arrayAppendSlice:function(t,e,r,n){t.push.apply(t,e.slice(r,n))},stringAppendSlice:function(t,e,r,n){var o=e,i=u(o,r),a=u(o,n,i);t.data+=o.slice(i,a)},stringAppendValue:function(t,e){t.data+=e}};function v(t,e){return new i(d,t,e).process()}},2189:function(t,e){"use strict";function r(t,e,r){var n,o=r||{},i=o.noTrailing,a=void 0!==i&&i,s=o.noLeading,u=void 0!==s&&s,c=o.debounceMode,p=void 0===c?void 0:c,l=!1,f=0;function h(){n&&clearTimeout(n)}function d(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var s=this,c=Date.now()-f;function d(){f=Date.now(),e.apply(s,o)}function v(){n=void 0}!l&&(u||!p||n||d(),h(),void 0===p&&c>t?u?(f=Date.now(),a||(n=setTimeout(p?v:d,t))):d():!0!==a&&(n=setTimeout(p?v:d,void 0===p?t-c:t)))}return d.cancel=function(t){var e=(t||{}).upcomingOnly;h(),l=!(void 0!==e&&e)},d}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=function(t,e,n){var o=(n||{}).atBegin;return r(t,e,{debounceMode:!1!==(void 0!==o&&o)})},e.throttle=r}}]);