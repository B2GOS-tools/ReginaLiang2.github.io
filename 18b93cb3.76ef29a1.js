(window.webpackJsonp=window.webpackJsonp||[]).push([[34,87],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(404),o=t(468),l=t(403);a.default=function(){var e=Object(l.useVersions)();return r.a.createElement(o.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.a.createElement("main",{className:"container margin-vert--lg"},r.a.createElement("h1",null,"Docusaurus documentation versions"),e&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("p",null,"Here you can find the documentation for all versions."),r.a.createElement("table",null,r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.label),r.a.createElement("td",null,r.a.createElement(c.a,{to:e.path},"Documentation")))})))))))}},473:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(469),o=t.n(c),l=t(402),s=t(397);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(l.useHistory)(),u=Object(s.default)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(317),t.e(323)]).then(t.bind(null,476)),t.e(220).then(t.t.bind(null,475,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,i.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},f=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:f,onBlur:f,ref:c}))}},474:function(e,a,t){"use strict";var n=t(3),r=t(8),c=t(400),o=t(398),l=t(397),s=t(0),i=t.n(s),u=t(57),m=t.n(u),d=function(e){var a=e.to,t=e.href,c=e.label,l=Object(r.a)(e,["to","href","label"]),s=Object(o.a)(null!=t?t:"",{forcePrependBaseUrl:void 0}),u=Object(o.a)(null!=a?a:"");return i.a.createElement("a",Object(n.a)({},null!=t?{href:s,rel:"noopener noreferrer",target:"_blank"}:{href:u},l),c)};a.a=function(){var e=Object(l.default)().siteConfig.themeConfig.footer,a=e.links,t=e.copyright,n=e.style;return i.a.createElement("footer",{className:Object(c.a)(m.a.footer,{"footer--dark":"dark"===n})},i.a.createElement("div",{className:Object(c.a)(m.a.footer__content)},i.a.createElement("a",{href:"https://www.kaiostech.com/",className:Object(c.a)(m.a.home__link)},i.a.createElement("img",{alt:"foot logo",className:m.a.kaios__logo,src:"/img/footer-logo.svg",title:"foot logo"})),i.a.createElement("div",{className:Object(c.a)(m.a["footer__column--right"])},a.map((function(e,a){var t;return i.a.createElement("div",{key:a,className:m.a.footer__items},i.a.createElement("ul",{className:m.a.footer__items},null===(t=e.items)||void 0===t?void 0:t.map((function(e){var a;return i.a.createElement("li",{className:m.a.footer__item,key:null!==(a=e.href)&&void 0!==a?a:e.to},i.a.createElement(d,e))}))))})),i.a.createElement("span",{className:m.a.footer__copyright},t))))}}}]);