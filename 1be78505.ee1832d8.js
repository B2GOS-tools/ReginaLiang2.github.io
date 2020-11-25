(window.webpackJsonp=window.webpackJsonp||[]).push([[40,87,321],{393:function(e,a,t){"use strict";t.r(a);var o=t(3),r=t(0),i=t.n(r),n=t(556),l=t(477),s=t(402),c=t(468),p=t(397),u=t(396),d=t(513),b=t(27),g=t(400),m=t(113),h=t.n(m);var f=function(e){var a=e.paths,t=e.lastRoute;return i.a.createElement("div",{className:Object(g.a)(h.a.menu,"menu--responsive",h.a.breadcrumb)},i.a.createElement("a",{href:t,className:Object(g.a)(h.a["breadcrumb-link"],h.a.rootPath)},"API"),a&&a.length>0?a.map((function(e,a){return i.a.createElement("span",{key:a},">",i.a.createElement("a",{href:e.url,className:h.a["breadcrumb-link"]},e.label))})):null)},w=t(406),v=t(114),S=t.n(v);var x=function(e){var a;(a=e.selectAPI&&e.selectAPI.children?e.selectAPI.children:e.selectAPI&&e.selectAPI.parent?e.selectAPI.parent.children:[]).sort((function(e,a){return w.a.compareFn(e.label.substr(0,1),a.label.substr(0,1))}));var t=e.currentDocRoute.path;return i.a.createElement("div",{className:S.a.relatedPageContainer},i.a.createElement("div",{className:S.a["related-pages-title"]},"Related Pages"),a&&a.length>0?i.a.createElement("div",{className:S.a.relatedPageList},i.a.createElement("ul",{className:S.a["related-pages"]},a.map((function(e,a){return i.a.createElement("li",{key:a,className:S.a["related-pages-item"]},t===e.url?i.a.createElement("span",{className:S.a["related-pages-link"]},e.label):i.a.createElement("a",{className:S.a["related-pages-link"],href:e.url},e.label))})))):null)},M=t(115),k=t.n(M),B={};var E=function(e){var a,n,l=Object(r.useState)(!1),s=l[0],c=l[1];B={},[],n=e.versionMetadata.version,function(e,a){var t=[];t=t.concat(e);for(var o=function(){var e=t.shift();e.url===a?(B[e.url]=e,t=[]):e.children&&(e.children.map((function(a){return a.parent=e})),t=e.children.concat(t))};t.length>0;)o()}(n?t(407)("./js-"+n+"/webAPIs.js"):[],e.currentDocRoute.path);var u=function(e){var a=[],t=B[e];if(t)for(a.push(t);t&&t.parent;)a.unshift(t.parent),t=t.parent;return a}(e.currentDocRoute.path),d=B[e.currentDocRoute.path],b=Object(p.default)().siteConfig.themeConfig.hideableSidebar;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:Object(g.a)(k.a.sidebar,"menu",k.a.menu,"menu--responsive",(a={"menu--show":s},a[k.a.sidebarHidden]=e.isHidden,a))},i.a.createElement("button",{"aria-label":s?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!s)}},s?i.a.createElement("span",{className:Object(g.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),i.a.createElement("div",{className:Object(g.a)("menu__list",k.a.sidebarContent)},i.a.createElement(f,Object(o.a)({},e,{paths:u})),i.a.createElement(x,Object(o.a)({},e,{selectAPI:d}))),b&&i.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(g.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:e.onCollapse})))},C=t(116),D=t.n(C);var A=function(e){var a,t,n=Object(p.default)(),m=n.siteConfig,h=n.isClient,f=e.route.routes,w=(e.versionMetadata,e.location),v=f.find((function(e){return Object(s.matchPath)(w.pathname,e)})),S=Object(r.useState)(!1),x=S[0],M=S[1],k=Object(r.useState)(!1),B=k[0],C=k[1],A=Object(r.useCallback)((function(){B&&C(!1),M(!x)}),[B]);return v?i.a.createElement(c.a,{description:m.description,key:h.toString(),title:"Introduction"},i.a.createElement("div",{className:D.a.docPage},i.a.createElement("div",{className:Object(g.a)(D.a.APIsSidebarContainer,(a={},a[D.a.APIsSidebarContainerHidden]=x,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(D.a.APIsSidebarContainer)&&x&&C(!0)},role:"complementary"},i.a.createElement(E,Object(o.a)({},e,{currentDocRoute:v,onCollapse:A,isHidden:B})),B&&i.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:A,onClick:A})),i.a.createElement("main",{className:D.a.docMainContainer},i.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",D.a.docItemWrapper,(t={},t[D.a.docItemWrapperEnhanced]=x,t))},i.a.createElement(u.a,{components:d.a},Object(b.a)(f)))))):i.a.createElement(l.default,e)},y=["web-apis/","next-new-apis/"];a.default=function(e){var a=e.route.routes,t=(e.versionMetadata,e.location),r=a.find((function(e){return Object(s.matchPath)(t.pathname,e)}));if(!r)return i.a.createElement(l.default,e);var c=!1;if(y.forEach((function(e){r.path.indexOf(e)>-1&&(c=!0)})),c){var p="undefined"==typeof sessionStorage?"":sessionStorage.getItem("lastRoute");return i.a.createElement(A,Object(o.a)({},e,{lastRoute:p}))}return"undefined"!=typeof sessionStorage&&sessionStorage.setItem("lastRoute",r.path),i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,e))}},406:function(e,a,t){"use strict";var o={compareFn:function(e,a){return e.localeCompare(a)<=-1?-1:e.localeCompare(a)>=1?1:0}};a.a=o},407:function(e,a,t){var o={"./js-current/webAPIs.js":408,"./js-sfp-3.0/webAPIs.js":430,"./js-st-1.0/webAPIs.js":465};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=407},408:function(e,a,t){var o=[t(409),t(410),t(411),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428),t(429)];e.exports=o},409:function(e,a){e.exports={label:"Alarm",url:"/docs/06.api/web-apis/alarm/alarm",children:[{label:"mozAlarms",url:"/docs/06.api/web-apis/alarm/mozAlarms"},{label:"mozAlarmsManager",url:"/docs/06.api/web-apis/alarm/mozAlarmsManager",children:[{label:"MozAlarmsManager.getAll()",url:"/docs/06.api/web-apis/alarm/mozAlarmsManager/getAll"},{label:"MozAlarmsManager.add()",url:"/docs/06.api/web-apis/alarm/mozAlarmsManager/add"},{label:"MozAlarmsManager.remove()",url:"/docs/06.api/web-apis/alarm/mozAlarmsManager/remove"}]}]}},410:function(e,a){e.exports={label:"AudioContext",url:"/docs/06.api/web-apis/audiocontext/audiocontext"}},411:function(e,a){e.exports={label:"Bluetooth",url:"/docs/06.api/web-apis/bluetooth/bluetooth",children:[{label:"BluetoothAdapter",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter",children:[{label:"BluetoothAdapter.discoverable",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable"},{label:"BluetoothAdapter.discovering",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/05.discovering"},{label:"BluetoothAdapter.name",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/06.name"},{label:"BluetoothAdapter.ona2dpstatuschanged",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged"},{label:"BluetoothAdapter.onhfpstatuschanged",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/12.onhfpstatuschanged"},{label:"BluetoothAdapter.onrequestmediaplaystatus",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/14.onrequestmediaplaystatus"},{label:"BluetoothAdapter.onscostatuschanged",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged"},{label:"BluetoothAdapter.getPairedDevices",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/16.getpaireddevices"},{label:"BluetoothAdapter.pair",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/17.pair"},{label:"BluetoothAdapter.setDiscoverable",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/18.setdiscoverable"},{label:"BluetoothAdapter.startDiscovery",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery"},{label:"BluetoothAdapter.stopDiscovery",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/21.stopdiscovery"},{label:"BluetoothAdapter.unpair",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapter/22.unpair"}]},{label:"BluetoothAdapterEvent",url:"/docs/06.api/web-apis/bluetooth/bluetoothadapterevent"},{label:"BluetoothAttributeEvent",url:"/docs/06.api/web-apis/bluetooth/bluetoothattributeevent"},{label:"BluetoothClassOfDevice",url:"/docs/06.api/web-apis/bluetooth/bluetoothclassofdevice"},{label:"BluetoothConnectionHandle",url:"/docs/06.api/web-apis/bluetooth/bluetoothconnectionhandle"},{label:"BluetoothDevice",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice",children:[{label:"BluetoothDevice.address",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/01.address"},{label:"BluetoothDevice.cod",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/02.cod"},{label:"BluetoothDevice.name",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/03.name"},{label:"BluetoothDevice.paired",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/07.paired"},{label:"BluetoothDevice.uuids",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/09.uuids"},{label:"BluetoothDevice.gatt",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/10.gatt"},{label:"BluetoothDevice.onattributechanged",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/11.onattributechanged"},{label:"BluetoothDevice.fetchUuids()",url:"/docs/06.api/web-apis/bluetooth/bluetoothdevice/12.fetchuuids"}]},{label:"BluetoothDeviceEvent",url:"/docs/06.api/web-apis/bluetooth/bluetoothdeviceevent"},{label:"BluetoothDiscoveryHandle",url:"/docs/06.api/web-apis/bluetooth/bluetoothdiscoveryhandle"},{label:"BluetoothGatt",url:"/docs/06.api/web-apis/bluetooth/bluetoothgatt"},{label:"BluetoothGattCharacteristic",url:"/docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristic"},{label:"BluetoothGattCharacteristicEvent ",url:"/docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristicevent"},{label:"BluetoothGattDescriptor",url:"/docs/06.api/web-apis/bluetooth/bluetoothgattdescriptor"},{label:"BluetoothGattServer",url:"/docs/06.api/web-apis/bluetooth/bluetoothgattserver"},{label:"BluetoothGattService",url:"/docs/06.api/web-apis/bluetooth/bluetoothgattservice"},{label:"BluetoothLeDeviceEvent",url:"/docs/06.api/web-apis/bluetooth/bluetoothledeviceevent"},{label:"BluetoothManager",url:"/docs/06.api/web-apis/bluetooth/bluetoothmanager",children:[{label:"BluetoothManager.onadapteradded",url:"/docs/06.api/web-apis/bluetooth/bluetoothmanager/03.onadapteradded"}]},{label:"BluetoothStatusChangedEvent",url:"/docs/06.api/web-apis/bluetooth/bluetoothstatuschangedevent"}]}},412:function(e,a){e.exports={label:"BatteryManager",url:"/docs/06.api/web-apis/batterymanager/batterymanager",children:[{label:"BatteryManager.charging()",url:"/docs/06.api/web-apis/batterymanager/charging"},{label:"BatteryManager.chargingtime()",url:"/docs/06.api/web-apis/batterymanager/chargingtime"},{label:"BatteryManager.dischargingtime()",url:"/docs/06.api/web-apis/batterymanager/dischargingtime"},{label:"BatteryManager.level()",url:"/docs/06.api/web-apis/batterymanager/level"},{label:"BatteryManager.health()",url:"/docs/06.api/web-apis/batterymanager/health"},{label:"BatteryManager.present()",url:"/docs/06.api/web-apis/batterymanager/present"},{label:"BatteryManager.temperature()",url:"/docs/06.api/web-apis/batterymanager/temperature"},{label:"BatteryManager.onbatteryhealthchange()",url:"/docs/06.api/web-apis/batterymanager/onbatteryhealthchange"},{label:"BatteryManager.onchargingchange()",url:"/docs/06.api/web-apis/batterymanager/onchargingchange"},{label:"BatteryManager.ondischargingtimechange()",url:"/docs/06.api/web-apis/batterymanager/onchargingtimechange"},{label:"BatteryManager.ondischargingtimechange()",url:"/docs/06.api/web-apis/batterymanager/ondischargingtimechange"},{label:"BatteryManager.onlevelchange()",url:"/docs/06.api/web-apis/batterymanager/onlevelchange"}]}},413:function(e,a){e.exports={label:"Clients",url:"/docs/06.api/web-apis/clients/clients",children:[{label:"Clients.openApp()",url:"/docs/06.api/web-apis/clients/01.openapp"}]}},414:function(e,a){e.exports={label:"Data Store",url:"/docs/06.api/web-apis/dataStore/data-store",children:[{label:"DataStore",url:"/docs/06.api/web-apis/dataStore/datastore",children:[{label:"DataStore.name",url:"/docs/06.api/web-apis/dataStore/datastore/01.name"},{label:"DataStore.owner",url:"/docs/06.api/web-apis/dataStore/datastore/02.owner"},{label:"DataStore.readOnly",url:"/docs/06.api/web-apis/dataStore/datastore/03.readonly"},{label:"DataStore.revisionId",url:"/docs/06.api/web-apis/dataStore/datastore/04.revisionid"},{label:"DataStore.onchange",url:"/docs/06.api/web-apis/dataStore/datastore/05.onchange"},{label:"DataStore.get()",url:"/docs/06.api/web-apis/dataStore/datastore/06.get"},{label:"DataStore.add()",url:"/docs/06.api/web-apis/dataStore/datastore/07.add"},{label:"DataStore.put()",url:"/docs/06.api/web-apis/dataStore/datastore/08.put"},{label:"DataStore.remove()",url:"/docs/06.api/web-apis/dataStore/datastore/09.remove"},{label:"DataStore.clear()",url:"/docs/06.api/web-apis/dataStore/datastore/10.clear"},{label:"DataStore.getLength()",url:"/docs/06.api/web-apis/dataStore/datastore/11.getlength"},{label:"DataStore.sync()",url:"/docs/06.api/web-apis/dataStore/datastore/12.sync"}]},{label:"DataStoreChangeEvent",url:"/docs/06.api/web-apis/dataStore/datastorechangeevent",children:[{label:"DataStoreChangeEvent.id",url:"/docs/06.api/web-apis/dataStore/datastorechangeevent/id"},{label:"DataStoreChangeEvent.operation",url:"/docs/06.api/web-apis/dataStore/datastorechangeevent/operation"},{label:"DataStoreChangeEvent.owner",url:"/docs/06.api/web-apis/dataStore/datastorechangeevent/owner"},{label:"DataStoreChangeEvent.revisionId",url:"/docs/06.api/web-apis/dataStore/datastorechangeevent/revisionid"}]},{label:"DataStoreCursor",url:"/docs/06.api/web-apis/dataStore/datastorecursor",children:[{label:"DataStoreCursor.close()",url:"/docs/06.api/web-apis/dataStore/datastorecursor/close"},{label:"DataStoreCursor.next()",url:"/docs/06.api/web-apis/dataStore/datastorecursor/next"},{label:"DataStoreCursor.store()",url:"/docs/06.api/web-apis/dataStore/datastorecursor/store"}]},{label:"DataStoreTask",url:"/docs/06.api/web-apis/dataStore/datastoretask",children:[{label:"DataStoreTask.data",url:"/docs/06.api/web-apis/dataStore/datastoretask/data"},{label:"DataStoreTask.id",url:"/docs/06.api/web-apis/dataStore/datastoretask/id"},{label:"DataStoreTask.operation",url:"/docs/06.api/web-apis/dataStore/datastoretask/operation"},{label:"DataStoreTask.revisionId",url:"/docs/06.api/web-apis/dataStore/datastoretask/revisionid"}]}]}},415:function(e,a){e.exports={label:"Device Storage",url:"/docs/06.api/web-apis/deviceStorage/device-storage",children:[{label:"DeviceStorage",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage",children:[{label:"DeviceStorage.default",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/01.default"},{label:"DeviceStorage.lowdiskspace",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/02.lowdiskspace"},{label:"DeviceStorage.storagename",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/03.storagename"},{label:"DeviceStorage.onchange",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/04.onchange"},{label:"DeviceStorage.add()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/05.add"},{label:"DeviceStorage.addNamed()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/06.addnamed"},{label:"DeviceStorage.available()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/07.available"},{label:"DeviceStorage.delete()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/08.delete"},{label:"DeviceStorage.enumerate()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/09.enumerate"},{label:"DeviceStorage.enumerateEditable()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/10.enumerateeditable"},{label:"DeviceStorage.freeSpace()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/11.freespace"},{label:"DeviceStorage.get()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/12.get"},{label:"DeviceStorage.getEditable()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/13.geteditable"},{label:"DeviceStorage.usedSpace()",url:"/docs/06.api/web-apis/deviceStorage/01.devicestorage/14.usedspace"}]},{label:"DeviceStorageChangeEvent",url:"/docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent",children:[{label:"DeviceStorageChangeEvent.path",url:"/docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/01.path"},{label:"DeviceStorageChangeEvent.reason",url:"/docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/02.reason"}]}]}},416:function(e,a){e.exports={label:"Geolocation",url:"/docs/06.api/web-apis/geolocation/geolocation",children:[{label:"Geolocation.clearWatch()",url:"/docs/06.api/web-apis/geolocation/01.clearwatch"},{label:"Geolocation.getCurrentPosition()",url:"/docs/06.api/web-apis/geolocation/02.getposition"},{label:"Geolocation.watchPosition()",url:"/docs/06.api/web-apis/geolocation/03.watchposition"}]}},417:function(e,a){e.exports={label:"LargeText",url:"/docs/06.api/web-apis/largetext/largetext"}},418:function(e,a){e.exports={label:"MediaSource",url:"/docs/06.api/web-apis/mediasource/mediasource"}},419:function(e,a){e.exports={label:"mozHasPendingMessage",url:"/docs/06.api/web-apis/mozhaspendingmessage/mozhaspendingmessage"}},420:function(e,a){e.exports={label:"mozSetMessageHandler",url:"/docs/06.api/web-apis/mozsetmessagehandler/mozsetmessagehandler"}},421:function(e,a){e.exports={label:"Network Stats",url:"/docs/06.api/web-apis/networkStats/network-stats",children:[{label:"MozNetworkStats",url:"/docs/06.api/web-apis/networkStats/moznetworkstats",children:[{label:"MozNetworkStats.connectionType",url:"/docs/06.api/web-apis/networkStats/moznetworkstats/01.connectiontype"},{label:"MozNetworkStats.data",url:"/docs/06.api/web-apis/networkStats/moznetworkstats/02.data"},{label:"MozNetworkStats.start",url:"/docs/06.api/web-apis/networkStats/moznetworkstats/03.start"},{label:"MozNetworkStats.end",url:"/docs/06.api/web-apis/networkStats/moznetworkstats/04.end"}]},{label:"MozNetworkStatsData",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsdata",children:[{label:"MozNetworkStatsData.date",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsdata/date"},{label:"MozNetworkStatsData.rxBytes",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsdata/rxbytes"},{label:"MozNetworkStatsData.txBytes",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsdata/txbytes"}]},{label:"MozNetworkStatsManager",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager",children:[{label:"MozNetworkStatsManager.addAlarm()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/addalarm"},{label:"MozNetworkStatsManager.clearAllStats()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearallstats"},{label:"MozNetworkStatsManager.clearStats()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearstats"},{label:"MozNetworkStatsManager.getAllAlarms()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getallalarms"},{label:"MozNetworkStatsManager.getAvailableNetworks()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailablenetworks"},{label:"MozNetworkStatsManager.getAvailableServiceTypes()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailableservicetypes"},{label:"MozNetworkStatsManager.getSamples()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getsamples"},{label:"MozNetworkStatsManager.maxStorageAge",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/maxstorageage"},{label:"MozNetworkStatsManager.removeAlarms()",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/removealarms"},{label:"MozNetworkStatsManager.sampleRate",url:"/docs/06.api/web-apis/networkStats/moznetworkstatsmanager/samplerate"}]}]}},422:function(e,a){e.exports={label:"VolumeManager",url:"/docs/06.api/web-apis/volumemanager/volumemanager"}},423:function(e,a){e.exports={label:"SpeedDial",url:"/docs/06.api/web-apis/speeddial/speeddial"}},424:function(e,a){e.exports={label:"SEResponse",url:"/docs/06.api/web-apis/seresponse/seresponse"}},425:function(e,a){e.exports={label:"SEManager",url:"/docs/06.api/web-apis/seManager/semanager"}},426:function(e,a){e.exports={label:"SESession",url:"/docs/06.api/web-apis/seSession/sesession"}},427:function(e,a){e.exports={label:"SEChannel",url:"/docs/06.api/web-apis/seChannel/sechannel"}},428:function(e,a){e.exports={label:"SEReader",url:"/docs/06.api/web-apis/seReader/sereader"}},429:function(e,a){e.exports={label:"WiFi Information",url:"/docs/06.api/web-apis/wifiInformation/wifi-information",children:[{label:"MozWifiConnectionInfoEvent",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent",children:[{label:"MozWifiConnectionInfoEvent.ipAddress",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/ipaddress"},{label:"MozWifiConnectionInfoEvent.linkSpeed",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/linkspeed"},{label:"MozWifiConnectionInfoEvent.network",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/network"},{label:"MozWifiConnectionInfoEvent.relSignalStrength",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/relsignalstrength"},{label:"MozWifiConnectionInfoEvent.signalStrength",url:"/docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/signalstrength"}]},{label:"MozWifiStatusChangeEvent",url:"/docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent",children:[{label:"MozWifiStatusChangeEvent.network",url:"/docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network"},{label:"MozWifiStatusChangeEvent.status",url:"/docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/status"}]},{label:"WifiManager",url:"/docs/06.api/web-apis/wifiInformation/wifimanager",children:[{label:"WifiManager.associate()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/associate"},{label:"WifiManager.connection",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/connection"},{label:"WifiManager.connectionInformation",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/connectioninformation"},{label:"WifiManager.enabled",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/enabled"},{label:"WifiManager.forget()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/forget"},{label:"WifiManager.getKnownNetworks()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/getknownnetworks"},{label:"WifiManager.getNetworks()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/getnetworks"},{label:"WifiManager.macAddress",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/macaddress"},{label:"WifiManager.onconnectioninfoupdate",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/onconnectioninfoupdate"},{label:"WifiManager.ondisabled",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/ondisabled"},{label:"WifiManager.onenabled",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/onenabled"},{label:"WifiManager.onstatuschange",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/onstatuschange"},{label:"WifiManager.setPowerSavingMode()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/setpowersavingmode"},{label:"WifiManager.setStaticIpMode()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode"},{label:"WifiManager.wps()",url:"/docs/06.api/web-apis/wifiInformation/wifimanager/wps"}]}]}},430:function(e,a,t){var o=[t(431),t(432),t(433),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464)];e.exports=o},431:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/alarmManager/navigator-b2g-alarmManager",label:"navigator.b2g.alarmManager"}},432:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager",label:"navigator.b2g.audioChannelManager"}},433:function(e,a){e.exports={label:"navigator.b2g.cameras",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/navigator-b2g-cameras",children:[{label:"CameraManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager",children:[{label:"CameraManager.getCamera()",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getCamera"},{label:"CameraManager.getListOfCameras()",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras"}]}]}},434:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/dataCallManager/navigator-b2g-dataCallManager",label:"navigator.b2g.dataCallManager"}},435:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/downloadManager/navigator-b2g-downloadManager",label:"navigator.b2g.downloadManager"}},436:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/externalapi/navigator-b2g-externalapi",label:"navigator.b2g.externalapi"}},437:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/fmRadio/navigator-b2g-fmRadio",label:"navigator.b2g.fmRadio"}},438:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/getDeviceStorage/navigator-b2g-getDeviceStorage",label:"navigator.b2g.getDeviceStorage"}},439:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/inputMethod/navigator-b2g-inputMethod",label:"navigator.b2g.inputMethod"}},440:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileConnection/navigator-b2g-mobileConnection",label:"navigator.b2g.mobileConnection"}},441:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileMessage/navigator-b2g-mobileMessage",label:"navigator.b2g.mobileMessage"}},442:function(e,a){e.exports={url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/virtualCursor/navigator-b2g-virtualCursor",label:"navigator.b2g.virtualCursor"}},443:function(e,a){e.exports={label:"AppsManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager"}},444:function(e,a){e.exports={label:"AudioVolumeManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/audiovolumemanager/daemon-api-audiovolumemanager"}},445:function(e,a){e.exports={label:"Contacts",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/contacts/daemon-api-contacts"}},446:function(e,a){e.exports={label:"DeviceCapability",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/devicecapability/daemon-api-devicecapability"}},447:function(e,a){e.exports={label:"PowerManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager"}},448:function(e,a){e.exports={label:"Settings",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings"}},449:function(e,a){e.exports={label:"TcpSocket",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/tcpsocket/daemon-api-tcpsocket"}},450:function(e,a){e.exports={label:"Telephony",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/telephony/daemon-api-telephony"}},451:function(e,a){e.exports={label:"TimeService",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices"}},452:function(e,a){e.exports={label:"navigator.geolocation",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/geolocation/navigator-geolocation"}},453:function(e,a){e.exports={label:"navigator.mediaDevices.getUserMedia",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/getUserMediaDevices/navigator-getUserMediaDevices"}},454:function(e,a){e.exports={label:"navigator.mozTCPSocket",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/navigator-mozTCPSocket",children:[{label:"TCPSocket",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocket"},{label:"TCP Socket API",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI"}]}},455:function(e,a){e.exports={label:"navigator.vibrate",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate"}},456:function(e,a){e.exports={label:"AudioChannelClient",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioChannelClient/other-AudioChannelClient"}},457:function(e,a){e.exports={label:"AudioContext",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioContext/other-AudioContext"}},458:function(e,a){e.exports={label:"HTMLMediaElement",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/HTMLMediaElement/other-HTMLMediaElement"}},459:function(e,a){e.exports={label:"Notification",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/notification/other-Notification"}},460:function(e,a){e.exports={label:"ServiceWorker",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/ServiceWorker/other-ServiceWorker"}},461:function(e,a){e.exports={label:"MozSpeakerManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager"}},462:function(e,a){e.exports={label:"XMLHttpRequest",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/XMLHttpRequest/other-XMLHttpRequest"}},463:function(e,a){e.exports={label:"Audio Channels API",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/AudioChannels/permission-table-audiochannel"}},464:function(e,a){e.exports={label:"BlueTooth",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/permission-table-bluetooth",children:[{label:"BluetoothAdapter",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapter/BluetoothAdapter"},{label:"BluetoothAdapterEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapterevent/BluetoothAdapterEvent"},{label:"BluetoothAttributeEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent"},{label:"BluetoothClassOfDevice",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothclassofdevice/BluetoothClassOfDevice"},{label:"BluetoothConnectionHandle",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothconnectionhandle/BluetoothConnectionHandle"},{label:"BluetoothDevice",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdevice/BluetoothDevice"},{label:"BluetoothDeviceEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent"},{label:"BluetoothDiscoveryHandle",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle"},{label:"BluetoothGatt",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt"},{label:"BluetoothGattCharacteristic",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristic/BluetoothGattCharacteristic"},{label:"BluetoothGattCharacteristicEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristicevent/BluetoothGattCharacteristicEvent"},{label:"BluetoothGattDescriptor",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor"},{label:"BluetoothGattServer",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattserver/BluetoothGattServer"},{label:"BluetoothGattService",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattservice/BluetoothGattService"},{label:"BluetoothLeDeviceEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothledeviceevent/BluetoothLeDeviceEvent"},{label:"BluetoothManager",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothmanager/BluetoothManager"},{label:"BluetoothStatusChangedEvent",url:"/docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothstatuschangedevent/BluetoothStatusChangedEvent"}]}},465:function(e,a,t){var o=[t(466)];e.exports=o},466:function(e,a){e.exports={label:"BatteryManager",url:"/docs/st-1.0/06.api/web-apis/batterymanager/batterymanager"}},473:function(e,a,t){"use strict";var o=t(0),r=t.n(o),i=t(469),n=t.n(i),l=t(402),s=t(397);a.a=function(e){var a=Object(o.useRef)(!1),i=Object(o.useRef)(null),c=Object(l.useHistory)(),p=Object(s.default)().siteConfig,u=(void 0===p?{}:p).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(317),t.e(323)]).then(t.bind(null,476)),t.e(220).then(t.t.bind(null,475,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var o=u+t.url;document.createElement("a").href=o,c.push(o)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(o.useCallback)((function(a){i.current.contains(a.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:n()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:n()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:i}))}},474:function(e,a,t){"use strict";var o=t(3),r=t(8),i=t(400),n=t(398),l=t(397),s=t(0),c=t.n(s),p=t(57),u=t.n(p),d=function(e){var a=e.to,t=e.href,i=e.label,l=Object(r.a)(e,["to","href","label"]),s=Object(n.a)(null!=t?t:"",{forcePrependBaseUrl:void 0}),p=Object(n.a)(null!=a?a:"");return c.a.createElement("a",Object(o.a)({},null!=t?{href:s,rel:"noopener noreferrer",target:"_blank"}:{href:p},l),i)};a.a=function(){var e=Object(l.default)().siteConfig.themeConfig.footer,a=e.links,t=e.copyright,o=e.style;return c.a.createElement("footer",{className:Object(i.a)(u.a.footer,{"footer--dark":"dark"===o})},c.a.createElement("div",{className:Object(i.a)(u.a.footer__content)},c.a.createElement("a",{href:"https://www.kaiostech.com/",className:Object(i.a)(u.a.home__link)},c.a.createElement("img",{alt:"foot logo",className:u.a.kaios__logo,src:"/img/footer-logo.svg",title:"foot logo"})),c.a.createElement("div",{className:Object(i.a)(u.a["footer__column--right"])},a.map((function(e,a){var t;return c.a.createElement("div",{key:a,className:u.a.footer__items},c.a.createElement("ul",{className:u.a.footer__items},null===(t=e.items)||void 0===t?void 0:t.map((function(e){var a;return c.a.createElement("li",{className:u.a.footer__item,key:null!==(a=e.href)&&void 0!==a?a:e.to},c.a.createElement(d,e))}))))})),c.a.createElement("span",{className:u.a.footer__copyright},t))))}},477:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),i=t(468);a.default=function(e){return e.location,r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl","data-canny":!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);