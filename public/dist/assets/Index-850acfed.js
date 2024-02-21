import{i as e}from"./main-ce25b28f.js";import{i as l}from"./ipcRenderer-5e19eaee.js";import{a as s}from"./index-6b23c065.js";import{_ as a,r as o,o as t,b as n,g as i,a as r,w as c,e as p,p as d,f as u}from"./index-df4b8cd9.js";const f={data:()=>({type:1,serverUrl:""}),methods:{info(){l.invoke(e.crossInfo,{}).then((e=>{console.log("res:",e)}))},getUrl(){l.invoke(e.getCrossUrl,{name:"pyapp"}).then((e=>{this.serverUrl=e,this.$message.info(`服务地址: ${e}`)}))},kill(){l.invoke(e.killCrossServer,{type:"one",name:"pyapp"})},killAll(){l.invoke(e.killCrossServer,{type:"all",name:"pyapp"})},create(){l.invoke(e.createCrossServer,{program:"python"})},request(a){if(1!=a||""!=this.serverUrl)if(1==a){const e=this.serverUrl+"/api/hello";s({method:"get",url:e,params:{id:"1111111"},timeout:1e3}).then((e=>{console.log("res:",e);const l=e.data.data||null;this.$message.info(`服务返回: ${l}`)}))}else l.invoke(e.requestApi,{name:"pyapp",urlPath:"/api/hello"}).then((e=>{console.log("res:",e);const l=e.data||null;this.$message.info(`服务返回: ${l}`)}));else this.$message.info("请先获取服务地址")}}},k=e=>(d("data-v-053fcde4"),e=e(),u(),e),v={id:"app-cross-python"},m=k((()=>i("div",{class:"one-block-1"},[i("span",null," 1. 基础控制 ")],-1))),h={class:"one-block-2"},_=k((()=>i("div",{class:"one-block-1"},[i("span",null," 2. 发送http请求 ")],-1))),g={class:"one-block-2"},C=k((()=>i("div",{class:"one-block-1"},[i("span",null," 3. 多个服务 ")],-1))),y={class:"one-block-2"};const b=a(f,[["render",function(e,l,s,a,d,u){const f=o("a-button"),k=o("a-space");return t(),n("div",v,[m,i("div",h,[r(k,null,{default:c((()=>[r(f,{onClick:l[0]||(l[0]=e=>u.create())},{default:c((()=>[p(" 启动 ")])),_:1}),r(f,{onClick:l[1]||(l[1]=e=>u.getUrl())},{default:c((()=>[p(" 获取地址 ")])),_:1}),r(f,{onClick:l[2]||(l[2]=e=>u.kill())},{default:c((()=>[p(" kill ")])),_:1}),r(f,{onClick:l[3]||(l[3]=e=>u.info())},{default:c((()=>[p(" test ")])),_:1})])),_:1})]),_,i("div",g,[r(k,null,{default:c((()=>[r(f,{onClick:l[4]||(l[4]=e=>u.request(1))},{default:c((()=>[p(" 前端发送 ")])),_:1}),r(f,{onClick:l[5]||(l[5]=e=>u.request(2))},{default:c((()=>[p(" 主进程发送 ")])),_:1})])),_:1})]),C,i("div",y,[r(k,null,{default:c((()=>[r(f,{onClick:l[6]||(l[6]=e=>u.create())},{default:c((()=>[p(" 启动 ")])),_:1}),r(f,{onClick:l[7]||(l[7]=e=>u.killAll())},{default:c((()=>[p(" kill all ")])),_:1})])),_:1})])])}],["__scopeId","data-v-053fcde4"]]);export{b as default};
