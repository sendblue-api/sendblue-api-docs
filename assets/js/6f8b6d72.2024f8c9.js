"use strict";(self.webpackChunksendblue_api=self.webpackChunksendblue_api||[]).push([[236],{7367:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"inbound","title":"Receiving Messages","description":"Receiving Messages as a Business | iMessage for Business - Sendblue","source":"@site/docs/inbound.md","sourceDirName":".","slug":"/inbound","permalink":"/docs/inbound","draft":false,"unlisted":false,"editUrl":"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/inbound.md","tags":[],"version":"current","frontMatter":{"id":"inbound","title":"Receiving Messages","description":"Receiving Messages as a Business | iMessage for Business - Sendblue","sidebar_label":"Receiving Messages"},"sidebar":"someSidebar","previous":{"title":"Sending Messages","permalink":"/docs/outbound"},"next":{"title":"Group Messages","permalink":"/docs/groups"}}');var t=n(4848),r=n(8453);const i={id:"inbound",title:"Receiving Messages",description:"Receiving Messages as a Business | iMessage for Business - Sendblue",sidebar_label:"Receiving Messages"},o=void 0,c={},l=[{value:"Receiving Messages",id:"receiving-messages",level:3},{value:"Webhook Body Parsing",id:"webhook-body-parsing",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsx)(s.p,{children:"A user must be registered as a contact on your account before their messages will be routed to you. This can be done by sending them a message or adding them as a contact."}),(0,t.jsxs)(s.p,{children:["Need receive-first texting? ",(0,t.jsx)(s.a,{href:"mailto:support@sendblue.co",children:"Talk to us"})," about our dedicated plans."]})]}),"\n",(0,t.jsx)(s.h3,{id:"receiving-messages",children:"Receiving Messages"}),"\n",(0,t.jsx)(s.p,{children:"In order to enable receiving messages, you have to specify the webhooks that you want to use in your api dashboard."}),"\n",(0,t.jsx)(s.p,{children:"Received Messages will be sent as a POST request to the webhook which you define. These messages will be delivered in the JSON of a POST body which looks like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "accountEmail": "support@sendblue.co",\n  "content": "Ahoy Developer!",\n  "media_url": "some_cdn_link.png",\n  "is_outbound": false,\n  "status": "RECEIVED",\n  "error_code": null,\n  "error_message": null,\n  "message_handle": "xxxxx",\n  "date_sent": "2020-09-10T06:15:05.962Z",\n  "date_updated": "2020-09-10T06:15:05.962Z",\n  "from_number": "+19998887777",\n  "number": "+19998887777",\n  "to_number": "+15122164639",\n  "was_downgraded": false,\n  "plan": "blue"\n}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsx)(s.p,{children:"You must send a response to our server in order to avoid receiving multiple webhook calls."})}),"\n",(0,t.jsx)(s.h2,{id:"webhook-body-parsing",children:"Webhook Body Parsing"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Callback Body Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accountEmail"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Associated account email"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"content"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Message content"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"media_url"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"A CDN link to the image that was sent to your sendblue number from an end-user. This link expires after 30 days"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"is_outbound"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsx)(s.td,{children:"True if message is sent, false if message is received"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"status"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"The current status of the message"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"error_code"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"int"})}),(0,t.jsx)(s.td,{children:"error code (null if no error)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"error_message"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"descriptive error message (null if no error)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"message_handle"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Sendblue message handle"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"date_sent"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"ISO 8601 formatted date string of the date this message was created"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"date_updated"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"ISO 8601 formatted date string of the date this message was last updated"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"from_number"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"E.164 formatted phone number string of the message dispatcher"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"number"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"E.164 formatted phone number string of your end-user (not the Sendblue-provided phone number)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"to_number"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"E.164 formatted phone number string of the message recipient"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"was_downgraded"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsx)(s.td,{children:"true if the end user does not support iMessage, false otherwise"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"plan"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Value of the Sendblue account plan"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var d=n(6540);const t={},r=d.createContext(t);function i(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);