<<<<<<<< HEAD:public/dist/assets/Index-8dafe97e.js
import{i as t}from"./main-429c1dad.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{_ as n,r as o,o as e,b as a,g as i,a as r,w as l,t as c,p,f as u}from"./index-778f96a0.js";const d={data:()=>({currentStatus:"无"}),mounted(){this.init()},methods:{init(){s.removeAllListeners(t.initPowerMonitor),s.on(t.initPowerMonitor,((t,s)=>{"[object Object]"==Object.prototype.toString.call(s)&&(this.currentStatus=s.msg,this.$message.info(s.msg))})),s.send(t.initPowerMonitor,"")}}},m=t=>(p("data-v-564cbe99"),t=t(),u(),t),b={id:"app-base-powermonitor"},f=m((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 监控电源状态 ")],-1))),j={class:"one-block-2"},v=m((()=>i("p",null,"* 拔掉电源，使用电池供电",-1))),g=m((()=>i("p",null,"* 接入电源",-1))),w=m((()=>i("p",null,"* 锁屏",-1))),h=m((()=>i("p",null,"* 解锁",-1)));const S=n(d,[["render",function(t,s,n,p,u,d){const m=o("a-space");return e(),a("div",b,[f,i("div",j,[r(m,null,{default:l((()=>[i("p",null,"* 当前状态："+c(u.currentStatus),1)])),_:1}),v,g,w,h])])}],["__scopeId","data-v-564cbe99"]]);export{S as default};
========
import{i as t}from"./main-d72f38de.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{_ as n,r as o,o as e,b as a,g as i,a as r,w as l,t as c,p,f as u}from"./index-12c2137c.js";const d={data:()=>({currentStatus:"无"}),mounted(){this.init()},methods:{init(){s.removeAllListeners(t.initPowerMonitor),s.on(t.initPowerMonitor,((t,s)=>{"[object Object]"==Object.prototype.toString.call(s)&&(this.currentStatus=s.msg,this.$message.info(s.msg))})),s.send(t.initPowerMonitor,"")}}},m=t=>(p("data-v-564cbe99"),t=t(),u(),t),b={id:"app-base-powermonitor"},f=m((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 监控电源状态 ")],-1))),j={class:"one-block-2"},v=m((()=>i("p",null,"* 拔掉电源，使用电池供电",-1))),g=m((()=>i("p",null,"* 接入电源",-1))),w=m((()=>i("p",null,"* 锁屏",-1))),h=m((()=>i("p",null,"* 解锁",-1)));const S=n(d,[["render",function(t,s,n,p,u,d){const m=o("a-space");return e(),a("div",b,[f,i("div",j,[r(m,null,{default:l((()=>[i("p",null,"* 当前状态："+c(u.currentStatus),1)])),_:1}),v,g,w,h])])}],["__scopeId","data-v-564cbe99"]]);export{S as default};
>>>>>>>> dev_v3:public/dist/assets/Index-586aac40.js
