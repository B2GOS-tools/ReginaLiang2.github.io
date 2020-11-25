(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{288:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(8),r=(a(0),a(396)),l={id:"permissions",title:"App Permissions"},c={unversionedId:"03.core-developer-topics/permissions",id:"version-sfp-3.0/03.core-developer-topics/permissions",isDocsHomePage:!1,title:"App Permissions",description:"The permissions field in the app manifest controls the app's access to various sensitive APIs on the device (sometimes called",source:"@site/versioned_docs/version-sfp-3.0/03.core-developer-topics/permissions.md",slug:"/03.core-developer-topics/permissions",permalink:"/docs/sfp-3.0/03.core-developer-topics/permissions",version:"sfp-3.0",sidebar:"version-sfp-3.0/docs",previous:{title:"Notifications",permalink:"/docs/sfp-3.0/03.core-developer-topics/using-push-notifications"},next:{title:"Launcher Icon",permalink:"/docs/sfp-3.0/04.design-guide/launcher-icon"}},i=[{value:"Hosted app and privileged app permissions",id:"hosted-app-and-privileged-app-permissions",children:[]},{value:"Certified app permissions",id:"certified-app-permissions",children:[]}],d={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The permissions field in the app manifest controls the app's access to various sensitive APIs on the device (sometimes called\nWebAPIs). The permissions are described in the following tables. The three levels of permission, in brief, are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Web apps"),": These only have a basic level of permissions, and don't have access to privileged or internal APIs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Privileged apps"),": These have all the permissions of web apps plus more. Hosted apps can't be privileged \u2014 they must be packaged apps.")),Object(r.b)("h3",{id:"hosted-app-and-privileged-app-permissions"},"Hosted app and privileged app permissions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Manifest permission"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"API name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Minimum app type required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"access")," property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default granted"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"alarms")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Alarm"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-capture")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"getUserMedia, Web Speech API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted for getUserMedia, privileged for Web Speech API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for all installed App types for getUserMedia, ",Object(r.b)("inlineCode",{parentName:"td"},"Allow")," for Web Speech API.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-alarm")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-content")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-normal")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-notification")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"browser")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Browser"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"camera")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Camera"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged in KaiOS certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for all installed App types.`")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"contacts")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contacts"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"readonly"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readwrite"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readcreate"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"createonly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for all installed App types.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"desktop-notification")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notification"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for Web content. ",Object(r.b)("inlineCode",{parentName:"td"},"Allow")," for all installed App types.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device-storage:music")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device Storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"readonly"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readwrite"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readcreate"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"createonly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device-storage:pictures")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device Storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"readonly"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readwrite"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readcreate"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"createonly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device-storage:sdcard")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device Storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"readonly"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readwrite"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readcreate"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"createonly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device-storage:videos")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device Storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"readonly"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readwrite"),", ",Object(r.b)("inlineCode",{parentName:"td"},"readcreate"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"createonly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"fmradio")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FM Radio"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"geolocation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Geolocation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," (even for certified Apps)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"input")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Keyboard"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mobileid")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mobile identity"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mobilenetwork")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mobile Network"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"moz-firefox-accounts")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Firefox Accounts"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for all installed App types.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"nfc")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NFC API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"nfc-share")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NFC API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"nfc-read"),", ",Object(r.b)("inlineCode",{parentName:"td"},"nfc-write")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NFC API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Was certified/internal at this stage in development."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"push")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simple Push"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"speech-recognition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Web Speech API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"systemXHR")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SystemXHR"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tcp-socket")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCP Socket"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privileged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Allow"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"video-capture")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GetUserMedia"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hosted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Prompt")," for all installed App types.")))),Object(r.b)("h3",{id:"certified-app-permissions"},"Certified app permissions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Manifest permission"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"API name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Minimum app type required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"access")," property"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"attention")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Attention Screen"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-ringer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-telephony")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"audio-channel-publicnotification")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AudioChannels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"background-sensors")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background Sensor"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"backgroundservice (Deprecated)")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background Services"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bluetooth")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"browser:embedded-system-app")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Browser"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"camera")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Camera"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cellbroadcast")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"No permission needed, but datastores-access/datastores-owned needs to be set in the manifest (see Data Store API Manifest fields.)")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Store"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"datastores-access/ datastores-owned")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device-storage:apps")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device Storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"read")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"embed-apps")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Embed Apps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"idle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Idle"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mobileconnection")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mobile Connection"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"network-events")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Network Events"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"networkstats-manage")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Network Stats"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"open-remote-window")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Open out-of-process windows"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"permissions")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Permissions (Firefox OS)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"power")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Power Management"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"presentation-device-manage")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Presentation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"settings")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly or readwrite")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sms")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WebSMS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"telephony")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Web Telephony"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TimeManager"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"voicemail")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Voicemail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"webapps-manage")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Open Webapps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"wifi-manage")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Management"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"wappush")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WAP Push"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certified"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")))))}O.isMDXComponent=!0},396:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var d=b.a.createContext({}),O=function(e){var t=b.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),j=O(a),o=n,m=j["".concat(l,".").concat(o)]||j[o]||p[o]||r;return a?b.a.createElement(m,c(c({ref:t},d),{},{components:a})):b.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<r;d++)l[d]=a[d];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);