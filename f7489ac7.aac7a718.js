(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{385:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(398)),i={id:"tcpSocketAPI",title:"TCP Socket API"},c={unversionedId:"09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI",isDocsHomePage:!1,title:"TCP Socket API",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI.md",slug:"/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI",version:"sfp-3.0"},s=[{value:"Description",id:"description",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Overview",id:"overview",children:[{value:"Opening a socket",id:"opening-a-socket",children:[]},{value:"Listening for connections",id:"listening-for-connections",children:[]},{value:"Sending data",id:"sending-data",children:[]},{value:"Getting data",id:"getting-data",children:[]},{value:"Closing a socket",id:"closing-a-socket",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket API")," offers a whole API to open and use a TCP connection.\nThis allows app makers to implement any protocol available on top of TCP such as IMAP, IRC, POP, HTTP, etc.,\nor even build their own to sustain any specific needs they could have."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("p",null,"In order to use that API, as for all privileged API, it's required to request permission to use it within the app manifest."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"permissions" : {\n  "tcp-socket" : {\n    "description" : "Create TCP sockets and communicate over them."\n  }\n}\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"This API is available through the ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator.mozTCPSocket")," property which is itself a ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket")," object."),Object(r.b)("h3",{id:"opening-a-socket"},"Opening a socket"),Object(r.b)("p",null,"Opening a socket is done with the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.open()")," method. This method expects up to three parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A string representing the hostname of the server to connect to (it can also be its raw IP address)."),Object(r.b)("li",{parentName:"ul"},"A number representing the TCP port to be used by the socket (some protocols have a standard port, for example 80 for HTTP,\n447 for SSL, 25 for SMTP, etc. Port numbers beyond 1024 are not assigned to any specific protocol and can be used for any purpose.)"),Object(r.b)("li",{parentName:"ul"},"A optional object containing up to two options: a boolean named useSecureTransport is the socket needed to use SSL,\nfalse by default; and a string named binaryType allows to state the type of data retrieved by the application through the data event,\nwith the expected values string or arraybuffer. By default, it is string.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var socket = navigator.mozTCPSocket.open('localhost', 80);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Only certified apps can use a port below 1024.")),Object(r.b)("h3",{id:"listening-for-connections"},"Listening for connections"),Object(r.b)("p",null,"Listening for connections is done with the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.listen()")," method. This method expects up to three parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A number representing the TCP port to be used to listen for connections."),Object(r.b)("li",{parentName:"ul"},'An optional object specifying the details of the socket. This object expects a property called binaryType,\nwhich is a string that can have two possible values: "string" or "arraybuffer".\nIf the value is "arraybuffer" then the ',Object(r.b)("inlineCode",{parentName:"li"},"TCPSocket.send()")," will use ",Object(r.b)("inlineCode",{parentName:"li"},"ArrayBuffers")," and the data received from the remote connection will also be available in that format."),Object(r.b)("li",{parentName:"ul"},"A number representing the maximum length that the pending connections queue can grow.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var socket = navigator.mozTCPSocket.listen(8080);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Only certified apps can use a port below 1024.")),Object(r.b)("h3",{id:"sending-data"},"Sending data"),Object(r.b)("p",null,"Sending data is done using the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.send()")," method. The data sent can be either a string or a ",Object(r.b)("inlineCode",{parentName:"p"},"Uint8Array")," object;\nhowever, remember that a TCP socket always deals with binary data. For that reason,\nit's a lot safer to use ",Object(r.b)("inlineCode",{parentName:"p"},"Uint8Array")," instead of a string when sending data."),Object(r.b)("p",null,"As per the TCP protocol, it's a good optimization to send a maximum of 64kb of data at the same time.\nAs long as less than 64kb has been buffered, a call to the ",Object(r.b)("inlineCode",{parentName:"p"},"send")," method returns true. Once the buffer is full,\nthe method will return false which indicates the application should make a pause to flush the buffer.\nEach time the buffer is flushed, a ",Object(r.b)("inlineCode",{parentName:"p"},"drain")," event is fired and the application can use it to resume data sending."),Object(r.b)("p",null,"It's possible to know exactly the current amount of data buffered with the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.bufferedAmount")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function getData() {\n  var data;\n\n  // do stuff that will retrieve data\n\n  return data;\n}\n\nfunction pushData() {\n  var data;\n\n  do {\n    data = getData();\n  } while (data != null && socket.send(data));\n}\n\n// Each time the buffer is flushed\n// we try to send data again.\nsocket.ondrain = pushData;\n\n// Start sending data.\npushData();\n")),Object(r.b)("h3",{id:"getting-data"},"Getting data"),Object(r.b)("p",null,"Each time the socket gets some data from the host, it fires a ",Object(r.b)("inlineCode",{parentName:"p"},"data")," event. This event will give access to the data from the socket.\nThe type of the data depends on the option set when the socket was opened (see above)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"socket.ondata = function (event) {\n  if (typeof event.data === 'string') {\n    console.log('Get a string: ' + event.data);\n  } else {\n    console.log('Get a Uint8Array');\n  }\n}\n")),Object(r.b)("p",null,"As the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," event is fired as much as needed, it can sometimes be necessary to pause the flow of incoming data. To that end,\ncalling the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.suspend()")," method will pause reading incoming data and stop firing the ",Object(r.b)("inlineCode",{parentName:"p"},"data"),".\nIt's possible to start reading data and firing events again by calling the ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.resume()")," method."),Object(r.b)("h3",{id:"closing-a-socket"},"Closing a socket"),Object(r.b)("p",null,"Closing a socket is simply done using ",Object(r.b)("inlineCode",{parentName:"p"},"TCPSocket.close()"),"."))}p.isMDXComponent=!0},398:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);