import{_ as r,s as t,o as i,c as o,b as s,t as n,h as a}from"./index.ab4634f1.js";const c={props:{id:{type:Number,required:!0}},computed:{destination(){return t.experience.find(e=>e.id===this.id)}}},p={key:0,class:"experience"},d={class:"experience-details"},l=["src","alt"];function u(e,m,_,h,f,x){return e.experience?(i(),o("section",p,[s("h1",null,n(e.experience.name),1),s("div",d,[s("img",{src:`/images/${e.experience.image}`,alt:e.experience.name},null,8,l),s("p",null,n(e.experience.description),1)])])):a("",!0)}const g=r(c,[["render",u]]);export{g as default};