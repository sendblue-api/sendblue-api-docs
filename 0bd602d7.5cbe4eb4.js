(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var a=n(2),r=n(6),b=(n(0),n(131)),l={id:"outbound",title:"Sending Messages",sidebar_label:"Sending Messages"},o={id:"outbound",title:"Sending Messages",description:"The Sendblue API conforms to REST API standards. Using it, you can send outbound iMessage and SMS to any enabled phone globally. All requests can either be form-encoded or",source:"@site/docs/outbound.md",permalink:"/docs/outbound",editUrl:"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/outbound.md",sidebar_label:"Sending Messages",sidebar:"someSidebar",previous:{title:"Setting up Webhooks",permalink:"/docs/webhooks"},next:{title:"Receiving Messages",permalink:"/docs/inbound"}},s=[{value:"Sending iMessages",id:"sending-imessages",children:[]},{value:"Status Callback",id:"status-callback",children:[]},{value:"Status Resolution",id:"status-resolution",children:[{value:"Status",id:"status",children:[]},{value:"Error Codes",id:"error-codes",children:[]}]},{value:"Useful Information",id:"useful-information",children:[{value:"From Number",id:"from-number",children:[]},{value:"Handle",id:"handle",children:[]}]}],c={rightToc:s};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The Sendblue API conforms to REST API standards. Using it, you can send outbound iMessage and SMS to any enabled phone globally. All requests can either be form-encoded or "),Object(b.b)("p",null,"In this documentation, we will cover how to:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/outbound#sending-imessages"}),"Send iMessages to a destination phone number")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/outbound#status-callback"}),"Track the status of your message using webhooks"))),Object(b.b)("h2",{id:"sending-imessages"},"Sending iMessages"),Object(b.b)("p",null,"You can send a message directly with cURL or by using one of our client libraries by hitting the following endpoint: "),Object(b.b)("p",null," ",Object(b.b)("inlineCode",{parentName:"p"},"POST https://api.sendblue.co/api/send-message"),"\nHere's what that looks like in Node.js"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const url = `https://api.sendblue.co/api/send-message` ;\n\naxios.post(url, {\n        number: '+19998887777',\n        content: 'Hello world!',\n        statusCallback: 'https://example.com/message-status/1234abcd',\n    },\n    headers: {\n        \"sb-api-key-id\": << apiKey >> ,\n        \"sb-api-secret-key\": << apiSecret >>\n    },\n}).then(response => {\n    console.log(response.data);\n}).catch(error => {\n    console.error(error);\n});\n")),Object(b.b)("h2",{id:"status-callback"},"Status Callback"),Object(b.b)("p",null,"Sendblue will POST the endpoint you provide in ",Object(b.b)("inlineCode",{parentName:"p"},"statusCallback")," whenever the status of a message changes to one of the following:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"queued"),Object(b.b)("li",{parentName:"ul"},"failed"),Object(b.b)("li",{parentName:"ul"},"sent"),Object(b.b)("li",{parentName:"ul"},"delivered"),Object(b.b)("li",{parentName:"ul"},"read")),Object(b.b)("p",null,"Below is an example of the POST body that is sent to the statusCallback URL for a delivered message:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "accountEmail": "support@sendblue.co",\n  "content": "Hello world!",\n  "is_outbound": true,\n  "status": "DELIVERED",\n  "error_code": null,\n  "error_message": null,\n  "message_handle": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",\n  "date_sent": "2020-09-10T06:15:05.962Z",\n  "date_updated": "2020-09-10T06:15:14.115Z",\n  "from_number": "+15122164639",\n  "to_number": "+19998887777",\n  "was_downgraded": false,\n  "plan": "blue"\n}\n')),Object(b.b)("h2",{id:"status-resolution"},"Status Resolution"),Object(b.b)("h3",{id:"status"},"Status"),Object(b.b)("p",null,"The status field will report the status. There are currently 7 different possible responses to a send-message request:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"QUEUED")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message has reached our servers, and has passed our validation checks. It has been queued for delivery")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"SENT")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message has been sent")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"DELIVERED")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message has been sent, and we've received confirmation of delivery (iMessage Only)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"READ")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message has been sent, and we've received confirmation that the end user has read the message (iMessage Only)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"ERROR")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message has failed to send, see the ",Object(b.b)("inlineCode",{parentName:"td"},"error_code")," field to understaind why")))),Object(b.b)("h3",{id:"error-codes"},"Error Codes"),Object(b.b)("p",null,"Any Code besides 0 or null is a failure. Some codes are not yet documented."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Validation Error: see ",Object(b.b)("inlineCode",{parentName:"td"},"error_message")," field")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4001"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rate Limit Exceeded")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4002"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Blacklisted Number (e.g. 911)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Internal Error")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5003"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Server Rate Exceeded")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10001"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message failed to send")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10002"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"failed to resolve message status")))),Object(b.b)("h2",{id:"useful-information"},"Useful Information"),Object(b.b)("h3",{id:"from-number"},"From Number"),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Sendblue focuses on message deliverability and end-user experience. This means that each of your users will only ever interact with your business through one Sendblue phone number. However, different clients may see different numbers for texts sent from your company. See ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"docs/messageLimits"}),"Limits & Queues")," for more info"))),Object(b.b)("p",null,"The from_number field is given as a convenience to you, in case you want to keep track of that info, or tell the client that they should expect a text from the number that you show them."),Object(b.b)("h3",{id:"handle"},"Handle"),Object(b.b)("p",null,"The message handle is used so that you can query the status of each message at a later date. This is especially useful in high volume message_status=QUEUED cases or TIMEOUT cases."))}i.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),i=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||b;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<b;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);