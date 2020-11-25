(window.webpackJsonp=window.webpackJsonp||[]).push([[237,115],{311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(402),a(470)),i=(a(406),a(399),a(400)),o=(a(312),{section1:{imageSrc:"img/home-center/_presentation/kaios.png",imageSrcSet:"img/home-center/_presentation/kaios.png?ratio=2 2x, img/home-center/_presentation/kaios.png?ratio=3 3x",title:"KaiOS, enable tomorrow",description:r.a.createElement(r.a.Fragment,null,"Reach millions of new users through the KaiStore, the home for apps on phones powered by KaiOS.")},section2:{title:"About KaiOS",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"KaiOS")," is a web-based mobile operating system that enables a new category of smart feature phones. It is forked from B2G (Boot to Gecko), a successor of the discontinued Firefox OS.",r.a.createElement("br",null),"KaiOS brings support of 4G/LTE, GPS, and Wi-Fi, as well as HTML5-based apps and longer battery life, to non-touch devices. It has an optimized user interface for smart feature phones, needs little memory, and consumes less energy than other operating systems. It also comes with the KaiStore, which enables users to download applications in categories like social media, games, navigation, and streaming entertainment.")},section3:{imageSrc:"img/home-center/_architecture/architecture.png",imageSrcSet:"img/home-center/_architecture/architecture.png?ratio=2 2x, /user/pages/01.introduction/_architecture/architecture.png?ratio=3 3x",title:"Architecture",description:r.a.createElement(r.a.Fragment,null,"Find out how KaiOS works in this section, which includes everything from conceptual architecture to detailed flows."),linkHref:"/introduction/architecture",linkBtn:"Learn More"},section4:{imageSrc:"img/home-center/_technologies/tehnologies-feature-phone.png",imageSrcSet:"img/home-center/_technologies/tehnologies-feature-phone.png?ratio=2 2x, /user/pages/01.introduction/_technologies/tehnologies-feature-phone.png?ratio=3 3x",title:"Technologies",description:r.a.createElement(r.a.Fragment,null,"KaiOS apps are based on web technologies\u2013HTML, CSS, and JavaScript\u2013and are run by Gecko runtime."),linkHref:"/introduction/technologies",linkBtn:"Learn More"},section5:{imageSrc:"img/home-center/_kaistore/kaistore.png",title:"KaiStore",description:r.a.createElement(r.a.Fragment,null,"KaiStore is a service channel to showcase your product and allow users to install an app on their phones."),linkHref:"/submit-to-kaistore",linkBtn:"Learn More"}});function s(){return r.a.createElement("div",{className:"content modular"},r.a.createElement("section",{className:"modular-banner with-bg section1"},r.a.createElement("img",{src:Object(i.a)(o.section1.imageSrc),srcSet:Object(i.a)(o.section1.imageSrcSet),className:"banner-image banner-image-right"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,o.section1.title),r.a.createElement("p",null,o.section1.description," "))),r.a.createElement("section",{className:"modular-text"},r.a.createElement("h1",null,o.section2.title),r.a.createElement("p",null,o.section2.description)),r.a.createElement("section",{className:"modular-banner with-bg section3"},r.a.createElement("img",{src:Object(i.a)(o.section3.imageSrc),srcSet:Object(i.a)(o.section3.imageSrcSet),className:"banner-image banner-image-left banner-image-bottom"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,o.section3.title),r.a.createElement("p",null,o.section3.description),r.a.createElement("p",null,r.a.createElement("a",{href:o.section3.linkHref,className:"banner-button"},o.section3.linkBtn)))),r.a.createElement("section",{className:"modular-banner section4"},r.a.createElement("img",{src:Object(i.a)(o.section4.imageSrc),srcSet:Object(i.a)(o.section4.imageSrcSet),className:"banner-image banner-image-right banner-image-bottom"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,o.section4.title),r.a.createElement("p",null,o.section4.description),r.a.createElement("p",null,r.a.createElement("a",{href:o.section4.linkHref,className:"banner-button"},o.section4.linkBtn)))),r.a.createElement("section",{className:"modular-banner with-bg section5"},r.a.createElement("img",{src:Object(i.a)(o.section5.imageSrc),className:"banner-image banner-image-center banner-image-center"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,o.section5.title),r.a.createElement("p",null,o.section5.description),r.a.createElement("p",null,r.a.createElement("a",{href:o.section5.linkHref,className:"banner-button"},o.section5.linkBtn)))))}t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(s,null))}},475:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(471),i=a.n(c),o=a(404),s=a(399);t.a=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),l=Object(o.useHistory)(),m=Object(s.default)().siteConfig,u=(void 0===m?{}:m).baseUrl,h=function(){t.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([a.e(318),a.e(324)]).then(a.bind(null,478)),a.e(220).then(a.t.bind(null,477,7))]).then((function(e){!function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=u+a.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),t.current=!0)},g=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:g,onBlur:g,ref:c}))}},476:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(402),i=a(400),o=a(399),s=a(0),l=a.n(s),m=a(57),u=a.n(m),h=function(e){var t=e.to,a=e.href,c=e.label,o=Object(r.a)(e,["to","href","label"]),s=Object(i.a)(null!=a?a:"",{forcePrependBaseUrl:void 0}),m=Object(i.a)(null!=t?t:"");return l.a.createElement("a",Object(n.a)({},null!=a?{href:s,rel:"noopener noreferrer",target:"_blank"}:{href:m},o),c)};t.a=function(){var e=Object(o.default)().siteConfig.themeConfig.footer,t=e.links,a=e.copyright,n=e.style;return l.a.createElement("footer",{className:Object(c.a)(u.a.footer,{"footer--dark":"dark"===n})},l.a.createElement("div",{className:Object(c.a)(u.a.footer__content)},l.a.createElement("a",{href:"https://www.kaiostech.com/",className:Object(c.a)(u.a.home__link)},l.a.createElement("img",{alt:"foot logo",className:u.a.kaios__logo,src:"/img/footer-logo.svg",title:"foot logo"})),l.a.createElement("div",{className:Object(c.a)(u.a["footer__column--right"])},t.map((function(e,t){var a;return l.a.createElement("div",{key:t,className:u.a.footer__items},l.a.createElement("ul",{className:u.a.footer__items},null===(a=e.items)||void 0===a?void 0:a.map((function(e){var t;return l.a.createElement("li",{className:u.a.footer__item,key:null!==(t=e.href)&&void 0!==t?t:e.to},l.a.createElement(h,e))}))))})),l.a.createElement("span",{className:u.a.footer__copyright},a))))}}}]);