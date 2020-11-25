(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{396:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return w})),t.d(n,"metadata",(function(){return j})),t.d(n,"rightToc",(function(){return _})),t.d(n,"default",(function(){return k}));var r=t(3),i=t(8),a=t(0),o=t.n(a),s=t(398);function c(e){return!!/^[\],:{}\s]*$/.test(e.value.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))}function l(e,n,t){e in n?"string"!=typeof n[e]&&(t[e]="manifest "+e+" field type should be string"):t[e]="manifest "+e+" field is required"}function f(e,n,t,r){e in n?"string"!=typeof n[e]?t[e]="manifest "+e+" field type should be string":r.includes(n[e])||(t[e]="manifest "+e+" field value not correct"):t[e]="manifest "+e+" field is required"}var u=function(e,n){var t={};return function(e,n){l("name",e,n)}(e,t),function(e,n){l("description",e,n)}(e,t),function(e,n){!function(e,n,t){if(e in n){var r=n[e];"string"!=typeof r?t[e]="manifest lang field type should be string!":/^\w*(-\w*)*$/.test(r)||(t[e]="manifest lang field type should be correct format!")}else t[e]="manifest lang field is required!"}("lang",e,n)}(e,t),function(e,n){l("theme_color",e,n)}(e,t),function(e,n){f("orientation",e,n,["any","natural","landscape","landscape-primary","landscape-secondary","portrait","portrait-primary","portrait-secondary"])}(e,t),function(e,n){l("start_url",e,n)}(e,t),function(e,n){if("icons"in e){var t=e.icons;if(Array.isArray(t)){var r=[];t.forEach((function(e){var n=function(e){var n={};if("src"in e?"string"!=typeof e.src&&(n.src="manifest icons field icon type should be string"):n.src="manifest icons field icon is required","sizes"in e){var t=e.sizes;"string"!=typeof t?n.sizes="manifest icons field size type should be string":/^\s*\d+x\d+(\s+\d+x\d+)*\s*$/.test(t)||(n.sizes="manifest icons field sizes should be correct format!")}else n.sizes="manifest icons field size is required!";return n}(e);Object.keys(n).length>0&&r.push(n)})),r.length>0&&(n.icons=r)}else n.icons="manifest icons field should be Array"}else n.icons="manifest icons field is required"}(e,t),t},d=function(e,n){!function(e,n,t){if(e in n){var r=n[e];if(Array.isArray(r)){var i=[];r.forEach((function(n){"string"!=typeof n&&i.push({field:"manifest "+e+" field category should be String"})})),i.length>0&&(t[e]=i)}else t[e]="manifest categories field should be Array"}else t.categories="manifest categories field is null"}("categories",e,n)},m=function(e){var n={};return function(e,n){f("dir",e,n,["rtl","ltr","auto"])}(e,n),function(e,n){l("scope",e,n)}(e,n),function(e,n){f("display",e,n,["fullscreen","standalone","minimal-ui","browser"])}(e,n),function(e,n){l("background_color",e,n)}(e,n),d(e,n),n};var p=t(333),v=t.n(p),y=function(e){if(c(e)){var n=function(e){var n=u(e),t=m(e);return{RequiredFields:Object.keys(n).length>0?n:"Required fields have no error!!!",OptionalFields:Object.keys(t).length>0?t:"Optional fields have no error!!!"}}(JSON.parse(e.value)),t=JSON.stringify(n,void 0,2);document.getElementById("newmanifest").value=t}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"},g=function(e){if(c(e)){var n=function(e){var n={};["name","short_name","description","theme_color","background_color","orientation"].forEach((function(t){t in e&&(n[t]=e[t],delete e[t])}));var t="";if("default_locale"in e?(t=e.default_locale,n.lang=e.default_locale,delete e.default_locale):(t="en-US",n.lang="en-US"),"locales"in e&&(n.name=e.locales[t].name,n.description=e.locales[t].description,delete e.locales),"launch_path"in e&&(n.start_url=e.launch_path,delete e.launch_path),"icons"in e){var r=e.icons,i=[];Object.keys(r).reduce((function(e,n){var t=r[n].split(".").pop(),i={src:r[n],type:"image/"+t,sizes:n+"x"+n};return e.push(i),e}),i),n.icons=i,delete e.icons}if(Object.keys(e).length>0){if(n.b2g_features=e,"type"in e){var a=e.type;"certified"!==a&&"priviliged"!==a||(n.b2g_features.core=!0)}n.b2g_features.version="version"in e?e.version:"0.1"}return n}(JSON.parse(e.value)),t=JSON.stringify(n,void 0,2);document.getElementById("newmanifest").value=t}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"},b=function(e){g(document.getElementById("orimanifest"))},h=function(e){y(document.getElementById("orimanifest"))},O=function(e){var n=document.getElementById("orimanifest");if(c(n)){var t=JSON.stringify(JSON.parse(n.value),void 0,2);n.value=t}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"};var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:v.a.convertcontainer},o.a.createElement("div",{className:v.a.converttextarea},o.a.createElement("div",{className:v.a.prettyWrapper},o.a.createElement("h3",null,"2.5.4 Manifest"),o.a.createElement("div",{className:v.a.buttonPretty,onClick:O},"Pretty")),o.a.createElement("textarea",{className:v.a.convertcontent,id:"orimanifest"})),o.a.createElement("div",{className:v.a.buttonWrapper},o.a.createElement("div",{className:v.a.buttonConvert,onClick:b},"CONVERT"),o.a.createElement("div",{className:v.a.buttonValidate,onClick:h},"VALIDATE")),o.a.createElement("div",{className:v.a.converttextarea},o.a.createElement("h3",null,"3.0 Manifest"),o.a.createElement("textarea",{className:v.a.convertcontent,id:"newmanifest",readOnly:!0}))))},w={id:"manifest-convert",title:"Manifest Convert from KaiOs2.5 to KaiOS3.0",sidebar_label:"Manifest Convertor",hide_table_of_contents:!0},j={unversionedId:"09.migration-from-2.5/manifest-convert",id:"version-sfp-3.0/09.migration-from-2.5/manifest-convert",isDocsHomePage:!1,title:"Manifest Convert from KaiOs2.5 to KaiOS3.0",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/manifest-convert.md",slug:"/09.migration-from-2.5/manifest-convert",permalink:"/docs/sfp-3.0/09.migration-from-2.5/manifest-convert",version:"sfp-3.0",sidebar_label:"Manifest Convertor",sidebar:"version-sfp-3.0/docs",previous:{title:"Manifest Change",permalink:"/docs/sfp-3.0/09.migration-from-2.5/manifest-change"}},_=[],N={rightToc:_};function k(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},N,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)(E,{mdxType:"ManifestConvert"}))}k.isMDXComponent=!0},398:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),f=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=f(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=f(t),m=r,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return t?i.a.createElement(p,s(s({ref:n},l),{},{components:t})):i.a.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);