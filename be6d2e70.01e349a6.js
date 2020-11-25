(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{307:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return m}));var n=t(3),r=t(8),i=(t(0),t(396)),o={id:"alarm",title:"Alarm"},s={unversionedId:"06.api/web-apis/alarm/alarm",id:"06.api/web-apis/alarm/alarm",isDocsHomePage:!1,title:"Alarm",description:"Description",source:"@site/docs/06.api/web-apis/alarm/alarm.md",slug:"/06.api/web-apis/alarm/alarm",permalink:"/docs/06.api/web-apis/alarm/alarm",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Schedule alarms",id:"schedule-alarms",children:[{value:"Alarms ignoring time zones",id:"alarms-ignoring-time-zones",children:[]},{value:"Alarms honoring time zones",id:"alarms-honoring-time-zones",children:[]}]},{value:"Managing alarms",id:"managing-alarms",children:[{value:"mozAlarm",id:"mozalarm",children:[]}]},{value:"Handling alarms",id:"handling-alarms",children:[]},{value:"Permissions for the Alarm API",id:"permissions-for-the-alarm-api",children:[]}],c={rightToc:l};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Alarm API")," allows applications to schedule actions to be run in the future. For example, some applications like alarm-clock, calendar or auto-update might need to utilize the Alarm API to trigger particular device behaviors at specified time points."),Object(i.b)("p",null,"By itself, the Alarm API just allows to schedule alarms. An alarm is dispatched to applications through the System Message API, so applications which want to react to alarms have to register themselves to the alarm messages."),Object(i.b)("p",null,"Alarms are set using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarms"}),"Navigator.mozAlarms")," object which is an instance of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarmsManager"}),"MozAlarmsManager")," interface."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," The term alarm in the Alarms API is not the same as an alarm used by the Clock app. The Alarms API wakes up applications, the Clock wakes up humans. The Clock uses the Alarm API to be notified when the time is right to wake up humans.")),Object(i.b)("h2",{id:"schedule-alarms"},"Schedule alarms"),Object(i.b)("p",null,"The first things to do when using alarm is to schedule alarms. There are two kind of alarms based on the respect of the time zone. In both case it's done using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarmsManager/add"}),"MozAlarmsManager.add()")," method."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If an alarm is not targeted at a specific application, the system will dispatch all the alarms to all the applications listening for alarms.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," You need to use the same URL for setting and receiving an alarm. For example, If you invoke ",Object(i.b)("inlineCode",{parentName:"p"},"navigator.mozAlarms.add()")," on ",Object(i.b)("inlineCode",{parentName:"p"},"foo.html")," or ",Object(i.b)("inlineCode",{parentName:"p"},"index.html?foo=bar"),", but have ",Object(i.b)("inlineCode",{parentName:"p"},'{ "alarm": "/index.html" }')," in your manifest messages field, you'll never receive the alarm.")),Object(i.b)("h3",{id:"alarms-ignoring-time-zones"},"Alarms ignoring time zones"),Object(i.b)("p",null,"Those kind of alarms is dispatched based on the local time of the device. If the user of the device changes its time zone, the alarm will be dispatched based on the new time zone. For example, if a user is in Paris and sets an alarm that should be dispatched at 12 PM CET ",Object(i.b)("em",{parentName:"p"},"(Central European Time)")," and that user travels to San Francisco, the alarm will be dispatched at 12 PM PDT ",Object(i.b)("em",{parentName:"p"},"(Pacific Daylight Time)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// This the date to schedule the alarm\nvar myDate = new Date('May 15, 2012 16:20:00');\n\n// This is arbitrary data pass to the alarm\nvar data = {\n  foo: 'bar'\n};\n\n// The \"ignoreTimezone\" string is what make the alarm ignoring it\nvar request = navigator.mozAlarms.add(myDate, 'ignoreTimezone', data);\n\nrequest.onsuccess = function() {\n  console.log('The alarm has been scheduled');\n};\n\nrequest.onerror = function() {\n  console.log('An error occurred: ' + this.error.name);\n};\n")),Object(i.b)("h3",{id:"alarms-honoring-time-zones"},"Alarms honoring time zones"),Object(i.b)("p",null,"Those kind of alarms are dispatched based on the time in the time zone that defines when the alarm has been scheduled. If for some reason, the user of the device changes its time zone the alarm will be dispatched based on the original time zone. For example, if a user is in Paris and set an alarm that should be dispatched at 12pm CET ",Object(i.b)("em",{parentName:"p"},"(Central European Time)")," and if that user travel to San Francisco, the alarm will be dispatched at 3 AM PDT ",Object(i.b)("em",{parentName:"p"},"(Pacific Daylight Time)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// This the date to schedule the alarm\nvar myDate = new Date('May 15, 2012 16:20:00');\n\n// This is arbitrary data pass to the alarm\nvar data = {\n  foo: 'bar'\n};\n\n// The \"honorTimezone\" string is what make the alarm honoring it\nvar request = navigator.mozAlarms.add(myDate, 'honorTimezone', data);\n\nrequest.onsuccess = function() {\n  console.log('The alarm has been scheduled');\n};\n\nrequest.onerror = function() {\n  console.log('An error occurred: ' + this.error.name);\n};\n")),Object(i.b)("h2",{id:"managing-alarms"},"Managing alarms"),Object(i.b)("p",null,"Once an alarm is scheduled, it's still possible to manage it."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarmsManager/getAll"}),"MozAlarmsManager.getAll()")," method will return the complete list of alarms currently scheduled by the application. This list is an Array of mozAlarm objects."),Object(i.b)("h3",{id:"mozalarm"},"mozAlarm"),Object(i.b)("p",null,"Those objects are anonymous JavaScript objects with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"id"))," - A number representing the id of the alarm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"date"))," - A Date object representing the scheduled time for the alarm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"respectTimezone"))," - A string indicating if the alarm must respect or ignore the timezone information of the date object. Its value can be ignoreTimezone or honorTimezone")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"data"))," - A JavaScript object containing any data that were stored with the alarm"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var request = navigator.mozAlarms.getAll();\n\nrequest.onsuccess = function() {\n  this.result.forEach(function(alarm) {\n    console.log('Id:', alarm.id);\n    console.log('date:', alarm.date);\n    console.log('respectTimezone:', alarm.respectTimezone);\n    console.log('data:', JSON.stringify(alarm.data));\n  });\n};\n\nrequest.onerror = function() {\n  console.log('An error occurred:', this.error.name);\n};\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarmsManager/remove"}),"MozAlarmsManager.remove")," method is used to unschedule an existing alarm."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var alarmId;\n\n// Set an alarm and store it's id\nvar request = navigator.mozAlarms.add(\n  new Date('May 15, 2012 16:20:00'),\n  'honorTimezone'\n);\n\nrequest.onsuccess = function() {\n  alarmId = this.result;\n};\n\n// ...\n\n// Later on, removing the alarm if it exists\nif (alarmId) {\n  navigator.mozAlarms.remove(alarmId);\n}\n")),Object(i.b)("h2",{id:"handling-alarms"},"Handling alarms"),Object(i.b)("p",null,"Any application can react when an alarm is dispatched by the system. In order to be able to handle any alarms, an application must register itself as an alarm handler. This is done through the System Messaging API in two steps:"),Object(i.b)("p",null,"First, the applications must include ",Object(i.b)("inlineCode",{parentName:"p"},"alarm")," to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/02.getting-started/02.main-concepts/manifest#messages"}),"messages property of its application manifest")," with the URL to the document which registers the callback function to be used when an alarm is dispatched."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"messages": [\n  { "alarm": "/index.html" }\n]\n')),Object(i.b)("p",null,"Second, the application must bind a callback function with the ",Object(i.b)("inlineCode",{parentName:"p"},"alarm")," message. This is done using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/mozsetmessagehandler/mozsetmessagehandler"}),"navigator.mozSetMessageHandler()")," method. This callback function will receive a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/alarm/mozAlarms"}),"mozAlarm")," object containing the data attached to the alarm."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigator.mozSetMessageHandler('alarm', function(mozAlarm) {\n  alert('alarm fired:', JSON.stringify(mozAlarm.data));\n});\n")),Object(i.b)("p",null,"If an application wants to know if there is a pending alarm at the system level, it's possible to use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/06.api/web-apis/mozhaspendingmessage/mozhaspendingmessage"}),"navigator.mozHasPendingMessage()")," method with the value alarm."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigator.mozHasPendingMessage('alarm');\n")),Object(i.b)("h2",{id:"permissions-for-the-alarm-api"},"Permissions for the Alarm API"),Object(i.b)("p",null,"Please note that while the Alarm API is not privileged or certified, you should still include ",Object(i.b)("inlineCode",{parentName:"p"},"permissions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"messages")," entries in your ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.webapp")," file when including it in an installable open Web app."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "permissions": {\n    "alarms": {\n      "description": "Required to schedule alarms"\n    }\n  },\n  "messages": [\n    { "alarm": "/index.html" }\n  ]\n}\n')))}m.isMDXComponent=!0},396:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=m(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=n,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?r.a.createElement(h,s(s({ref:a},c),{},{components:t})):r.a.createElement(h,s({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);