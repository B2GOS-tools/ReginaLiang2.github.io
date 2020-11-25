(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{134:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return p})),n.d(r,"default",(function(){return l}));var a=n(3),t=n(8),o=(n(0),n(396)),i={id:"other-SpeakerManager",title:"MozSpeakerManager"},c={unversionedId:"09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager",id:"version-sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager",isDocsHomePage:!1,title:"MozSpeakerManager",description:"Description",source:"@site/versioned_docs/version-sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/readme.md",slug:"/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager",permalink:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager",version:"sfp-3.0"},p=[{value:"Description",id:"description",children:[]},{value:"Interfaces",id:"interfaces",children:[{value:"SpeakerPolicy",id:"speakerpolicy",children:[]},{value:"SpeakerManager",id:"speakermanager",children:[]}]},{value:"Examples",id:"examples",children:[]}],s={rightToc:p};function l(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"General Use Cases: Allow application can control acoustic sound output through speaker."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"interfaces"},"Interfaces"),Object(o.b)("h3",{id:"speakerpolicy"},"SpeakerPolicy"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/*\n * SpeakerPolicy is used to configure the force speaker policy of a SpeakerManager.\n * - "foreground-or-playing" (default value):\n *   SpeakerManagerService will try to respect our "forcespeaker" setting when our\n *   SpeakerManager is in the foreground, or our APP is playing. Note that foreground\n *   state has a higher priority than playing state. If we are in the foreground and\n *   not playing, but some other background APP is playing, then SpeakerManagerService\n *   will respect our "forcespeaker" setting.\n * - "playing":\n *   SpeakerManagerService will try to respect our "forcespeaker" setting only when\n *   our APP is playing.\n * - "query":\n *   Configure SpeakerManager as query mode. In this mode, SpeakerManager can only be\n *   used to query "speakerforced" status, but our "forcespeaker" setting is never\n *   applied. The event "onspeakerforcedchange" is still effective.\n */\nenum SpeakerPolicy {\n  "foreground-or-playing",\n  "playing",\n  "query"\n};\n')),Object(o.b)("h3",{id:"speakermanager"},"SpeakerManager"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"interface MozSpeakerManager : EventTarget {\n  [Throws]\n  constructor(optional SpeakerPolicy policy);\n\n  /* query the speaker status */\n  readonly attribute boolean speakerforced;\n  /* force device device's acoustic sound output through speaker */\n  attribute boolean forcespeaker;\n  /* this event will be fired when device's speaker forced status change */\n  attribute EventHandler onspeakerforcedchange;\n};\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var sm = new navigator.SpeakerManager();\n// fired anytime when device's speaker status changed\nsm.onspeakerforcedchange = function() {\n  bool enabled = sm.speakerforced;\n  // Refresh UI\n  return;\n}\nif (sm.speakerforced) {\n  // device's speaker is on\n} else {\n  sm.forcespeaker = true;\n}\n")))}l.isMDXComponent=!0},396:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return g}));var a=n(0),t=n.n(a);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),l=function(e){var r=t.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},d=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?t.a.createElement(g,c(c({ref:r},s),{},{components:n})):t.a.createElement(g,c({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);