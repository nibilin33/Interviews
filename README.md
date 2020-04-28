<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Interviews](#interviews)
  - [网络相关问题](#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)
    - [在浏览器中，一个页面从输入URL到加载完成，都有哪些步骤](#%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E5%8A%A0%E8%BD%BD%E5%AE%8C%E6%88%90%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%AD%A5%E9%AA%A4)
  - [http1.1时如何复用Tcp连接](#http11%E6%97%B6%E5%A6%82%E4%BD%95%E5%A4%8D%E7%94%A8tcp%E8%BF%9E%E6%8E%A5)
    - [HTTP1.1 有哪些不足](#http11-%E6%9C%89%E5%93%AA%E4%BA%9B%E4%B8%8D%E8%B6%B3)
    - [简述 HTTP1.0/1.1/2.0 的区别](#%E7%AE%80%E8%BF%B0-http101120-%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [HTTP状态码206是干什么的](#http%E7%8A%B6%E6%80%81%E7%A0%81206%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84)
    - [介绍SSL和TLS](#%E4%BB%8B%E7%BB%8Dssl%E5%92%8Ctls)
    - [http 301和302](#http-301%E5%92%8C302)
    - [GET和POST的区别](#get%E5%92%8Cpost%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [GET 和 POST 在安全性上有什么区别？GET 在哪些情况下会有安全性问题？](#get-%E5%92%8C-post-%E5%9C%A8%E5%AE%89%E5%85%A8%E6%80%A7%E4%B8%8A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%ABget-%E5%9C%A8%E5%93%AA%E4%BA%9B%E6%83%85%E5%86%B5%E4%B8%8B%E4%BC%9A%E6%9C%89%E5%AE%89%E5%85%A8%E6%80%A7%E9%97%AE%E9%A2%98)
    - [http 缓存的优先级](#http-%E7%BC%93%E5%AD%98%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7)
    - [UDP 和 TCP 的区别](#udp-%E5%92%8C-tcp-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [webpack打包之后的代码报错了，怎么找到报错代码在哪](#webpack%E6%89%93%E5%8C%85%E4%B9%8B%E5%90%8E%E7%9A%84%E4%BB%A3%E7%A0%81%E6%8A%A5%E9%94%99%E4%BA%86%E6%80%8E%E4%B9%88%E6%89%BE%E5%88%B0%E6%8A%A5%E9%94%99%E4%BB%A3%E7%A0%81%E5%9C%A8%E5%93%AA)
  - [什么是SourceMap](#%E4%BB%80%E4%B9%88%E6%98%AFsourcemap)
  - [HTML的盒子模型有哪些构成，盒子模型有哪几种，默认的是哪一种](#html%E7%9A%84%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E6%9E%84%E6%88%90%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E9%BB%98%E8%AE%A4%E7%9A%84%E6%98%AF%E5%93%AA%E4%B8%80%E7%A7%8D)
  - [浮动元素有没有什么特征](#%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E5%BE%81)
  - [清除浮动的所有方法](#%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%89%80%E6%9C%89%E6%96%B9%E6%B3%95)
  - [cookie有哪些特征](#cookie%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%B9%E5%BE%81)
  - [cookie的其他解决方案](#cookie%E7%9A%84%E5%85%B6%E4%BB%96%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
    - [Cookie 和 Session 的区别](#cookie-%E5%92%8C-session-%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [什么是 JWT](#%E4%BB%80%E4%B9%88%E6%98%AF-jwt)
    - [Token 和 JWT 的区别](#token-%E5%92%8C-jwt-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [localstorage存数据的格式是什么](#localstorage%E5%AD%98%E6%95%B0%E6%8D%AE%E7%9A%84%E6%A0%BC%E5%BC%8F%E6%98%AF%E4%BB%80%E4%B9%88)
  - [箭头函数](#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
  - [如果一个页面要做性能优化，从哪方面考察，从哪些地方优化](#%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E8%A6%81%E5%81%9A%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%BB%8E%E5%93%AA%E6%96%B9%E9%9D%A2%E8%80%83%E5%AF%9F%E4%BB%8E%E5%93%AA%E4%BA%9B%E5%9C%B0%E6%96%B9%E4%BC%98%E5%8C%96)
  - [请解释原型继承（prototype inheritance）的工作原理](#%E8%AF%B7%E8%A7%A3%E9%87%8A%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BFprototype-inheritance%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
  - [说说你对 AMD 和 CommonJS 的了解](#%E8%AF%B4%E8%AF%B4%E4%BD%A0%E5%AF%B9-amd-%E5%92%8C-commonjs-%E7%9A%84%E4%BA%86%E8%A7%A3)
  - [埋点的实现思路](#%E5%9F%8B%E7%82%B9%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [文件上传断点、续传](#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0)
  - [虚拟DOM算法思路](#%E8%99%9A%E6%8B%9Fdom%E7%AE%97%E6%B3%95%E6%80%9D%E8%B7%AF)
  - [webpack中 loader、plugin 的实现思路](#webpack%E4%B8%AD-loaderplugin-%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [前端构建工具的、vue-cli、create-react-app 的原理和实现思路](#%E5%89%8D%E7%AB%AF%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%E7%9A%84vue-clicreate-react-app-%E7%9A%84%E5%8E%9F%E7%90%86%E5%92%8C%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [事件委托？原理、好处、应用场景。](#%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98%E5%8E%9F%E7%90%86%E5%A5%BD%E5%A4%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
  - [vue和react的区别。](#vue%E5%92%8Creact%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [VUEX的原理](#vuex%E7%9A%84%E5%8E%9F%E7%90%86)
  - [闭包](#%E9%97%AD%E5%8C%85)
  - [匿名函数的典型应用场景是什么](#%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%E7%9A%84%E5%85%B8%E5%9E%8B%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E6%98%AF%E4%BB%80%E4%B9%88)
  - [宿主对象（hostbjects）和原生对象（native objects）的区别是什么](#%E5%AE%BF%E4%B8%BB%E5%AF%B9%E8%B1%A1hostbjects%E5%92%8C%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1native-objects%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)
  - [call和.apply有什么区别？](#call%E5%92%8Capply%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？](#%E5%8A%9F%E8%83%BD%E6%A3%80%E6%B5%8Bfeature-detection%E5%8A%9F%E8%83%BD%E6%8E%A8%E6%96%ADfeature-inference%E5%92%8C%E4%BD%BF%E7%94%A8-ua-%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [单页应用有那些优缺点](#%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E6%9C%89%E9%82%A3%E4%BA%9B%E4%BC%98%E7%BC%BA%E7%82%B9)
  - [请说明 JSONP 的工作原理，它为什么不是真正的 Ajax？](#%E8%AF%B7%E8%AF%B4%E6%98%8E-jsonp-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E5%AE%83%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84-ajax)
  - [jsonp安全问题如何解决](#jsonp%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3)
  - ["attribute" 和 "property" 之间有什么区别？](#attribute-%E5%92%8C-property-%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [document 中的load事件和DOMContentLoaded事件之间的区别是什么？](#document-%E4%B8%AD%E7%9A%84load%E4%BA%8B%E4%BB%B6%E5%92%8Cdomcontentloaded%E4%BA%8B%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)
  - [什么是"use strict"; ？使用它有什么优缺点？](#%E4%BB%80%E4%B9%88%E6%98%AFuse-strict-%E4%BD%BF%E7%94%A8%E5%AE%83%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%BC%BA%E7%82%B9)
  - [什么是事件循环？调用堆栈和任务队列之间有什么区别？](#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E8%B0%83%E7%94%A8%E5%A0%86%E6%A0%88%E5%92%8C%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [let和var的区别。let产生的背景？](#let%E5%92%8Cvar%E7%9A%84%E5%8C%BA%E5%88%ABlet%E4%BA%A7%E7%94%9F%E7%9A%84%E8%83%8C%E6%99%AF)
  - [请阐述块格式化上下文（Block Formatting Context）及其工作原理。](#%E8%AF%B7%E9%98%90%E8%BF%B0%E5%9D%97%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8A%E4%B8%8B%E6%96%87block-formatting-context%E5%8F%8A%E5%85%B6%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
  - [有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）](#%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%B9%E5%BC%8F%E5%8F%AF%E4%BB%A5%E9%9A%90%E8%97%8F%E5%86%85%E5%AE%B9%E4%BD%BF%E5%85%B6%E4%BB%85%E9%80%82%E7%94%A8%E4%BA%8E%E5%B1%8F%E5%B9%95%E9%98%85%E8%AF%BB%E5%99%A8)
  - [使用 CSS 预处理的优缺点分别是什么](#%E4%BD%BF%E7%94%A8-css-%E9%A2%84%E5%A4%84%E7%90%86%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)
  - [什么情况下，用translate()而不用绝对定位？什么时候，情况相反](#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E7%94%A8translate%E8%80%8C%E4%B8%8D%E7%94%A8%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%83%85%E5%86%B5%E7%9B%B8%E5%8F%8D)
  - [请简述JavaScript中的this](#%E8%AF%B7%E7%AE%80%E8%BF%B0javascript%E4%B8%AD%E7%9A%84this)
  - [用new 运算符创建对象时，具体的创建过程有哪几步](#%E7%94%A8new-%E8%BF%90%E7%AE%97%E7%AC%A6%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E6%97%B6%E5%85%B7%E4%BD%93%E7%9A%84%E5%88%9B%E5%BB%BA%E8%BF%87%E7%A8%8B%E6%9C%89%E5%93%AA%E5%87%A0%E6%AD%A5)
  - [isPrototypeOf方法与instanceof 运算符有哪些区别](#isprototypeof%E6%96%B9%E6%B3%95%E4%B8%8Einstanceof-%E8%BF%90%E7%AE%97%E7%AC%A6%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8C%BA%E5%88%AB)
  - [请介绍一下节流函数和防抖函数，简单实现节流函数和防抖函数](#%E8%AF%B7%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E5%92%8C%E9%98%B2%E6%8A%96%E5%87%BD%E6%95%B0%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E5%92%8C%E9%98%B2%E6%8A%96%E5%87%BD%E6%95%B0)
  - [请介绍一下回流（Reflow）与重绘（Repaint）](#%E8%AF%B7%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B%E5%9B%9E%E6%B5%81reflow%E4%B8%8E%E9%87%8D%E7%BB%98repaint)
  - [请描述一下什么是执行栈](#%E8%AF%B7%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8B%E4%BB%80%E4%B9%88%E6%98%AF%E6%89%A7%E8%A1%8C%E6%A0%88)
  - [Vue通信](#vue%E9%80%9A%E4%BF%A1)
  - [斐波那契数列？怎么优化？](#%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97%E6%80%8E%E4%B9%88%E4%BC%98%E5%8C%96)
  - [node主要用来解决什么问题，node做BFF的优点是什么](#node%E4%B8%BB%E8%A6%81%E7%94%A8%E6%9D%A5%E8%A7%A3%E5%86%B3%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98node%E5%81%9Abff%E7%9A%84%E4%BC%98%E7%82%B9%E6%98%AF%E4%BB%80%E4%B9%88)
  - [对项目监控这块有什么了解吗](#%E5%AF%B9%E9%A1%B9%E7%9B%AE%E7%9B%91%E6%8E%A7%E8%BF%99%E5%9D%97%E6%9C%89%E4%BB%80%E4%B9%88%E4%BA%86%E8%A7%A3%E5%90%97)
  - [对微服务有了解吗](#%E5%AF%B9%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9C%89%E4%BA%86%E8%A7%A3%E5%90%97)
  - [restful接口架构的优缺点, restful接口架构会导致什么安全问题，具体怎么解决](#restful%E6%8E%A5%E5%8F%A3%E6%9E%B6%E6%9E%84%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9-restful%E6%8E%A5%E5%8F%A3%E6%9E%B6%E6%9E%84%E4%BC%9A%E5%AF%BC%E8%87%B4%E4%BB%80%E4%B9%88%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98%E5%85%B7%E4%BD%93%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3)
  - [Webpack性能优化你知道哪些](#webpack%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%BD%A0%E7%9F%A5%E9%81%93%E5%93%AA%E4%BA%9B)
  - [如何设计一个组件？](#%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)
  - [code split 怎么做？](#code-split-%E6%80%8E%E4%B9%88%E5%81%9A)
  - [什么是treeshaking？注意些什么？](#%E4%BB%80%E4%B9%88%E6%98%AFtreeshaking%E6%B3%A8%E6%84%8F%E4%BA%9B%E4%BB%80%E4%B9%88)
  - [一像素问题怎么解决？](#%E4%B8%80%E5%83%8F%E7%B4%A0%E9%97%AE%E9%A2%98%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3)
  - [CSS：区别 px、em、rem](#css%E5%8C%BA%E5%88%AB-pxemrem)
  - [ios滑动不流畅](#ios%E6%BB%91%E5%8A%A8%E4%B8%8D%E6%B5%81%E7%95%85)
  - [iOS 上拉边界下拉出现白色空白](#ios-%E4%B8%8A%E6%8B%89%E8%BE%B9%E7%95%8C%E4%B8%8B%E6%8B%89%E5%87%BA%E7%8E%B0%E7%99%BD%E8%89%B2%E7%A9%BA%E7%99%BD)
  - [软键盘将页面顶起来、收起未回落](#%E8%BD%AF%E9%94%AE%E7%9B%98%E5%B0%86%E9%A1%B5%E9%9D%A2%E9%A1%B6%E8%B5%B7%E6%9D%A5%E6%94%B6%E8%B5%B7%E6%9C%AA%E5%9B%9E%E8%90%BD)
  - [iPhone X系列安全区域适配问题](#iphone-x%E7%B3%BB%E5%88%97%E5%AE%89%E5%85%A8%E5%8C%BA%E5%9F%9F%E9%80%82%E9%85%8D%E9%97%AE%E9%A2%98)
  - [Hybrid  H5开发需要注意些什么？](#hybrid--h5%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BA%9B%E4%BB%80%E4%B9%88)
  - [Webview的缓存机制是什么？](#webview%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E6%98%AF%E4%BB%80%E4%B9%88)
  - [有哪些监控网页卡顿的方法](#%E6%9C%89%E5%93%AA%E4%BA%9B%E7%9B%91%E6%8E%A7%E7%BD%91%E9%A1%B5%E5%8D%A1%E9%A1%BF%E7%9A%84%E6%96%B9%E6%B3%95)
  - [如果需要手动写动画，你认为最小时间间隔是多久，为什么？](#%E5%A6%82%E6%9E%9C%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%86%99%E5%8A%A8%E7%94%BB%E4%BD%A0%E8%AE%A4%E4%B8%BA%E6%9C%80%E5%B0%8F%E6%97%B6%E9%97%B4%E9%97%B4%E9%9A%94%E6%98%AF%E5%A4%9A%E4%B9%85%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [什么是Cookie 隔离](#%E4%BB%80%E4%B9%88%E6%98%AFcookie-%E9%9A%94%E7%A6%BB)
  - [Chrome 打开一个页面需要启动多少进程？分别有哪些进程？](#chrome-%E6%89%93%E5%BC%80%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E9%9C%80%E8%A6%81%E5%90%AF%E5%8A%A8%E5%A4%9A%E5%B0%91%E8%BF%9B%E7%A8%8B%E5%88%86%E5%88%AB%E6%9C%89%E5%93%AA%E4%BA%9B%E8%BF%9B%E7%A8%8B)
  - [promise 和 callback 有什么区别](#promise-%E5%92%8C-callback-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [async/await 实现原理](#asyncawait-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)
  - [介绍暂时性死区](#%E4%BB%8B%E7%BB%8D%E6%9A%82%E6%97%B6%E6%80%A7%E6%AD%BB%E5%8C%BA)
  - [介绍一下PM2](#%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8Bpm2)
  - [使用过git merge和git rebase吗？它们之间有什么区别？](#%E4%BD%BF%E7%94%A8%E8%BF%87git-merge%E5%92%8Cgit-rebase%E5%90%97%E5%AE%83%E4%BB%AC%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [告诉我 Git 中 HEAD、工作树和索引之间的区别？](#%E5%91%8A%E8%AF%89%E6%88%91-git-%E4%B8%AD-head%E5%B7%A5%E4%BD%9C%E6%A0%91%E5%92%8C%E7%B4%A2%E5%BC%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [git pull和git fetch之间有什么区别](#git-pull%E5%92%8Cgit-fetch%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [说出space-between和space-around的区别](#%E8%AF%B4%E5%87%BAspace-between%E5%92%8Cspace-around%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [你所知道的前端性能优化方案](#%E4%BD%A0%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88)
  - [CSS3中transition和animation的属性分别有哪些](#css3%E4%B8%ADtransition%E5%92%8Canimation%E7%9A%84%E5%B1%9E%E6%80%A7%E5%88%86%E5%88%AB%E6%9C%89%E5%93%AA%E4%BA%9B)
  - [CSS 中的 vertical-align 有哪些值？它在什么情况下才能生效？](#css-%E4%B8%AD%E7%9A%84-vertical-align-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%80%BC%E5%AE%83%E5%9C%A8%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E6%89%8D%E8%83%BD%E7%94%9F%E6%95%88)
  - [CSS 中的 background 的 background-image 属性可以和 background-color 属性一起生效么？ackground-color 属性可以覆盖 background-image 属性吗？](#css-%E4%B8%AD%E7%9A%84-background-%E7%9A%84-background-image-%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%92%8C-background-color-%E5%B1%9E%E6%80%A7%E4%B8%80%E8%B5%B7%E7%94%9F%E6%95%88%E4%B9%88ackground-color-%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%A6%86%E7%9B%96-background-image-%E5%B1%9E%E6%80%A7%E5%90%97)
  - [选择器优先级](#%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7)
  - [跨标签页的通讯方式有哪些](#%E8%B7%A8%E6%A0%87%E7%AD%BE%E9%A1%B5%E7%9A%84%E9%80%9A%E8%AE%AF%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B)
  - [介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？](#%E4%BB%8B%E7%BB%8D%E4%B8%8B-npm-%E6%A8%A1%E5%9D%97%E5%AE%89%E8%A3%85%E6%9C%BA%E5%88%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BE%93%E5%85%A5-npm-install-%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%E5%AF%B9%E5%BA%94%E7%9A%84%E6%A8%A1%E5%9D%97)
  - [v-if、v-show、v-html 的原理是什么，它是如何封装的？](#v-ifv-showv-html-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B0%81%E8%A3%85%E7%9A%84)
  - [为什么建立连接要三次握手，为什么不是2次，4次](#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%E8%A6%81%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF2%E6%AC%A14%E6%AC%A1)
  - [说说事件循环机制](#%E8%AF%B4%E8%AF%B4%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6)
  - [如何监控网页崩溃?](#%E5%A6%82%E4%BD%95%E7%9B%91%E6%8E%A7%E7%BD%91%E9%A1%B5%E5%B4%A9%E6%BA%83)
  - [长按闪退的问题](#%E9%95%BF%E6%8C%89%E9%97%AA%E9%80%80%E7%9A%84%E9%97%AE%E9%A2%98)
  - [正向代理与反向代理的理解以及区别](#%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3%E4%BB%A5%E5%8F%8A%E5%8C%BA%E5%88%AB)
  - [CDN有哪些优化静态资源加载速度的方法？](#cdn%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E5%8C%96%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E9%80%9F%E5%BA%A6%E7%9A%84%E6%96%B9%E6%B3%95)
  - [消除transition闪屏](#%E6%B6%88%E9%99%A4transition%E9%97%AA%E5%B1%8F)
  - [GPU 加速原理](#gpu-%E5%8A%A0%E9%80%9F%E5%8E%9F%E7%90%86)
  - [fetch 和 ajax 的区别](#fetch-%E5%92%8C-ajax-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [渲染引擎](#%E6%B8%B2%E6%9F%93%E5%BC%95%E6%93%8E)
  - [常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解](#%E5%B8%B8%E8%A7%81%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B%E4%BD%A0%E5%AF%B9%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8%E7%9A%84%E7%90%86%E8%A7%A3)
  - [什么是文档流](#%E4%BB%80%E4%B9%88%E6%98%AF%E6%96%87%E6%A1%A3%E6%B5%81)
  - [display:none与visibility：hidden的区别](#displaynone%E4%B8%8Evisibilityhidden%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [CSS中link 和@import的区别](#css%E4%B8%ADlink-%E5%92%8Cimport%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用](#before-%E5%92%8C-after%E4%B8%AD%E5%8F%8C%E5%86%92%E5%8F%B7%E5%92%8C%E5%8D%95%E5%86%92%E5%8F%B7%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B%E8%BF%992%E4%B8%AA%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E4%BD%9C%E7%94%A8)
  - [二进制转 Base64](#%E4%BA%8C%E8%BF%9B%E5%88%B6%E8%BD%AC-base64)
  - [DOM事件中target和currentTarget的区别](#dom%E4%BA%8B%E4%BB%B6%E4%B8%ADtarget%E5%92%8Ccurrenttarget%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [移动端300ms延迟由来及解决方案](#%E7%A7%BB%E5%8A%A8%E7%AB%AF300ms%E5%BB%B6%E8%BF%9F%E7%94%B1%E6%9D%A5%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
  - [前后端分离的项目如何seo](#%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95seo)
  - [一次性插入1000个div，如何优化插入的性能](#%E4%B8%80%E6%AC%A1%E6%80%A7%E6%8F%92%E5%85%A51000%E4%B8%AAdiv%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96%E6%8F%92%E5%85%A5%E7%9A%84%E6%80%A7%E8%83%BD)
  - [a.b.c.d和a['b']['c']['d']，哪个性能更高](#abcd%E5%92%8Cabcd%E5%93%AA%E4%B8%AA%E6%80%A7%E8%83%BD%E6%9B%B4%E9%AB%98)
  - [伪类和伪元素的区别](#%E4%BC%AA%E7%B1%BB%E5%92%8C%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [讲讲MVVM，说说与MVC有什么区别](#%E8%AE%B2%E8%AE%B2mvvm%E8%AF%B4%E8%AF%B4%E4%B8%8Emvc%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [说说z-index有什么需要注意的地方](#%E8%AF%B4%E8%AF%B4z-index%E6%9C%89%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E5%9C%B0%E6%96%B9)
  - [说说DOM事件流](#%E8%AF%B4%E8%AF%B4dom%E4%BA%8B%E4%BB%B6%E6%B5%81)
  - [Vue的数据为什么频繁变化但只会更新一次](#vue%E7%9A%84%E6%95%B0%E6%8D%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E9%A2%91%E7%B9%81%E5%8F%98%E5%8C%96%E4%BD%86%E5%8F%AA%E4%BC%9A%E6%9B%B4%E6%96%B0%E4%B8%80%E6%AC%A1)
  - [判断两个变量是否一样](#%E5%88%A4%E6%96%AD%E4%B8%A4%E4%B8%AA%E5%8F%98%E9%87%8F%E6%98%AF%E5%90%A6%E4%B8%80%E6%A0%B7)
  - [Vue模板编译的过程](#vue%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91%E7%9A%84%E8%BF%87%E7%A8%8B)
  - [居中为什么要使用transform（为什么不使用marginLeft/Top）](#%E5%B1%85%E4%B8%AD%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8transform%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%BD%BF%E7%94%A8marginlefttop)
  - [src和 href 的区别](#src%E5%92%8C-href-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [delete 数组的 item，数组的 length 是否会 -1](#delete-%E6%95%B0%E7%BB%84%E7%9A%84-item%E6%95%B0%E7%BB%84%E7%9A%84-length-%E6%98%AF%E5%90%A6%E4%BC%9A--1)
  - [给出 ['1', '3', '10'].map(parseInt) 执行结果](#%E7%BB%99%E5%87%BA-1-3-10mapparseint-%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C)
  - [HTTP劫持、DNS劫持与XSS](#http%E5%8A%AB%E6%8C%81dns%E5%8A%AB%E6%8C%81%E4%B8%8Exss)
  - [虚拟DOM的优劣如何?](#%E8%99%9A%E6%8B%9Fdom%E7%9A%84%E4%BC%98%E5%8A%A3%E5%A6%82%E4%BD%95)
  - [介绍下 BFC、IFC、GFC 和 FFC](#%E4%BB%8B%E7%BB%8D%E4%B8%8B-bfcifcgfc-%E5%92%8C-ffc)
  - [Promise、Promise.all、Promise.race 分别怎么用？](#promisepromiseallpromiserace-%E5%88%86%E5%88%AB%E6%80%8E%E4%B9%88%E7%94%A8)
  - [你是如何理解 HTML 语义化的？](#%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-html-%E8%AF%AD%E4%B9%89%E5%8C%96%E7%9A%84)
  - [meta viewport 是做什么用的，怎么写？](#meta-viewport-%E6%98%AF%E5%81%9A%E4%BB%80%E4%B9%88%E7%94%A8%E7%9A%84%E6%80%8E%E4%B9%88%E5%86%99)
  - [flex 怎么用，常用属性有哪些？](#flex-%E6%80%8E%E4%B9%88%E7%94%A8%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7%E6%9C%89%E5%93%AA%E4%BA%9B)
  - [如何用正则实现 trim()？](#%E5%A6%82%E4%BD%95%E7%94%A8%E6%AD%A3%E5%88%99%E5%AE%9E%E7%8E%B0-trim)
  - [不用 class 如何实现继承？用 class 又如何实现？](#%E4%B8%8D%E7%94%A8-class-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF%E7%94%A8-class-%E5%8F%88%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0)
  - [Vue 的父组件和子组件生命周期钩子执行顺序是什么](#vue-%E7%9A%84%E7%88%B6%E7%BB%84%E4%BB%B6%E5%92%8C%E5%AD%90%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F%E6%98%AF%E4%BB%80%E4%B9%88)
  - [为什么 var 可以重复声明](#%E4%B8%BA%E4%BB%80%E4%B9%88-var-%E5%8F%AF%E4%BB%A5%E9%87%8D%E5%A4%8D%E5%A3%B0%E6%98%8E)
  - [WeakMap 和 Map 的区别?](#weakmap-%E5%92%8C-map-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [可以对图片开启 gzip 压缩吗，为什么](#%E5%8F%AF%E4%BB%A5%E5%AF%B9%E5%9B%BE%E7%89%87%E5%BC%80%E5%90%AF-gzip-%E5%8E%8B%E7%BC%A9%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [js 代码压缩的原理是什么](#js-%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88)
  - [在前端开发中，如何获取浏览器的唯一标识](#%E5%9C%A8%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%B8%AD%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86)
  - [Node 面试题](#node-%E9%9D%A2%E8%AF%95%E9%A2%98)
    - [Node.js 在执行require(id)是怎样找到一个模块的？](#nodejs-%E5%9C%A8%E6%89%A7%E8%A1%8Crequireid%E6%98%AF%E6%80%8E%E6%A0%B7%E6%89%BE%E5%88%B0%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97%E7%9A%84)
    - [能否使用require('.json')的方式加载大量json文件？](#%E8%83%BD%E5%90%A6%E4%BD%BF%E7%94%A8requirejson%E7%9A%84%E6%96%B9%E5%BC%8F%E5%8A%A0%E8%BD%BD%E5%A4%A7%E9%87%8Fjson%E6%96%87%E4%BB%B6)
    - [Node.js 的异步IO是如何进行的？](#nodejs-%E7%9A%84%E5%BC%82%E6%AD%A5io%E6%98%AF%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E7%9A%84)
    - [Node的子进程有什么原理?](#node%E7%9A%84%E5%AD%90%E8%BF%9B%E7%A8%8B%E6%9C%89%E4%BB%80%E4%B9%88%E5%8E%9F%E7%90%86)
    - [Node cluster是什么原理？](#node-cluster%E6%98%AF%E4%BB%80%E4%B9%88%E5%8E%9F%E7%90%86)
    - [如何保证session的安全？](#%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81session%E7%9A%84%E5%AE%89%E5%85%A8)
    - [如何实现父进程退出时子进程跟着退出？](#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%88%B6%E8%BF%9B%E7%A8%8B%E9%80%80%E5%87%BA%E6%97%B6%E5%AD%90%E8%BF%9B%E7%A8%8B%E8%B7%9F%E7%9D%80%E9%80%80%E5%87%BA)
    - [实现一个能自动重启的http服务集群](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E8%83%BD%E8%87%AA%E5%8A%A8%E9%87%8D%E5%90%AF%E7%9A%84http%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4)
  - [Node文件查找优先级](#node%E6%96%87%E4%BB%B6%E6%9F%A5%E6%89%BE%E4%BC%98%E5%85%88%E7%BA%A7)
    - [Node.js的加载机制](#nodejs%E7%9A%84%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6)
    - [require与import的区别](#require%E4%B8%8Eimport%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [严格路由和不严格路由有什么区别](#%E4%B8%A5%E6%A0%BC%E8%B7%AF%E7%94%B1%E5%92%8C%E4%B8%8D%E4%B8%A5%E6%A0%BC%E8%B7%AF%E7%94%B1%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
    - [如何设置路由不敏感或严格路由](#%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E8%B7%AF%E7%94%B1%E4%B8%8D%E6%95%8F%E6%84%9F%E6%88%96%E4%B8%A5%E6%A0%BC%E8%B7%AF%E7%94%B1)
    - [什么是lazy router以及为什么要lazy router](#%E4%BB%80%E4%B9%88%E6%98%AFlazy-router%E4%BB%A5%E5%8F%8A%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81lazy-router)
    - [trust proxy什么用](#trust-proxy%E4%BB%80%E4%B9%88%E7%94%A8)
    - [Etag weak 和strong有什么区别](#etag-weak-%E5%92%8Cstrong%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
    - [app.all和app.use的区别及性能差异](#appall%E5%92%8Cappuse%E7%9A%84%E5%8C%BA%E5%88%AB%E5%8F%8A%E6%80%A7%E8%83%BD%E5%B7%AE%E5%BC%82)
    - [如何捕捉next(err)传递的错误](#%E5%A6%82%E4%BD%95%E6%8D%95%E6%8D%89nexterr%E4%BC%A0%E9%80%92%E7%9A%84%E9%94%99%E8%AF%AF)
    - [路由function内部的错误是在哪个环节捕捉的](#%E8%B7%AF%E7%94%B1function%E5%86%85%E9%83%A8%E7%9A%84%E9%94%99%E8%AF%AF%E6%98%AF%E5%9C%A8%E5%93%AA%E4%B8%AA%E7%8E%AF%E8%8A%82%E6%8D%95%E6%8D%89%E7%9A%84)
    - [Node.js为什么处理异步IO快?](#nodejs%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%84%E7%90%86%E5%BC%82%E6%AD%A5io%E5%BF%AB)
    - [Node中的错误怎么捕获？](#node%E4%B8%AD%E7%9A%84%E9%94%99%E8%AF%AF%E6%80%8E%E4%B9%88%E6%8D%95%E8%8E%B7)
    - [如果在回调函数中如何捕获异常呢？](#%E5%A6%82%E6%9E%9C%E5%9C%A8%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E4%B8%AD%E5%A6%82%E4%BD%95%E6%8D%95%E8%8E%B7%E5%BC%82%E5%B8%B8%E5%91%A2)
    - [Node中遇到错误，进程退出了怎么办？](#node%E4%B8%AD%E9%81%87%E5%88%B0%E9%94%99%E8%AF%AF%E8%BF%9B%E7%A8%8B%E9%80%80%E5%87%BA%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E)
    - [Promise的错误如何统一捕获？](#promise%E7%9A%84%E9%94%99%E8%AF%AF%E5%A6%82%E4%BD%95%E7%BB%9F%E4%B8%80%E6%8D%95%E8%8E%B7)
    - [Node 的Cluster模式是什么？](#node-%E7%9A%84cluster%E6%A8%A1%E5%BC%8F%E6%98%AF%E4%BB%80%E4%B9%88)
    - [Node中的进程和线程什么区别？](#node%E4%B8%AD%E7%9A%84%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
    - [Node中如何创建一个进程？](#node%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%BF%9B%E7%A8%8B)
    - [Node的多个进程如何通信？](#node%E7%9A%84%E5%A4%9A%E4%B8%AA%E8%BF%9B%E7%A8%8B%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1)
    - [如何监控Node？](#%E5%A6%82%E4%BD%95%E7%9B%91%E6%8E%A7node)
    - [Node中的日志如何串行保证？](#node%E4%B8%AD%E7%9A%84%E6%97%A5%E5%BF%97%E5%A6%82%E4%BD%95%E4%B8%B2%E8%A1%8C%E4%BF%9D%E8%AF%81)
    - [Node中的事件循环是什么？](#node%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%98%AF%E4%BB%80%E4%B9%88)
  - [架构的设计步骤](#%E6%9E%B6%E6%9E%84%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%AD%A5%E9%AA%A4)
  - [设计原则](#%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99)
  - [移动端高清方案如何解决 ?](#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-)
  - [请谈谈微信小程序主要目录和文件的作用？](#%E8%AF%B7%E8%B0%88%E8%B0%88%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%BB%E8%A6%81%E7%9B%AE%E5%BD%95%E5%92%8C%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%9C%E7%94%A8)
  - [请谈谈wxml与标准的html的异同？](#%E8%AF%B7%E8%B0%88%E8%B0%88wxml%E4%B8%8E%E6%A0%87%E5%87%86%E7%9A%84html%E7%9A%84%E5%BC%82%E5%90%8C)
  - [请谈谈WXSS和CSS的异同？](#%E8%AF%B7%E8%B0%88%E8%B0%88wxss%E5%92%8Ccss%E7%9A%84%E5%BC%82%E5%90%8C)
  - [你是怎么封装微信小程序的数据请求的？](#%E4%BD%A0%E6%98%AF%E6%80%8E%E4%B9%88%E5%B0%81%E8%A3%85%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82%E7%9A%84)
  - [小程序页面间有哪些传递数据的方法？](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%A1%B5%E9%9D%A2%E9%97%B4%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE%E7%9A%84%E6%96%B9%E6%B3%95)
  - [请谈谈小程序的双向绑定和vue的异同？](#%E8%AF%B7%E8%B0%88%E8%B0%88%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%92%8Cvue%E7%9A%84%E5%BC%82%E5%90%8C)
  - [请谈谈小程序的生命周期函数？](#%E8%AF%B7%E8%B0%88%E8%B0%88%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0)
  - [请谈谈原生开发小程序、wepy、mpvue 的对比？](#%E8%AF%B7%E8%B0%88%E8%B0%88%E5%8E%9F%E7%94%9F%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8Fwepympvue-%E7%9A%84%E5%AF%B9%E6%AF%94)
  - [哪些方法来提高微信小程序的应用速度？](#%E5%93%AA%E4%BA%9B%E6%96%B9%E6%B3%95%E6%9D%A5%E6%8F%90%E9%AB%98%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%BA%94%E7%94%A8%E9%80%9F%E5%BA%A6)
  - [分析微信小程序的优劣势？](#%E5%88%86%E6%9E%90%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%BC%98%E5%8A%A3%E5%8A%BF)
  - [怎么解决微信小程序的异步请求问题？](#%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E9%97%AE%E9%A2%98)
  - [小程序关联微信公众号如何确定用户的唯一性？](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%85%B3%E8%81%94%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E5%94%AF%E4%B8%80%E6%80%A7)
  - [使用webview直接加载要注意哪些事项？](#%E4%BD%BF%E7%94%A8webview%E7%9B%B4%E6%8E%A5%E5%8A%A0%E8%BD%BD%E8%A6%81%E6%B3%A8%E6%84%8F%E5%93%AA%E4%BA%9B%E4%BA%8B%E9%A1%B9)
  - [小程序调用后台接口遇到哪些问题？](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E7%94%A8%E5%90%8E%E5%8F%B0%E6%8E%A5%E5%8F%A3%E9%81%87%E5%88%B0%E5%93%AA%E4%BA%9B%E9%97%AE%E9%A2%98)
  - [微信小程序如何实现下拉刷新？](#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0)
  - [webview中的页面怎么跳转回小程序？](#webview%E4%B8%AD%E7%9A%84%E9%A1%B5%E9%9D%A2%E6%80%8E%E4%B9%88%E8%B7%B3%E8%BD%AC%E5%9B%9E%E5%B0%8F%E7%A8%8B%E5%BA%8F)
  - [bindtap和catchtap的区别？](#bindtap%E5%92%8Ccatchtap%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [简述wx.navigateTo(),wx.redirectTo(),wx.switchTab(),wx.navigateBack(),wx.reLaunch()的区别？](#%E7%AE%80%E8%BF%B0wxnavigatetowxredirecttowxswitchtabwxnavigatebackwxrelaunch%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [小程序的生命周期函数？](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0)
  - [微信小程序与H5的区别？](#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8Eh5%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [小程序和Vue写法的区别？](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%92%8Cvue%E5%86%99%E6%B3%95%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [Loader和Plugin的区别？](#loader%E5%92%8Cplugin%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [Webpack构建流程简单说一下](#webpack%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B%E7%AE%80%E5%8D%95%E8%AF%B4%E4%B8%80%E4%B8%8B)
  - [source map是什么？生产环境怎么用？](#source-map%E6%98%AF%E4%BB%80%E4%B9%88%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%80%8E%E4%B9%88%E7%94%A8)
  - [模块打包原理](#%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85%E5%8E%9F%E7%90%86)
  - [Webpack 的热更新原理](#webpack-%E7%9A%84%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86)
  - [如何优化 Webpack 的构建速度？](#%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96-webpack-%E7%9A%84%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6)
  - [JS 数字丢失精度的原因?](#js-%E6%95%B0%E5%AD%97%E4%B8%A2%E5%A4%B1%E7%B2%BE%E5%BA%A6%E7%9A%84%E5%8E%9F%E5%9B%A0)
  - [为什么 Javascript 要是单线程的 ?](#%E4%B8%BA%E4%BB%80%E4%B9%88-javascript-%E8%A6%81%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84-)
  - [为什么 JS 阻塞页面加载 ?](#%E4%B8%BA%E4%BB%80%E4%B9%88-js-%E9%98%BB%E5%A1%9E%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD-)
  - [css 加载会造成阻塞吗 ？](#css-%E5%8A%A0%E8%BD%BD%E4%BC%9A%E9%80%A0%E6%88%90%E9%98%BB%E5%A1%9E%E5%90%97-)
  - [DOMContentLoaded 与 load 的区别 ?](#domcontentloaded-%E4%B8%8E-load-%E7%9A%84%E5%8C%BA%E5%88%AB-)
  - [什么是 CRP,即关键渲染路径(Critical Rendering Path)? 如何优化 ?](#%E4%BB%80%E4%B9%88%E6%98%AF-crp%E5%8D%B3%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84critical-rendering-path-%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96-)
  - [defer 和 async 的区别 ?](#defer-%E5%92%8C-async-%E7%9A%84%E5%8C%BA%E5%88%AB-)
  - [谈谈浏览器的回流与重绘](#%E8%B0%88%E8%B0%88%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98)
  - [什么是渲染层合并 (Composite) ?](#%E4%BB%80%E4%B9%88%E6%98%AF%E6%B8%B2%E6%9F%93%E5%B1%82%E5%90%88%E5%B9%B6-composite-)
  - [dns解析的具体过程](#dns%E8%A7%A3%E6%9E%90%E7%9A%84%E5%85%B7%E4%BD%93%E8%BF%87%E7%A8%8B)
  - [new String('a') 和 'a' 是一样的么?](#new-stringa-%E5%92%8C-a-%E6%98%AF%E4%B8%80%E6%A0%B7%E7%9A%84%E4%B9%88)
  - [JSBridge原理是什么？如何设计一个JSBridge？](#jsbridge%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AAjsbridge)
  - [Dev-Server是怎么跑起来](#dev-server%E6%98%AF%E6%80%8E%E4%B9%88%E8%B7%91%E8%B5%B7%E6%9D%A5)
  - [抽取公共文件是怎么配置的](#%E6%8A%BD%E5%8F%96%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6%E6%98%AF%E6%80%8E%E4%B9%88%E9%85%8D%E7%BD%AE%E7%9A%84)
  - [表单可以跨域吗](#%E8%A1%A8%E5%8D%95%E5%8F%AF%E4%BB%A5%E8%B7%A8%E5%9F%9F%E5%90%97)
  - [介绍观察者模式,中介者模式](#%E4%BB%8B%E7%BB%8D%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F)
  - [介绍Service Worker](#%E4%BB%8B%E7%BB%8Dservice-worker)
  - [介绍CSS3中Position:sticky](#%E4%BB%8B%E7%BB%8Dcss3%E4%B8%ADpositionsticky)
  - [a标签默认事件禁掉之后做了什么才实现了跳转](#a%E6%A0%87%E7%AD%BE%E9%BB%98%E8%AE%A4%E4%BA%8B%E4%BB%B6%E7%A6%81%E6%8E%89%E4%B9%8B%E5%90%8E%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%E6%89%8D%E5%AE%9E%E7%8E%B0%E4%BA%86%E8%B7%B3%E8%BD%AC)
  - [使用import时，Webpack对node_modules里的依赖会做什么](#%E4%BD%BF%E7%94%A8import%E6%97%B6webpack%E5%AF%B9node_modules%E9%87%8C%E7%9A%84%E4%BE%9D%E8%B5%96%E4%BC%9A%E5%81%9A%E4%BB%80%E4%B9%88)
  - [Http报文的请求会有几个部分](#http%E6%8A%A5%E6%96%87%E7%9A%84%E8%AF%B7%E6%B1%82%E4%BC%9A%E6%9C%89%E5%87%A0%E4%B8%AA%E9%83%A8%E5%88%86)
  - [介绍AST（Abstract Syntax Tree）抽象语法树](#%E4%BB%8B%E7%BB%8Dastabstract-syntax-tree%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91)
  - [ES6中的Map和原生的对象有什么区别](#es6%E4%B8%AD%E7%9A%84map%E5%92%8C%E5%8E%9F%E7%94%9F%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [JS里垃圾回收机制是什么，常用的是哪种，怎么处理的](#js%E9%87%8C%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E6%98%AF%E4%BB%80%E4%B9%88%E5%B8%B8%E7%94%A8%E7%9A%84%E6%98%AF%E5%93%AA%E7%A7%8D%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84)
  - [小程序里面开页面最多是多少](#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%87%8C%E9%9D%A2%E5%BC%80%E9%A1%B5%E9%9D%A2%E6%9C%80%E5%A4%9A%E6%98%AF%E5%A4%9A%E5%B0%91)
  - [Webpack如何配Sass，需要配哪些Loader](#webpack%E5%A6%82%E4%BD%95%E9%85%8Dsass%E9%9C%80%E8%A6%81%E9%85%8D%E5%93%AA%E4%BA%9Bloader)
  - [配CSS需要哪些Loader](#%E9%85%8Dcss%E9%9C%80%E8%A6%81%E5%93%AA%E4%BA%9Bloader)
  - [Div垂直水平居中（Flex、绝对定位）](#div%E5%9E%82%E7%9B%B4%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%ADflex%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D)
  - [上下固定，中间滚动布局如何实现](#%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E6%BB%9A%E5%8A%A8%E5%B8%83%E5%B1%80%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0)
  - [盒子模型，以及标准情况和IE下的区别](#%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E4%BB%A5%E5%8F%8A%E6%A0%87%E5%87%86%E6%83%85%E5%86%B5%E5%92%8Cie%E4%B8%8B%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [如何实现new](#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0new)
  - [Prototype和Proto区别](#prototype%E5%92%8Cproto%E5%8C%BA%E5%88%AB)
  - [em和px的区别](#em%E5%92%8Cpx%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [如何去除url中的#号](#%E5%A6%82%E4%BD%95%E5%8E%BB%E9%99%A4url%E4%B8%AD%E7%9A%84%E5%8F%B7)
  - [Webpack和Gulp的优缺点](#webpack%E5%92%8Cgulp%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9)
  - [base64为什么能提升性能，缺点](#base64%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E6%8F%90%E5%8D%87%E6%80%A7%E8%83%BD%E7%BC%BA%E7%82%B9)
  - [数据类型分别存在哪里](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%88%86%E5%88%AB%E5%AD%98%E5%9C%A8%E5%93%AA%E9%87%8C)
  - [垃圾回收时栈和堆的区别](#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%97%B6%E6%A0%88%E5%92%8C%E5%A0%86%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [打包时Hash码是怎么生成的](#%E6%89%93%E5%8C%85%E6%97%B6hash%E7%A0%81%E6%98%AF%E6%80%8E%E4%B9%88%E7%94%9F%E6%88%90%E7%9A%84)
  - [webpack中hash、chunkhash和contenthash三者的区别?](#webpack%E4%B8%ADhashchunkhash%E5%92%8Ccontenthash%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [formData和原生的Ajax有什么区别](#formdata%E5%92%8C%E5%8E%9F%E7%94%9F%E7%9A%84ajax%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [SEO优化中用相对路径还是用绝对路径](#seo%E4%BC%98%E5%8C%96%E4%B8%AD%E7%94%A8%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84%E8%BF%98%E6%98%AF%E7%94%A8%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84)
  - [Npm2和Npm3+有什么区别](#npm2%E5%92%8Cnpm3%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [Doctype作用？严格模式与混杂模式如何区分？它们有何意义？](#doctype%E4%BD%9C%E7%94%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89)
  - [页面导入样式时，使用link和@import有什么区别？](#%E9%A1%B5%E9%9D%A2%E5%AF%BC%E5%85%A5%E6%A0%B7%E5%BC%8F%E6%97%B6%E4%BD%BF%E7%94%A8link%E5%92%8Cimport%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [如何区分HTML和HTML5？](#%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86html%E5%92%8Chtml5)
  - [HTML5的离线储存怎么使用，工作原理能不能解释一下？](#html5%E7%9A%84%E7%A6%BB%E7%BA%BF%E5%82%A8%E5%AD%98%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E8%83%BD%E4%B8%8D%E8%83%BD%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B)
  - [用纯CSS创建一个三角形的原理是什么？](#%E7%94%A8%E7%BA%AFcss%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88)
  - [请指出以下代码的区别：function Person(){}、var person = Person()、var person = new Person()？](#%E8%AF%B7%E6%8C%87%E5%87%BA%E4%BB%A5%E4%B8%8B%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8C%BA%E5%88%ABfunction-personvar-person--personvar-person--new-person)
  - [请解释变量声明提升 (hoisting)。](#%E8%AF%B7%E8%A7%A3%E9%87%8A%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E%E6%8F%90%E5%8D%87-hoisting)
  - [面试中查考的Web安全问题](#%E9%9D%A2%E8%AF%95%E4%B8%AD%E6%9F%A5%E8%80%83%E7%9A%84web%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Interviews    
准备面试过程看过的题目🙉    
再看一遍还是会想叹息。     
## 网络相关问题 
### 在浏览器中，一个页面从输入URL到加载完成，都有哪些步骤    

01. 域名解析
02. 建立TCP连接，浏览器与服务器经过3次握手后建立连接   
03. 浏览器发起HTTP气球，获取资源/*-
04. 服务器响应HTTP气球
05. 浏览器渲染   

## http1.1时如何复用Tcp连接      
Http/1.1新的请求可以在上次建立的tcp连接之上发送，连接可以复用.  
在发送http的请求头中设置Connection: keep-alive。
当前的url与上一次下载的url之间进行对比，如果host相同的话，则用上一次的socket_id。否则关闭上一次的socket，重新连接服务器，获取新的socket。所以，url的文件，需要进行排序，将同一个站点的url放在一起即可。 

### HTTP1.1 有哪些不足   

01. 出现队首阻塞问题   
02. 响应不分轻重缓急，只会先来后到   
03. 并行需要建立多个TCP
04. 只能被动等待客户端发起请求
05. HTTP是无状态的，每次请求和响应都会携带大量冗余信息  
### 简述 HTTP1.0/1.1/2.0 的区别   
HTTP 2.0 是 2015 年开发出来的标准，它主要做的改变如下:
头部压缩，由于 HTTP 1.1 经常会出现 User-Agent、Cookie、Accept、Server、Range 等字段可能会占用几百甚至几千字节，而 Body 却经常只有几十字节，所以导致头部偏重。HTTP 2.0 使用 HPACK 算法进行压缩。   
二进制格式，HTTP 2.0 使用了更加靠近 TCP/IP 的二进制格式，而抛弃了 ASCII 码，提升了解析效率    
强化安全，由于安全已经成为重中之重，所以 HTTP2.0 一般都跑在 HTTPS 上。    
多路复用，即每一个请求都是是用作连接共享。一个请求对应一个id，这样一个连接上可以有多个请求。    

### HTTP状态码206是干什么的    
206 部分请求成功，断点续传   
### 介绍SSL和TLS   

SSL：（Secure Socket Layer，安全套接字层），位于可靠的面向连接的网络层协议和应用层协议之间的一种协议层。SSL通过互相认证、使用数字签名确保完整性、使用加密确保私密性，以实现客户端和服务器之间的安全通讯。该协议由两层组成：SSL记录协议和SSL握手协议。   
TLS：（Transport Layer Security，传输层安全协议），用于两个应用程序之间提供保密性和数据完整性。该协议由两层组成：TLS记录协议和TLS握手协议。   

### http 301和302
301 redirect: 301 代表永久性转移(Permanently Moved)   
302 redirect: 302 代表暂时性转移(Temporarily Moved )  
### GET和POST的区别    

(1) GET请求在浏览器回退和刷新时是无害的，而POST请求会告知用户数据会被重新提交；   
(2) GET请求可以收藏为书签，POST请求不可以收藏为书签；   
(3) GET请求可以被缓存，POST请求不可以被缓存，除非在响应头中包含合适的Cache-Control/Expires字段，但是不建议缓存POST请求，其不满足幂等性，每次调用都会对服务器资源造成影响；    
(4) GET请求一般不具有请求体，因此只能进行url编码，而POST请求支持多种编码方式。    
(5) GET请求的参数可以被保留在浏览器的历史中，POST请求不会被保留；   
(6) GET请求因为是向URL添加数据，不同的浏览器厂商，代理服务器，web服务器都可能会有自己的长度限制，而POST请求无长度限制；   
(7) GET请求只允许ASCII字符，POST请求无限制，支持二进制数据；    
(8) GET请求的安全性较差，数据被暴露在浏览器的URL中，所以不能用来传递敏感信息，POST请求的安全性较好，数据不会暴露在URL中；   
(9) GET请求具有幂等性(多次请求不会对资源造成影响)，POST请求不幂等；   
(10) GET请求一般不具有请求体，请求中一般不包含100-continue 协议，所以只会发一次请求，而POST请求在发送数据到服务端之前允许双方"握手"，客户端先发送Expect:100-continue消息，询问服务端是否愿意接收数据，接收到服务端正确的100-continue应答后才会将请求体发送给服务端，服务端再响应200返回数据。  
get 请求在发送过程中会产生一个 TCP 数据包；post 在发送过程中会产生两个 TCP 数据包。对于 get 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）；而对于 post，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。 
### GET 和 POST 在安全性上有什么区别？GET 在哪些情况下会有安全性问题？   
GET 方法中不对数据进行修改，不传送一些保密的信息，而这些需要由 POST 来传输，所以说 GET 不存在安全问题，而需要注意的是 POST 传输的安全问题。     
### http 缓存的优先级      

强缓存>协商缓存
1、Expires
Expires是一个Http1.0提出的概念，它描述的是一个绝对时间，由服务端返回
Expires: Wed, 11 May 2018 07:20:00 GMT
这种方式的弊端在于如果我们修改了客户端的时间可能会意外导致缓存失效。
2、Cache-Control
catche-control是http1.1提出的概念，优先级高于expires，描述的是一个相对时间 
### UDP 和 TCP 的区别   
UDP(用户数据报协议)的特点主要有:   
UDP 能够支持容忍数据包丢失的带宽密集型应用程序    
UDP 具有低延迟的特点    
UDP 能够发送大量的数据包    
UDP 能够允许 DNS 查找，DNS 是建立在 UDP 之上的应用层协议。    
TCP(传输控制协议)的主要特点有:      
TCP 能够确保连接的建立和数据包的发送    
TCP 支持错误重传机制    
TCP 支持拥塞控制，能够在网络拥堵的情况下延迟发送    
TCP 能够提供错误校验和，甄别有害的数据包  
![UDP和TCP的区别](https://mmbiz.qpic.cn/mmbiz_png/libYRuvULTdUPX8o1HyXqaaxrG5kPIzyDcUC1xOPDkPMCnPWX4DutTkGW3ooiaoEl8yoyPwcrLlkB8h5wlhMNqmw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)   
## webpack打包之后的代码报错了，怎么找到报错代码在哪  
打开source-map配置：devtool:'inline-source-map' 
控制台会定位到错误文件      
## 什么是SourceMap      
Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。
[SourceMap详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)    
## HTML的盒子模型有哪些构成，盒子模型有哪几种，默认的是哪一种    
包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素.   
box-sizing : content-box|border-box|inherit;      
(1) content-box ,默认值，可以使设置的宽度和高度值应用到元素的内容框。盒子的width只包含内容。    
即总宽度=margin+border+padding+width      
(2) border-box , 设置的width值其实是除margin外的border+padding+element的总宽度。盒子的width包含border+padding+内容
即总宽度=margin+width     
(3) inherit , 规定应从父元素继承 box-sizing 属性的值    
## 浮动元素有没有什么特征     

特征：
浮动元素会脱离正常的文档流，按照其外边距指定的位置相对于它的上一个块级元素（或父元素）显示
浮动元素后面的块级元素的内容会向此浮动元素的外边距靠齐，但是边框和背景却忽略浮动元素而向上一个任意非浮动元素靠齐
浮动元素后面的内联元素会向此浮动元素的外边距靠齐

float造成的影响：       
1、对其父元素的影响   
对于其父元素来说，元素浮动之后，它脱离当前正常的文档流，所以它也无法撑开其父元素，造成父元素的塌陷    
2、对其兄弟元素（非浮动）的影响        
如果兄弟元素为块级元素，该元素会忽视浮动元素的而占据它的位置，并且元素会处在浮动元素的下层（并且无法通过z-index属性改变他们的层叠位置），但它的内部文字和其他行内元素都会环绕浮动元素。   
如果如果兄弟元素为内联元素，则元素会环绕浮动元素排列。    
3、对其兄弟元素（浮动）的影响                 
同一个方向的浮动元素：当一个浮动元素在浮动过程中碰到同一个方向的浮动元素时，它会紧跟在它们后面
反方向的浮动元素：互不影响，位于同一条水平线上，当空间不够时会被挤下    
4、对子元素的影响          
当一个元素浮动时，在没有清除浮动的情况下，它无法撑开其父元素，但它可以让自己的浮动子元素撑开它自身，并且在没有定义具体宽度情况下，使自身的宽度从100%变为自适应（浮动元素display:block）。其高度和宽度均为浮动元素高度和非浮动元素高度之间的最大值。   

## 清除浮动的所有方法     

1. clear:both
2. overflow:hidden  

## cookie有哪些特征           

cookie可以实现跨页面全局变量        
cookie可以跨越同域名下的多个网页，但不能跨越多个域名使用        
同一个网站中所有页面共享一套cookie      
可以设置有效期限        
存储空间4-10KB左右      
cookie面临的问题：      
CSRF(跨站请求伪造)攻击，这个也好解决，很多框架都屏蔽这个问题        
有的客户端不支持cookie，需要手动设置，比如小程序
浏览器对cookie有限制，不能手动设置cookie，对于混合嵌套的开发有问题，比如小程序跳转H5页面，不能携带cookie        
浏览器对单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie      

## cookie的其他解决方案           

session 是另一种记录服务器和客户端会话状态的机制    
session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中   

### Cookie 和 Session 的区别    

安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。      
存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。     
有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。     
存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。   

### 什么是 JWT

JSON Web Token（简称 JWT）是目前最流行的跨域认证解决方案。    
是一种认证授权机制。    
JWT 是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准（RFC 7519）。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源。比如用在用户登录上。    
可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。   

### Token 和 JWT 的区别   

Token：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效。     
JWT：将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据。     

session面临的问题：     
负载均衡多服务器的情况，不好确认当前用户是否登录，因为多服务器不共享seesion。这个问题也可以将session存在一个服务器中来解决，但是就不能完全达到负载均衡的效果。        
每个客户端只需存储自己的session          id，但是服务端却需要存储所有用户session      id，对服务器也是一个压力        
token的意思是“令牌”，是用户身份的验证方式，最简单的token组成：sign(签名，经过加密后的数据)，相当于上文提到的session id。token可以放在header、url中，在每次网络访问都携带，一般是写请求头header中。相比于cookie，你可以认为只是存储的地方参数不同而已。token相比于cookie就是有cookie的功能，没有cookie的限制。比如其他客户端不会限制header的cookie。token是cookie很好替代品。      

解决方案        
针对上面提到问题，人们想到的办法是用token代替cookie和seesion。一个token怎么替代两个的呢？
服务端把用户信息加密（token）传给客户端，客户端每次访问都返回token，服务端解密token，就知道这个用户是谁了。通过cpu加解密，服务端就不需要存储session id占用存储空间，就很好的解决负载均衡多服务器的问题了      

## localstorage存数据的格式是什么 

localStorage存储数据的格式都是以字符串的形式来存储的           
      

## 箭头函数      

引入箭头函数有两个方面的作用：更简短的函数并且不绑定this        

箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj.

## 如果一个页面要做性能优化，从哪方面考察，从哪些地方优化     
 
1. 减少http 请求    
2. CDN  
3. 添加缓存：添加Expires头，ETag  
4. gzip 
5. 样式置顶,脚本置底  



## 请解释原型继承（prototype inheritance）的工作原理  

每一个对象都包含一个原型属性，用于关联另一个对象，关联后就能使用那个对象的属性和方法，这就是js的原型式继承。    
所有 JS 对象都有一个prototype属性，指向它的原型对象。当试图访问一个对象的属性时，   

如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，    
直到找到一个名字匹配的属性或到达原型链的末尾。这种行为是在模拟经典的继承，但是与其说是继承，不如说是委托（delegation）。

## 说说你对 AMD 和 CommonJS 的了解   

它们都是实现模块体系的方式，直到 ES2015 出现之前，JavaScript 一直没有模块体系。CommonJS 是同步的，而 AMD（Asynchronous Module Definition）从全称中可以明显看出是异步的。CommonJS 的设计是为服务器端开发考虑的，而 AMD 支持异步加载模块，更适合浏览器。

(前端模块化：CommonJS, AMD, CMD, ES6)

 

## 埋点的实现思路      

> 代码埋点、可视化埋点和无痕埋点   

如果埋点的事件较多，或者说网页内部交互频繁，可以通过本地存储的方式先缓存上报信息，然后定期上报。

## 文件上传断点、续传   

01. 把文件按大小1M分割成N份
02. 每次上传时，告诉后台大文件的md5、当前第几份（从0开始）、总共几份
03. 并行上传，前端同时开启5个请求进行传输增加速度
04. 上传失败或出错后，继续上传下一份，把出错的份放在队尾，如果一直出错则中断请求防止死循环
05. 后台接受文件后通过md5进行比对，上次是否接受过此文件，如果接受则跳过，最后进行文件合并出来     

## 虚拟DOM算法思路   
用JS对象模拟DOM树   
比较两棵虚拟DOM树的差异
把差异应用到真正的DOM树上

     

## webpack中 loader、plugin 的实现思路   

Loader: 能把源文件经过转化后输出新的结果      
Webpack通过Plugin机制让其更加灵活，以适应各种应用场景。 在Webpack运行的生命周期中会广播出许多事件，Plugin可以监听这些事件，在合适的时机通过Webpack提供的API改变输出结果。

## 前端构建工具的、vue-cli、create-react-app 的原理和实现思路      

![vue-cli](https://pic2.zhimg.com/80/v2-b487d3a06dbf5ddf8caab18f13616485_hd.jpg)

## 事件委托？原理、好处、应用场景。     

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。        
这种技术的好处是：
内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。    

## vue和react的区别。        

1.react整体的思路就是函数式，所以推崇纯组件，数据不可变，单向数据流.
而vue是基于可变数据的，支持双向绑定.      
2.vue内置了很多功能，而react做的很少，很多都是由社区来完成的，vue追求的是开发的简单，而react更在乎方式是否正确。           

## VUEX的原理

vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件   

## 闭包     
闭包是函数和声明该函数的词法环境的组合。      
词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。    
为什么使用闭包？    
利用闭包实现数据私有化或模拟私有方法。这个方式也称为模块模式（module pattern）。    
部分参数函数（partial applications）柯里化（currying）.

## 匿名函数的典型应用场景是什么

匿名函数可以在 IIFE 中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域。        

(function() {
  // 一些代码。
})(); 
匿名函数可以作为只用一次，不需要在其他地方使用的回调函数。
当处理函数在调用它们的程序内部被定义时，代码具有更好地自闭性和可读性，可以省去寻找该处理函数的函数体位置的麻烦。         
匿名函数可以用于函数式编程或 Lodash（类似于回调函数）。

## 宿主对象（hostbjects）和原生对象（native objects）的区别是什么

01. 原生对象是由 ECMAScript 规范定义的 JavaScript 内置对象，比如String、Math、RegExp、Object、Function等等。       

02. 宿主对象是由运行时环境（浏览器或 Node）提供，比如window、XMLHTTPRequest等等。 

## call和.apply有什么区别？

.call和.apply都用于调用函数，       

第一个参数将用作函数内 this 的值。
然而，.call接受逗号分隔的参数作为后面的参数，   
而.apply接受一个参数数组作为后面的参数。    
一个简单的记忆方法是，
从call中的 C 联想到逗号分隔（comma-separated），从apply中的 A 联想到数组（array）。
function add(a, b) {
  return a + b; 
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3

## 功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？

功能检测包括确定浏览器是否支持某段代码，以及是否运行不同的代码（取决于它是否执行），以便浏览器始终能够正常运行代码功能，而不会在某些浏览器中出现崩溃和错误。例如：
if ("geolocation" in navigator) {
  // 可以使用 navigator.geolocation
} else {
  // 处理 navigator.geolocation 功能缺失
}
Modernizr是处理功能检测的优秀工具。
功能推断与功能检测一样，会对功能可用性进行检查，但是在判断通过后，还会使用其他功能，因为它假设其他功能也可用.
UA 字符串这是一个浏览器报告的字符串，它允许网络协议对等方（network protocol peers）识别请求用户代理的应用类型、操作系统、应用供应商和应用版本。它可以通过navigator.userAgent访问。

## 单页应用有那些优缺点

好处：
用户感知响应更快，用户切换页面时，不再看到因页面刷新而导致的白屏。      
对服务器进行的 HTTP请求减少，因为对于每个页面加载，不必再次下载相同的资源。        
客户端和服务器之间的关注点分离。可以为不同平台（例如手机、聊天机器人、智能手表）建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。     
坏处：      
由于加载了多个页面所需的框架、应用代码和资源，导致初始页面加载时间较长。          
服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。         
SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。   
这无意中损害了应用的搜索引擎优化（SEO）。然而，当你构建应用时，大多数情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。        
为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来在浏览器中呈现你的 javascript，保存静态 HTML，并将其返回给爬虫。       

## 请说明 JSONP 的工作原理，它为什么不是真正的 Ajax？  

JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。        

JSONP 通过script标签发送跨域请求，通常使用callback查询参数，例如：https://example.com?callback=printData。        
然后服务器将数据包装在一个名为printData的函数中并将其返回给客户端。
<script>
  function printData(data) {

    console.log( `My name is ${data.name}!` );

  }
</script>
<script src="https://example.com?callback=printData"></script>
printData({ name: "Yang Shun" }); 
客户端必须在其全局范围内具有printData函数，并且在收到来自跨域的响应时，该函数将由客户端执行。
JSONP 可能具有一些安全隐患。由于 JSONP 是纯 JavaScript 实现，它可以完成 JavaScript 所能做的一切，因此需要信任 JSONP 数据的提供者。
现如今，跨来源资源共享（CORS） 是推荐的主流方式，JSONP 已被视为一种比较 hack 的方式。 

## jsonp安全问题如何解决    
1. jsonp劫持    
![jsonp漏洞利用过程](https://pic2.zhimg.com/80/v2-2fbdfa8901b75da5e0eb637b2c2ddf41_720w.jpg)    
2. 利用JSONP绕过token防护进行csrf攻击   

**防护方案**    
1、严格安全的实现 CSRF 方式调用 JSON 文件：限制 Referer 、部署一次性 Token 等。   
2、严格安装 JSON 格式标准输出 Content-Type 及编码（ Content-Type : application/json; charset=utf-8 ）。   
3、严格过滤 callback 函数名及 JSON 里数据的输出。   
4、严格限制对 JSONP 输出 callback 函数名的长度(如防御上面 flash 输出的方法)。   
5、其他一些比较“猥琐”的方法：如在 Callback 输出之前加入其他字符(如：/**/、回车换行)这样不影响 JSON 文件加载，又能一定程度预防其他文件格式的输出。还比如 Gmail 早起使用 AJAX 的方式获取 JSON ，听过在输出 JSON 之前加入 while(1) ;这样的代码来防止 JS 远程调用。  

## "attribute" 和 "property" 之间有什么区别？

“Attribute” 是在 HTML 中定义的，
而 “property” 是在 DOM 上定义的。

## document 中的load事件和DOMContentLoaded事件之间的区别是什么？

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。             

window的load事件仅在 DOM 和所有相关资源全部完成加载后才会触发。      

## 什么是"use strict"; ？使用它有什么优缺点？

use strict' 是用于对整个脚本或单个函数启用严格模式的语句。严格模式是可选择的一个限制 JavaScript 的变体一种方式 。

优点：      
无法再意外创建全局变量。        
会使引起静默失败（silently fail，即：不报错也没有任何效果）的赋值操抛出异常。      
试图删除不可删除的属性时会抛出异常（之前这种操作不会产生任何效果）。        
要求函数的参数名唯一。      
全局作用域下，this的值为undefined。     
捕获了一些常见的编码错误，并抛出异常。      
缺点：      
无法访问function.caller和function.arguments。
以不同严格模式编写的脚本合并后可能导致问题。    

## 什么是事件循环？调用堆栈和任务队列之间有什么区别？

事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。      

如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。    

## let和var的区别。let产生的背景？ 

用var声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。 

let和const是块级作用域，意味着它们只能在最近的一组花括号（function、if-else 代码块或 for 循环中）中访问。        
为什么会添加这个块级作用域，就得了解ES5没有块级作用域时出现的问题。   
场景一是内层变量可能会覆盖外层变量。    
场景二是在if或者是for循环中声明的变量会泄漏成为全局变量。   

## 请阐述块格式化上下文（Block Formatting Context）及其工作原理。    

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。
一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：
float的值不是none.
position的值不是static或relative.
display的值是table-cell、table-caption、inline-block、flex、或inline-flex。
overflow的值不是visible。
在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。
两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。更多内容请参考边距合并（margin collapsing）。

**BFC的约束规则**

内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）
处于同一个BFC中的元素相互影响，可能会发生外边距重叠
每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算
浮动盒区域不叠加到BFC上

**BFC可以解决的问题**
垂直外边距重叠问题
去除浮动
自适用两列布局（float + overflow）

## 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）

visibility: hidden：元素仍然在页面流中，并占用空间。        
width: 0; height:        0：使元素不占用屏幕上的任何空间，导致不显示它。
position: absolute; left: -99999px： 将它置于屏幕之外。      
text-indent: -9999px：这只适用于block元素中的文本。
Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。       
WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。

       

## 使用 CSS 预处理的优缺点分别是什么

优点：      

提高 CSS 可维护性。        
易于编写嵌套选择器。          
引入变量，增添主题功能。可以在不同的项目中共享主题文件。           
通过混合（Mixins）生成重复的 CSS。            
将代码分割成多个文件。不进行预处理的CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。         
缺点：      
需要预处理工具。           
重新编译的时间可能会很慢。          

## 什么情况下，用translate()而不用绝对定位？什么时候，情况相反      

translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），         
只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，         
但改变绝对定位会使用到 CPU。因此translate()更高效，可以缩短平滑动画的绘制时间。          
当使用translate()时，元素仍然占据其原始空间（有点像position：relative），这与改变绝对定位不同。   

## 请简述JavaScript中的this

粗略地讲，函数的调用方式决定了this的值。this取值符合以下规则：      

在调用函数时使用new关键字，函数内的this是一个全新的对象。        
如果apply、call或bind方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。   
当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象。比如当obj.method()被调用时，函数内的 this 将绑定到obj对象。        
如果调用函数不符合上述规则，那么this的值指向全局对象（global object）。浏览器环境下this的值指向window对象，但是在严格模式下('use strict')，this的值为undefined。    
如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定this的值。          
如果该函数是 ES2015      中的箭头函数，将忽略上面的所有规则，this被设置为它被创建时的上下文。            

## 用new 运算符创建对象时，具体的创建过程有哪几步

01. 一个新对象被创建，它继承自构造函数的原型
02. 将指定的参数传递给构造函数
03. 将执行上下文（this）绑定到新创建的对象中
04. 如果构造函数有返回值，那么返回值将取代第一步中新创建的对象   

## isPrototypeOf方法与instanceof 运算符有哪些区别

isPrototypeOf 用于检测调用此方法对象是否存在于指定对象的原型链中，`
而instanceof用于检测构造函数的原型是否存在于指定对象的原型链        

## 请介绍一下节流函数和防抖函数，简单实现节流函数和防抖函数

他们都是可以防止一个函数被无意义的高频率调用
区别在于:
函数节流：每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作。
函数防抖：将多次高频操作优化为只在最后一次执行。

## 请介绍一下回流（Reflow）与重绘（Repaint） 

回流（Reflow）：render       树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。        

重绘：render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响 render 树重新布局的，比如修改字体颜色。        
注意：回流一定会触发重绘，而重绘不一定会回流。        

## 请描述一下什么是执行栈  

可以把执行栈认为是一个存储函数调用的栈结构，它遵从先进后出的原则。  

## Vue通信

1.props和$emit

02. EventBus(基本不用)

3.vuex

[react](http://react-china.org/t/topic/33558)   
[react-github](https://github.com/sudheerj/reactjs-interview-questions) 

## 斐波那契数列？怎么优化？

每一项是前两项之和, 递归结束条件是f[1]=1，f[2]=1   
1，2，3，5，8，13，21，34         
F(n)=F(n-1)+F(n-2)        
方法1（递归）   
时间复杂度：O（N2），空间复杂度：O（N）   
方法2（循环）   
时间复杂度：O（N），时间复杂度：O（1）    

## node主要用来解决什么问题，node做BFF的优点是什么    

node中间层解决SEO, 首屏渲染, 前后端分离, 
服务器之间内网请求接口速度比请求快。
node: 高并发，异步IO
每个Node.js进程可以支持超过12万活跃的连接，每个连接消耗大约2K的内存   
加了中间层一方面是为了不让前台直接性的去访问主要逻辑接口，
node中间层可以过滤、合并请求，这样来减少主要数据接口服务器的性能消耗 。 

## 对项目监控这块有什么了解吗  

一个监控系统，大致可以分为四个阶段：日志采集、日志存储、统计与分析、报告和警告。   

## 对微服务有了解吗   

微服务的目的是有效的拆分应用，实现敏捷开发和部署  
使用 HTTP 服务器的路由来重定向多个应用    
在不同的框架之上设计通讯、加载机制，诸如 Mooa 和 Single-SPA   
通过组合多个独立应用、组件来构建一个单体应用    
iFrame。使用 iFrame 及自定义消息传递机制    
使用纯 Web Components 构建应用    
结合 Web Components 构建    

## restful接口架构的优缺点, restful接口架构会导致什么安全问题，具体怎么解决    

RESTful架构优点：
前后端分离，减少流量    
安全问题集中在接口上，由于接受json格式，防止了注入型等安全问题    
前端无关化，后端只负责数据处理，前端表现方式可以是任何前端语言（android，ios, html5）    
前端和后端人员更加专注于各自开发，只需接口文档便可完成前后端交互，无需过多相互了解    
服务器性能优化：由于前端是静态页面，通过nginx便可获取，服务器主要压力放在了接口上   
RESTful优点
URL具有很强可读性的，具有自描述性
可提供OpenAPI，便于第三方系统集成，提高互操作性；
RESTful的缺点
请求路径将表内关系完全暴露，响应结果将表结构暴露

## Webpack性能优化你知道哪些  

01. 优化Loader的文件搜索范围  
02. 把Babel编译过的文件缓存起来 loader: 'babel-loader?cacheDirectory=ture'
03. HappyPack可以将Loader的同步执行转换为并行的  
04. DllPlugin可以将特定的类库提前打包然后引入。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案. 
05. Scope Hoisting会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。
06. Tree Shaking 可以实现删除项目中未被引用的代码    

## 如何设计一个组件？   

组件聚合原则告诉我们设计组件时要考虑的原则，以及如何根据项目的开发时间和成熟度对这些原则进行权衡。组件耦合考虑的是如何管理组件之间的依赖关系，减小组件之间的耦合，组件依赖要考虑的问题。从组件聚合和组件耦合全面分析，可以设计出"高内聚、低耦合"的组件。

适用单一职责原则
适用开放封闭原则
追求短小精悍
避免太多参数
缩小信赖范围和向稳定方向信赖  
追求无副作用
追求引用透明
避免暴露组件内部实现
避免直接操作DOM 
入口处检查参数的有效性，出口处检查返回的正确性
充分隔离变化的部分  
组件和数据分享，信赖一致性的数据结构  

## code split 怎么做？   

主要有 2 种方式：
分离业务代码和第三方库（ vendor ）  
按需加载（利用 import() 语法）  

## 什么是treeshaking？注意些什么？   

Tree-shaking的本质是消除无用的js代码    

## 一像素问题怎么解决？   

由于分辨率 DPI 的差异，高清手机屏上的 1px 实际上是由 2×2 个像素点来渲染，有的屏幕甚至用到了 3×3 个像素点
所以在实际的代码实现中，设置1px的边框，会渲染成2px.

01. 使用transform： scale +媒体查询 
02. 直接rem设置

## CSS：区别 px、em、rem    

px 在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小；

em 的值并不是固定的，会继承父级元素的字体大小，代表倍数；   

rem 的值并不是固定的，始终是基于根元素 <html> 的，也代表倍数。    

## ios滑动不流畅    

-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */
 
-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */

## iOS 上拉边界下拉出现白色空白   

01. 通过监听 touchmove，让需要滑动的地方滑动，不需要滑动的地方禁止滑动。 
02. 填充一些元素：下拉后刷新页面 

## 软键盘将页面顶起来、收起未回落   

安卓一些版本中，输入弹窗出来，会将解压 absolute 和 fixed 定位的元素。导致可视区域变小，布局错乱。
软键盘将页面顶起来的解决方案，主要是通过监听页面高度变化，强制恢复成弹出前的高度。
键盘不能回落问题出现在 iOS 12+ 和 wechat 6.7.4+ 中，而在微信 H5 开发中是比较常见的 Bug。

## iPhone X系列安全区域适配问题   

viewport-fit meta 标签设置为 cover，获取所有区域填充。判断设备是否属于 iPhone X，给头部底部增加适配层

viewport-fit 有 3 个值分别为：

auto：此值不影响初始布局视图端口，并且整个web页面都是可查看的。

contain：视图端口按比例缩放，以适合显示内嵌的最大矩形。

cover：视图端口被缩放以填充设备显示。强烈建议使用 safe area inset 变量，以确保重要内容不会出现在显示之外。
增加适配层
使用 safe area inset 变量

/* 适配 iPhone X 顶部填充*/
@supports (top: env(safe-area-inset-top)){
  body, 
  .header{

      padding-top: constant(safe-area-inset-top, 40px);
      padding-top: env(safe-area-inset-top, 40px);
      padding-top: var(safe-area-inset-top, 40px);

  }
}
/* 判断iPhoneX 将 footer 的 padding-bottom 填充到最底部 */
@supports (bottom: env(safe-area-inset-bottom)){

    body,
    .footer{
        padding-bottom: constant(safe-area-inset-bottom, 20px);
        padding-bottom: env(safe-area-inset-bottom, 20px);
        padding-top: var(safe-area-inset-bottom, 20px);
    }

}
safe-area-inset-top, safe-area-inset-right, safe-area-inset-bottom, safe-area-inset-left safe-area-inset-*由四个定义了视口边缘内矩形的 top, right, bottom 和 left 的环境变量组成，这样可以安全地放入内容，而不会有被非矩形的显示切断的风险。对于矩形视口，例如普通的笔记本电脑显示器，其值等于零。对于非矩形显示器（如圆形表盘，iPhoneX 屏幕），在用户代理设置的四个值形成的矩形内，所有内容均可见。

其中 env() 用法为 env( <custom-ident> , <declaration-value>? )，第一个参数为自定义的区域，第二个为备用值。

其中 var() 用法为 var( <custom-property-name> , <declaration-value>? )，作用是在 env() 不生效的情况下，给出一个备用值。

constant（） 被 css 2017-2018 年为草稿阶段，是否已被标准化未知。而其他iOS 浏览器版本中是否有此函数未知，作为兼容处理而添加进去。   

## Hybrid  H5开发需要注意些什么？   

WebView内存泄漏  

## Webview的缓存机制是什么？   

WebView中存在着两种缓存：网页数据缓存（存储打开过的页面及资源）、H5缓存（cache manifest 文件。这个文件中列出了所有需要在离线状态下使用的资源，浏览器会把这些资源缓存到本地）。 

## 有哪些监控网页卡顿的方法   

网页内容在不断变化之中，网页的 FPS 是指浏览器在渲染这些变化时的帧率。   
帧率越高，用户感觉网页越流畅，反之则会感觉卡顿。    
每秒钟计算一次网页的 FPS 值，获得一列数据，然后分析。   
通俗地解释就是，通过 requestAnimationFrame API 来定时执行一些 JS 代码，   
如果浏览器卡顿，无法很好地保证渲染的频率，1s 中 frame 无法达到 60 帧，即可间接地反映浏览器的渲染帧率。      

## 如果需要手动写动画，你认为最小时间间隔是多久，为什么？   

显示器默认频率是60HZ，即1秒刷新60次，故最小时间间隔是 1000/60 = 16.7毫秒   

## 什么是Cookie 隔离    

若静态文件位于主域名下，请求静态文件时会携带cookie到服务器，浪费流量，故需隔离。    
由于cookie有域的限制，不能跨域提交请求，故将静态文件置于非主要域名下，请求静态文件时便不会携带cookie数据。如此可降低请求头大小和请求时间，以便达到降低整体请求耗时的目的。       

## Chrome 打开一个页面需要启动多少进程？分别有哪些进程？

打开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个；   
最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。   

浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。    

渲染进程：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。    

GPU 进程：其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。      

网络进程：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。      

插件进程：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。            

## promise 和 callback 有什么区别  

Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件更合理
 
Promise可以用来避免异步操作函数里的嵌套回调问题，因为解决异步最直接的方法是回调嵌套，将后一个的操作放在前一个操作的异步回调里，但如果操作多了，就会有很多层的嵌套。     
使用 Promise 对象，可以十分方便的摆脱层层嵌套的异步操作回调函数，而以同步操作的流程书写代码   
Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。即错误总会被下一个catch语句捕获    
## async/await 实现原理   
async/await其实是Generator和自动执行器的语法糖      
## 介绍暂时性死区 

在代码块内，使用let命令声明变量之前，该变量都是不可用的。   
这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。   

## 介绍一下PM2    

pm2 是node进程管理工具  
具有： 后台运行，自动重启，停止不稳定的进程，   
集群模式下，可以达到重启时不停止服务，  
简单日志管理， 自动负载均衡，提供实时接口，返回服务器与进程的信息
Master挂了的话Pm2怎么处理？
立即重启  

## 使用过git merge和git rebase吗？它们之间有什么区别？

简单的说，git merge和git rebase都是合并分支的命令。     

git merge branch会把branch分支的差异内容pull到本地，然后与本地分支的内容一并形成一个committer对象提交到主分支上，合并后的分支与主分支一致；   

git rebase branch会把branch分支优先合并到主分支，然后把本地分支的commit放到主分支后面，合并后的分支就好像从合并后主分支又拉了一个分支一样，本地分支本身不会保留提交历史。

修改不够果断，使用合并操作，

您可以充分利用 Rebase ：
你在本地开发：如果您还没有与其他人合作。此时，你应该更喜欢 rebase 而不是 merge 以保持历史的整洁。
如果您拥有存储库的个人分支并且未与其他开发人员共享，那么即使您已经推送到分支之后，也可以安全地进行 rebase 。
Rebase 是将更改从一个分支集成到另一个分支的另一种方法。 Rebase 将所有更改压缩为单个“补丁”。然后它将补丁集成到目标分支上。
与 merge 不同，重定位使历史变得扁平，因为它将完成的工作从一个分支转移到另一个分支。在这个过程中，不需要的历史记录被消除。
Rebases 是更改应从层次结构顶部向下传递的方式，并且 Merge 是它们向上流回的方式

## 告诉我 Git 中 HEAD、工作树和索引之间的区别？   

## git pull和git fetch之间有什么区别
git pull 是 git fetch + git merge

## 说出space-between和space-around的区别    

space-between在左右两侧没有边距，而space-around在左右两侧会留下边距，垂直布局同理   

## 你所知道的前端性能优化方案   

这个其实方案还是比较多的，可以从DOM层面，CSS样式层面和JS逻辑层面分别入手，大概给出以下几种：
(1) 减少DOM的访问次数，可以将DOM缓存到变量中；    
(2) 减少重绘和回流，任何会导致重绘和回流的操作都应减少执行，可将多次操作合并为一次；    
(3) 尽量采用事件委托的方式进行事件绑定，避免大量绑定导致内存占用过多；    
(4) css层级尽量扁平化，避免过多的层级嵌套，尽量使用特定的选择器来区分；   
(5) 动画尽量使用CSS3动画属性来实现，开启GPU硬件加速；   
(6) 图片在加载前提前指定宽高或者脱离文档流，可避免加载后的重新计算导致的页面回流；    
(7) css文件在head标签中引入，js文件在body标签中引入，优化关键渲染路径；     
(8) 加速或者减少HTTP请求，使用CDN加载静态资源，合理使用浏览器强缓存和协商缓存，小图片可以使用Base64来代替，合理使用浏览器的预取指令prefetch和预加载指令preload；
(9) 压缩混淆代码，删除无用代码，代码拆分来减少文件体积；
(10) 小图片使用雪碧图，图片选择合适的质量、尺寸和格式，避免流量浪费。

## CSS3中transition和animation的属性分别有哪些    

transition 过渡动画：      
(1) transition-property：属性名称       
(2) transition-duration: 间隔时间       
(3) transition-timing-function: 动画曲线       
(4) transition-delay: 延迟    
animation 关键帧动画：
(1) animation-name：动画名称
(2) animation-duration: 间隔时间  
(3) animation-timing-function: 动画曲线 
(4) animation-delay: 延迟 
(5) animation-iteration-count：动画次数 
(6) animation-direction: 方向 
(7) animation-fill-mode: 禁止模式 

## CSS 中的 vertical-align 有哪些值？它在什么情况下才能生效？ 
vertical-align属性值：    
线类：baseline、top、middle、bottom   
文本类：text-top、text-bottom   
上标下标类：sub、super    
数值百分比类：20px、2em、20%等（对于基线往上或往下偏移）      
vertical-align生效前提：      
内联元素span、strong、em、img、button、input等    
display值为inline、inline-block、inline-table或table-cell的元素   
需要注意浮动和绝对定位会让元素块状化，因此此元素绝对不会生效    
## CSS 中的 background 的 background-image 属性可以和 background-color 属性一起生效么？ackground-color 属性可以覆盖 background-image 属性吗？      

## 选择器优先级   

!important > 行内样式 > id选择器 > class选择器 > 标签选择器 > * > 继承 > 默认   

## 跨标签页的通讯方式有哪些   

(1) BroadCastChannel    

``` js
var bc = new BroadcastChannel('test_channel');
bc.addEventListener("message", function(ev) {
    wrapper.append("<p>2接收：" + ev.data + "</p>");
});
bc.postMessage(data);
bc.close();
```

(2) Service Worker    

``` js
navigator.serviceWorker.register('./sw.js', {
        scope: './'
    })
    .then(function(reg) {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = e => {
            console.log(e.data); // this message is from sw.js, to page
        }
        reg.active.postMessage("this message is from page, to sw", [messageChannel.por2]);
    });
this.addEventListener('message', function(event) {
    console.log(event.data); // this message is from page, to sw
    event.ports[0].postMessage('this message is from sw.js, to page');
});
```

(3) LocalStorage + window.onstorage监听   
(4) Shared Worker + 定时器轮询(setInterval)   
(5) IndexedDB + 定时器轮询(setInterval)   
(6) cookie + 定时器轮询(setInterval)    
(7) window.open + window.postMessage    
(8) Websocket   

## 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？   

01. npm 模块安装机制：

发出npm install命令   
查询node_modules目录之中是否已经存在指定模块  
若存在，不再重新安装  
若不存在  
npm 向 registry 查询模块压缩包的网址  
下载压缩包，存放在根目录下的.npm目录里  
解压压缩包到当前项目的node_modules目录

02. npm 实现原理

输入 npm install 命令并敲下回车后，会经历如下几个阶段（以 npm 5.5.1 为例）：

执行工程自身 preinstall

当前 npm 工程如果定义了 preinstall 钩子此时会被执行。

首先需要做的是确定工程中的首层依赖，
也就是 dependencies 和 devDependencies 属性中直接指定的模块（假设此时没有添加 npm install 参数）。

工程本身是整棵依赖树的根节点，
每个首层依赖模块都是根节点下面的一棵子树，
npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。

获取模块是一个递归的过程，分为以下几步：
获取模块信息。在下载一个模块之前，首先要确定其版本，这是因为 package.json 中往往是 semantic version（semver，语义化版本）。此时如果版本描述文件（npm-shrinkwrap.json 或 package-lock.json）中有该模块信息直接拿即可，如果没有则从仓库获取。如 packaeg.json 中某个包的版本是 ^1.1.0，npm 就会去仓库中获取符合 1.x.x 形式的最新版本。
获取模块实体。上一步会获取到模块的压缩包地址（resolved 字段），npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。
查找该模块依赖，如果有依赖则回到第1步，如果没有则停止。

## v-if、v-show、v-html 的原理是什么，它是如何封装的？    

## 为什么建立连接要三次握手，为什么不是2次，4次   
三次是最小的安全次数，可以保证通信的双方都具有发送消息和接收响应的能力，发送方和接收方始终同步序号，可以实现可靠传输。    

## 说说事件循环机制   

JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。整个执行过程，我们称为事件循环过程。一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。
macro-task大概包括：
script(整体代码)
setTimeout
setInterval
setImmediate
I/O
UI render
micro-task大概包括:
process.nextTick
Promise
Async/Await(实际就是promise)
MutationObserver(html5新特性)

## 如何监控网页崩溃?  

01. 利用页面崩溃无法触发 beforeunload 事件来实现 
02. 基于 Service Worker 实现一种基于心跳检测的监控方案   

## 长按闪退的问题

长按列表页的列表项时(触摸到文字)，在低版本手机中会出现闪退的情况    
js部分：在事件触发时添加e.preventDefault(); ，用于阻止默认行为   
css部分：添加禁止文本文本复制的代码   

## 正向代理与反向代理的理解以及区别   

正向代理：      
1、用户发送请求到自己的代理服务器   
2、自己的代理服务器发送请求到服务器   
3、服务器将数据返回到自己的代理服务器   
4、自己的代理服务器再将数据返回给用户     
反向代理 
1、用户发送请求到服务器（访问的其实是反向代理服务器，但用户不知道）   
2、反向代理服务器发送请求到真正的服务器   
3、真正的服务器将数据返回给反向代理服务器     
4、反向代理服务器再将数据返回给用户   
正向代理隐藏的是用户，反向代理隐藏的是服务器    

## CDN有哪些优化静态资源加载速度的方法？    

资源调度：CDN会根据用户接入网络的ip寻找距离用户最优路径的服务器。调度的方式主要有DNS调度、http 302调度、使用 HTTP 进行的 DNS 调度（多用于移动端）；
缓存策略和数据检索：CDN服务器使用高效的算法和数据结构，快速的检索资源和更新读取缓存；
网络优化：从OSI七层模型进行优化，达到网络优化的目的。
L1物理层：硬件设备升级提高速度
L2数据链路层：寻找更快的网络节点、确保 Lastmile 尽量短
L3路由层：路径优化，寻找两点间最优路径
L4传输层：协议TCP优化，保持长连接、TCP快速打开
L7应用层：静态资源压缩、请求合并    

## 消除transition闪屏 

    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden; 属性定义当元素不面向屏幕时是否可见。

如果在旋转元素不希望看到其背面时，该属性很有用。

    -webkit-perspective: 1000; 

## GPU 加速原理   

GPU加速实际上是大幅减少了合成/绘制时间，从而大大地提高了页面速度，但GPU加速有自己的缺点：
过多的GPU层会带来性能开销，主要原因是使用GPU加速其实是利用了GPU层的缓存，让渲染资源可以重复使用，所以一旦层多了，
缓存增大，就会引起别的性能问题

## fetch 和 ajax 的区别   

01. fetch 

window 的一个方法，它的主要特点有： 
1、第一个参数是URL:
2、第二个是可选参数，可以控制不同配置的 init 对象
3、使用了 JavaScript Promises 来处理结果/回调:

02. ajax 

是使用XMLHttpRequest对象来请求数据  

## 渲染引擎

一个渲染引擎主要包括 HTML 解释器、CSS 解释器、布局和 JavaScript 引擎等，
JavaScript 引擎现在都已经独立出来。 下面是所依赖的模块，包括网络，存储，2D/3D 图形，音频和视频，图片解码器等等…, 
再下面就是操作系统相关的支持。    

## 常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解   

Trident内核：IE
Gecko内核：火狐
Blink内核：Opera7及以上。
Webkit内核：Safari，Chrome等。[Chrome的：Blink（WebKit的分支）]

浏览器内核又可以分成两部分：渲染引擎和JS引擎。    
渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等，    
JS引擎则是解析Javascript语言，执行javascript语言来实现网页的动态效果。    

## 什么是文档流   

将窗体自上而下分成一行行, 并在每行中按从左至右的顺序排放元素,即为文档流.(自己的理解是从头到尾按照文档的顺序，该在什么位置就在什么位置，也可以按照上面的意思理解，自上而下，自左到右的顺序)      

## display:none与visibility：hidden的区别 

区别|	display:none|	visibility：hidden的
是否占据空间|	不占据任何空间，在文档渲染时，该元素如同不存在（但依然存在文档对象模型树中）|	该元素空间依旧存在
是否渲染|	会触发reflow（回流），进行渲染|	只会触发repaint（重绘），因为没有发现位置变化，不进行渲染
是否是继承属性|	不是继承属性，元素及其子元素都会消失|	是继承属性，若子元素使用了visibility:visible，则不继承，这个子孙元素又会显现出 

## CSS中link 和@import的区别    

link属于XHTML标签，@import完全是CSS提供的一种方式, 只能加载CSS
加载顺序的差别，当一个页面被加载的时候，link引用的CSS会同时被加载，
而@import引用的CSS 会等到页面全部被下载完再被加载
兼容性的差别。由于@import是CSS2.1提出的所以老的浏览器不支持，而link标签无此问题
当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的

## ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成）   
, 双冒号是在当前规范中引入的，用于区分伪类和伪元素   

## 二进制转 Base64

字符串转二进制 a.charCodeAt().toString(2)   
String.fromCharCode
```js 
let encodedData = window.btoa("Hello, world"); // 编码
let decodedData = window.atob(encodedData); // 解码

``` 

## DOM事件中target和currentTarget的区别   

event.target 返回触发事件的元素   
event.currentTarget 返回绑定事件的元素  

## 移动端300ms延迟由来及解决方案    

01. 300ms延迟由来

300 毫秒延迟的主要原因是解决双击缩放(double tap to zoom)。双击缩放，顾名思义，
即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。 
那么这和 300 毫秒延迟有什么联系呢？ 假定这么一个场景。
用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，
当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。
因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 鉴于iPhone的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。

02. 解决方案

```js
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
```

移动端事件触发顺序：在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend -->click。
fastclick.js的原理是：FastClick的实现原理是在检测到touchend事件的时候，
会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉。  

## 前后端分离的项目如何seo  

使用prerender。但是回答prerender，面试官肯定会问你，如果不用prerender，让你直接去实现，好的，请看下面的第二个答案。
先去 www.baidu.com/robots.txt 找出常见的爬虫，然后在nginx上判断来访问页面用户的User-Agent是否是爬虫，如果是爬虫，就用nginx方向代理到我们自己用nodejs + puppeteer实现的爬虫服务器上，然后用你的爬虫服务器爬自己的前后端分离的前端项目页面，增加扒页面的接收延时，保证异步渲染的接口数据返回，最后得到了页面的数据，返还给来访问的爬虫即可。  

## 一次性插入1000个div，如何优化插入的性能

使用Fragment
var fragment = document.createDocumentFragment(); 
fragment.appendChild(elem); 
DocumentFragments 是DOM节点。
它们不是主DOM树的一部分。通常的用例是创建文档片段，
将元素附加到文档片段，然后将文档片段附加到DOM树。在DOM树中，文档片段被其所有的子元素所代替。    
因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

复制代码
向1000个并排的div元素中，插入一个平级的div元素，如何优化插入的性能    
先display:none 然后插入 再display:block   
赋予key，然后使用virtual-dom，先render，然后diff，最后patch   
脱离文档流，用GPU去渲染，开启硬件加速   

## a.b.c.d和a['b']['c']['d']，哪个性能更高    

a['b']['c']和a.b.c，转换成AST前者的的树是含计算的，后者只是string literal，天然前者会消耗更多的计算成本，时间也更长

## 伪类和伪元素的区别

01. 伪元素: 改变dom结构，创建虚拟dom   
02. 伪类: 不修改dom内容，通过一些特定的选择器根据特定的状态，特定条件来修改元素的样式    

## 讲讲MVVM，说说与MVC有什么区别    

MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。
MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。
当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。

MVC 业务逻辑、数据、界面显示分离的方法组织代码    

## 说说z-index有什么需要注意的地方    

background/border < -z-index< block < float < 
inline < z-index:auto < z-index     

## 说说DOM事件流

DOM事件流包括三个阶段。
事件捕获阶段，处于目标阶段，事件冒泡阶段。    
event.target返回触发事件的元素
event.currentTarget返回绑定事件的元素
relatedTarget 事件属性返回与事件的目标节点相关的节点。
对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。
对于其他类型的事件来说，这个属性没有用。     

## Vue的数据为什么频繁变化但只会更新一次    

Vue是异步更新Dom的，Dom的更新放在下一个宏任务或者当前宏任务的末尾（微任务）中进行执行
由于VUE的数据驱动视图更新是异步的，即修改数据的当下，视图不会立刻更新，
而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。  

## 判断两个变量是否一样 

Object.is 

if (! Object.is) {
  Object.is = function(x, y) {

    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }

  }; 
}

## Vue模板编译的过程    

DocumentFragments： 
解析指令（属性节点）与插值表达式（文本节点），并替换模板数据，初始化视图；
将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图；

## 居中为什么要使用transform（为什么不使用marginLeft/Top）  

transform 属于合成属性（composite property），对合成属性进行 transition/animation 动画将会创建一个合成层（composite layer），这使得被动画元素在一个独立的层中进行动画。通常情况下，浏览器会将一个层的内容先绘制进一个位图中，然后再作为纹理（texture）上传到 GPU，只要该层的内容不发生改变，就没必要进行重绘（repaint），浏览器会通过重新复合（recomposite）来形成一个新的帧。    
top/left属于布局属性，该属性的变化会导致重排（reflow/relayout），所谓重排即指对这些节点以及受这些节点影响的其它节点，进行CSS计算->布局->重绘过程，浏览器需要为整个层进行重绘并重新上传到 GPU，造成了极大的性能开销。    

## src和 href 的区别    

href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系。   
src表示引用资源，表示替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。   
src是source的缩写，是指向外部资源的位置，指向的内部会迁入到文档中当前标签所在的位置；在请求src资源时会将其指向的资源下载并应用到当前文档中，例如js脚本，img图片和frame等元素。        

## delete 数组的 item，数组的 length 是否会 -1    

不会，数组长度不变，数组变成[empty, empty... ]

## 给出 ['1', '3', '10'].map(parseInt) 执行结果   

['1', '3', '10'].map((it, index)=>parseInt(it, index))
index:0, 1, 2
[1, NaN, 2]

## HTTP劫持、DNS劫持与XSS   

HTTP劫持
什么是HTTP劫持呢，大多数情况是运营商HTTP劫持，当我们使用HTTP请求请求一个网站页面的时候，网络运营商会在正常的数据流中插入精心设计的网络数据报文，让客户端（通常是浏览器）展示“错误”的数据，通常是一些弹窗，宣传性广告或者直接显示某网站的内容，大家应该都有遇到过。

DNS劫持
DNS 劫持就是通过劫持了 DNS 服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致对该域名的访问由原IP地址转入到修改后的指定IP，其结果就是对特定的网址不能访问或访问的是假网址，从而实现窃取资料或者破坏原有正常服务的目的。

DNS 劫持比之 HTTP 劫持 更加过分，简单说就是我们请求的是 http://www.a.com/index.html ，直接被重定向了 http://www.b.com/index.html ，本文不会过多讨论这种情况。

XSS跨站脚本
XSS指的是攻击者利用漏洞，向 Web 页面中注入恶意代码，当用户浏览该页之时，注入的代码会被执行，从而达到攻击的特殊目的。

关于这些攻击如何生成，攻击者如何注入恶意代码到页面中本文不做讨论，只要知道如 HTTP 劫持 和 XSS 最终都是恶意代码在客户端，通常也就是用户浏览器端执行，本文将讨论的就是假设注入已经存在，如何利用 Javascript 进行行之有效的前端防护。

## 虚拟DOM的优劣如何?   

优点:     

保证性能下限: 虚拟DOM可以经过diff找出最小差异, 然后批量进行patch, 这种操作虽然比不上手动优化, 但是比起粗暴的DOM操作性能要好很多, 因此虚拟DOM可以保证性能下限
无需手动操作DOM: 虚拟DOM的diff和patch都是在一次更新中自动进行的, 我们无需手动操作DOM, 极大提高开发效率
跨平台: 虚拟DOM本质上是JavaScript对象, 而DOM与平台强相关, 相比之下虚拟DOM可以进行更方便地跨平台操作, 例如服务器渲染、移动端开发等等

缺点:   

无法进行极致优化: 在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化, 
比如VScode采用直接手动操作DOM的方式进行极端的性能优化   

## 介绍下 BFC、IFC、GFC 和 FFC    

BFC（Block formatting contexts）：块级格式上下文
页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以触发BFC的元素有float、position、overflow、display：table-cell/ inline-block/table-caption ；

IFC（Inline formatting contexts）：内联格式上下文
IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同
IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。
那么IFC一般有什么用呢？
水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

GFC（GrideLayout formatting contexts）：网格布局格式化上下文
当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

FFC（Flex formatting contexts）: 自适应格式上下文
display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。    

## Promise、Promise.all、Promise.race 分别怎么用？  
## 你是如何理解 HTML 语义化的？ 
## meta viewport 是做什么用的，怎么写？ 
name为viewport表示供移动设备使用.content定义了viewport的属性   

``` js
< meta name = "viewport"
content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" >
```
## flex 怎么用，常用属性有哪些？
## 如何用正则实现 trim()？
``` js
/(^\s*)|(\s*$)/g
```
## 不用 class 如何实现继承？用 class 又如何实现？

## Vue 的父组件和子组件生命周期钩子执行顺序是什么   

父组建： beforeCreate -> created -> beforeMount
子组件： -> beforeCreate -> created -> beforeMount -> mounted
父组件： -> mounted
总结：从外到内，再从内到外    

## 为什么 var 可以重复声明    

编译器会查询作用域是否已经存在变量，如果不存在，就创建，
如果存在，执行赋值操作。    

## WeakMap 和 Map 的区别?   

WeakMap 结构与 Map 结构基本类似，唯一的区别是它只接受对象作为键名（ null 除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。
WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉。
WeakMap 拥有和 Map 类似的 set(key, value) 、get(key)、has(key)、delete(key) 和 clear() 方法, 没有任何与迭代有关的属性和方法。

## 可以对图片开启 gzip 压缩吗，为什么

图片体积反而会变大    

## js 代码压缩的原理是什么      

uglify 包里有 ast.js 所以它一定是生成了抽象语法树
接着遍历语法树并作出优化，像是替换语法树中的变量，变成a，b，c那样的看不出意义的变量名。还有把 if/else 合并成三元运算符等。
最后输出代码的时候，全都输出成一行。    

## 在前端开发中，如何获取浏览器的唯一标识   

浏览器指纹--Canvas指纹
从根本上来说，每一种浏览器都会使用不同的图像处理引擎，不同的导出选项，不同的压缩等级，所以每一台电脑绘制出的图形都会有些许不同，这些图案可以被用来给用户设备分配特定编号（指纹），也就是说可以用来识别不同用户。 
canvas to base64   
 

## Node 面试题
### Node.js 在执行require(id)是怎样找到一个模块的？ 
### 能否使用require('.json')的方式加载大量json文件？
require 一个模块是同步调用的，会带来性能上的开销，虽然require成功后会 
缓存起来，大量数据驻留内存中，会导致GC频繁和内存泄漏。    
### Node.js 的异步IO是如何进行的？    
### Node的子进程有什么原理?   
### Node cluster是什么原理？    
### 如何保证session的安全？   
### 如何实现父进程退出时子进程跟着退出？    
### 实现一个能自动重启的http服务集群   
## Node文件查找优先级
![Node文件查找优先级](http://image.zhizuobiao.com/upload/20180515/1526368034080049950.png)       
### Node.js的加载机制   
require 和 module.exports
nodejs认为一个js文件就是一个模块，每个模块都有一个全局对象module，同时module对象中有一个对象exports。   
exports是module.exports对象的别名，提供便捷的属性和方法设置       
这个对象被加载一次之后会别缓存，里面提供了模块的父子模块关联信息，即父模块被那些模块引用，子模块引用了那些模块。
require可以加载文件模块（.js、.code、.json）和nodejs核心模块，最终获取到的是module.exports对象。第一次加载的时候执行代码，第二次从缓存中获取module.exports对象，如果没有发现指定模块就报错not find module。   

### require与import的区别

require支持 动态导入，import不支持，正在提案 (babel 下可支持)
require是 同步 导入，import属于 异步 导入
require是 值拷贝，导出值变化不会影响导入值；import指向 内存地址，导入值会随导出值而变化

### 严格路由和不严格路由有什么区别  
strict 严格路由，例如 /foo 和 /foo/ ，默认false关闭。
### 如何设置路由不敏感或严格路由  
caseSensitive:true
strict:true
### 什么是lazy router以及为什么要lazy router  
生成默认路由对象。
无法在默认配置中添加基本路由器，因为可能在运行之后设置的应用程序设置。 
### trust proxy什么用 
req.ip获取到的ip将是实际客户端的ip
否则，获取到的是代理服务器的ip.
### Etag weak 和strong有什么区别    
strong 要完完全全一样 
weak 页面内容一样，只是时间戳不一样可以回一个一样的etag。 
### app.all和app.use的区别及性能差异    
all 执行完整匹配, use 只匹配前缀 ，
all是路由中指代所有的请求方式，use是中间件。  
### 如何捕捉next(err)传递的错误   
express中内置了一个错误处理程序。如果请求内的同步代码抛出异常或调用next(err)，那么 Express 会将当前请求视为处于错误状态，并跳过所有剩余的非错误处理路由和中间件函数，最后被内置的错误处理程序处理。
### 路由function内部的错误是在哪个环节捕捉的
### Node.js为什么处理异步IO快?          
利用事件队列，不用等待IO完成，在非阻塞IO返回之前，node主线程可以用来处理其他事物，此时性能提升非常明显。    
### Node中的错误怎么捕获？          

01. 使用uncaughtExprection去捕获异常   

process.on("uncaughtExpection", function(err){

      console.log(err)         

})

02. 用try-catch在回调函数前捕获异常　　　　
03. 用框架去包住，捕获异常 

// error handler
app.use(function(err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

}); 

### 如果在回调函数中如何捕获异常呢？         

如果是回调函数中捕获异常怎么做？用domain去捕获，domian捕获会抛出500错误，但是domain捕获有一个问题，会丢失栈信息，无法保证程序健康进行，所以要结束进程，在回调函数中process.exit(1)，然后用node的server.close方法再去释放，server.close连接释放后自动结束进程，所以不用在server.close中去结束进程process.exit(1)
uncaughtExpection捕获异常的的原理就是：uncaughtExpection事件存在回调函数process.on("uncaughtExpection", callback)时node不会强制结束进程，这样可弥补domain丢失stack的问题        

-------------------------------------------------

### Node中遇到错误，进程退出了怎么办？    

01. 捕获uncaughtException  
02. 使用守护进程

pm2 和 forever ，它们都可以实现进程守护，底层也都是 child_process 模块和 cluster 模块 实现的。  
RPC 简单的理解是一个节点请求另一个节点提供的服务    
RPC 的全称是 Remote Procedure Call 是一种进程间通信方式。   
它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。    
即无论是调用本地接口/服务的还是远程的接口/服务，本质上编写的调用代码基本相同。    
比如两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数或者方法，由于不在一个内存空间，不能直接调用，这时候需要通过就可以应用RPC框架的实现来解决。

### Promise的错误如何统一捕获？   

错误捕获装饰器尝试

``` js
const tryCatch = msg => (target, name, descriptor) => {
    const original = descriptor.value
    if (typeof original === 'function') {
        descriptor.value = async function(...args) {
            try {
                const result = await original.apply(this, args)
                return result
            } catch (e) {
                message.error(e.message || msg || '出错了!请稍后重试')
            }
        }
    }
    return descriptor
}
```

Promise中的ajax 可以try catch 到么？  

### Node 的Cluster模式是什么？   

cluster是一个nodejs内置的模块，用于nodejs多核处理.
工作原理
集群模块会创建一个master主线程，然后复制任意多份程序并启动，这叫做工作线程。
工作线程通过 IPC 频道进行通信并且使用了 Round-robin algorithm 算法进行工作调度以此实现负载均衡。
Round-robin调度策略主要是master主线程负责接收所有的连接并派发给下面的各个工作线程。

### Node中的进程和线程什么区别？   

单线程就是一个进程只开一个线程    
进程是线程的容器  
调度：线程作为调度和分配的基本单位，进程作为拥有资源的基本单位       
拥有资源：进程是拥有资源的一个独立单位，线程不拥有系统资源，但可以访问隶属于进程的资源    

### Node中如何创建一个进程？
require('child_process')    
### Node的多个进程如何通信？   
使用共享内存，信号量。这种方式可以通过 child_process 模块实现。   
使用套接。这种方式可以使用 net，http，websocket 模块实现，还可以使用 socket.io 来实现（推荐）。   
使用共享文件。这种方式通过监听文件的变化来实现，不过效率不理想（不推荐）。    
使用订阅发布，响应式数据库。通过 Redis 这些数据库，并利用它们的特性进行多进程通信。   

### 如何监控Node？ 

node-monitor    
Shell脚本将定期向节点服务器插件询问测量数据。
如果节点服务器尚未启动或关闭，则脚本会将相应的信息发送到monitis（monitor起了一个服务）。
随着Node服务器可用，测量值将被捕获并发送到monitis。
node-memwatch 

### Node中的日志如何串行保证？

保存函数执行顺序，然后执行数组中下一个函数的函数  

### Node中的事件循环是什么？

它是一个无限的while循环，调用Epoll（Kqueue）“等待”或“池”，当Node.js发生（回调、事件、fs）时，它会路由到Node.js，并且在Epoll没有等待的情况下退出   

## 架构的设计步骤   

01. 收集利益相关的需求 
02. 与技术人员讨论，理解架构上的潜在限制，寻找架构的关注点： 性能，安全，平台化，代码维护，用户体验  
03. 寻找潜在的可行性技术方案   
04. 整理出功能列表中的功能性需求和跨功能性需求   
05. 找出会严重影响开发的风险点：技术风险，第三方系统集成
06. 对架构设计进行概念证明   
07. 细化架构的部分实施细节   
08. 进行需求排期   

可行性研究的目的就是用最小的代价在尽可能短的时间内确定问题是否能够解决    

## 设计原则 

单一职责原则：一个类只有一个引起他变化的原因，相关性很高的函数、数据封装到一个类中。
原因：避免某块函数或数据的变化影响其他类，降低耦合度。

开放封闭原则（开闭原则）：一个实体（类、函数、模块等）应该对外扩展开放，对内修改封闭。某实体应该易于扩展，在扩展某类的功能时应该通过添加新的代码来实现而不是修改其内部的代码。
原因：新功能经常会有，应该易于添加。但是添加新功能不能修改旧的已有功能，容易引起众多 BUG。
实现：提供一个固有的接口，让所有可能扩展的类实现该接口，需要新功能时添加接口方法。

里氏替换原则：子类必须可以替换掉它们的父类型。子类对象能够替换父类对象，而程序逻辑不变。
说明：也就是说，利用多态后子类强转为父类对象，子类必须能正常使用父类中的所有函数。多态让一个类（父类）拥有多种形态（子类），任何父类出现的地方都可以由子类替换并且不会出现问题。
实现：抽象类的设计。抽象类中包含抽象方法，子类继承抽象父类必须实现父类的抽象方法，这样无论哪个子类都可以执行父类中定义的抽象方法。

依赖倒置原则：细节应该依赖于抽象，而抽象不应依赖细节。在 Java 中，抽象一般指抽象类和接口，细节就是实现类，实现接口或继承抽象类产生的类就是细节。也就是说：简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。

"面向接口编程，而不是面向实现编程"：通过接口来设置功能，具体类实现接口实现功能。
比如有三个类都实现某接口，这三个实现类都有相同的方法名但其内部实现却可以是灵活多变的，但是这三个类都可以正常调用实现方法也可以进行传递。

接口隔离原则：使用多个专门功能的接口，而不是单一的总接口。
原因：一个总接口体验是非常糟糕的，实现总接口总会又很多用不到的函数。

合成复用原则：在一个新对象里使用一些已有的对象，使之成为新对象的一部分。
原因：新对象想使用某些对象中的功能，使用一个单独的类的功能可以继承，但是多个就不可继承了。倒不如使一些对象成为新对象的一部分，就可以通过委派的形式复用现有的某些对象的功能。

最少知识原则（迪米特法则）：一个模块或对象应该尽量少地与其他模块或对象发生相互作用，这样当一个模块修改时不会影响太多。
使用：A 有一个功能，B 想要使用，那么 A 只需要暴露一个函数或返回一个结果给 B 使用，而不是了解 A 如何实现的以及 A 包含的数据细节。

总体来说设计模式可以分为三大类：

创建型：单例模式、工厂模式、抽象工厂模式、建造者模式、原始模式      
结构型：适配器模式、装饰模式、代理模式      
行为型：模板方法模式、命令模式、迭代器模式、观察者模式、策略模式        

## 移动端高清方案如何解决 ?        
用JS根据屏幕尺寸和dpr精确地设置不同屏幕所应有的rem基准值和initial-scale缩放值，   
图片模糊问题，只需要根据data-dpr的值动态加载不同尺寸的图就可以了。          

## 请谈谈微信小程序主要目录和文件的作用？        
project.config.json      项目配置文件，用得最多的就是配置是否开启https校验；
App.js 设置一些全局的基础数据等；       
App.json 底部tab, 标题栏和路由等设置；      
App.wxss 公共样式，引入iconfont等；     
pages 里面包含一个个具体的页面；        
index.json (配置当前页面标题和引入组件等)；     
index.wxml (页面结构)；     
index.wxss (页面样式表)；       
index.js (页面的逻辑，请求和数据处理等)；       
## 请谈谈wxml与标准的html的异同？          
都是用来描述页面的结构；        
都由标签、属性等构成；          
标签名字不一样，且小程序标签更少，单一标签更多；        
多了一些 wx:if 这样的属性以及 {{ }} 这样的表达式
WXML仅能在微信小程序开发者工具中预览，而HTML可以在浏览器内预览      
组件封装不同， WXML对组件进行了重新封装，
小程序运行在JSCore内，没有DOM树和window对象，小程序中无法使用window对象和document对象。       
## 请谈谈WXSS和CSS的异同？
都是用来描述页面的样子；
WXSS 具有 CSS 大部分的特性，也做了一些扩充和修改；
WXSS新增了尺寸单位，WXSS 在底层支持新的尺寸单位 rpx；
WXSS 仅支持部分 CSS 选择器；
WXSS 提供全局样式与局部样式
## 你是怎么封装微信小程序的数据请求的？          
在根目录下创建utils目录及api.js文件和apiConfig.js文件；
在apiConfig.js 封装基础的get, post 和 put， upload等请求方法，设置请求体，带上token和异常处理等；
在api中引入apiConfig.js封装好的请求方法，根据页面数据请求的urls, 设置对应的方法并导出；
在具体的页面中导入；
## 小程序页面间有哪些传递数据的方法？        
使用全局变量实现数据传递        
页面跳转或重定向时，使用url带参数传递数据       
使用组件模板 template传递参数       
使用缓存传递参数        
使用数据库传递数据      
## 请谈谈小程序的双向绑定和vue的异同？           
大体相同，但小程序直接this.data的属性是不可以同步到视图的，必须调用this.setData()方法！

## 请谈谈小程序的生命周期函数？      
onLoad() 页面加载时触发，只会调用一次，可获取当前页面路径中的参数。
onShow() 页面显示/切入前台时触发，一般用来发送数据请求；
onReady() 页面初次渲染完成时触发, 只会调用一次，代表页面已可和视图层进行交互。
onHide() 页面隐藏/切入后台时触发, 如底部 tab 切换到其他页面或小程序切入后台等。
onUnload() 页面卸载时触发，如redirectTo或navigateBack到其他页面时。

## 请谈谈原生开发小程序、wepy、mpvue 的对比？
个人认为，如果是新项目，且没有旧的 h5 项目迁移，则考虑用小程序原生开发，好处是相比于第三方框架，坑少。
而如果有 老的 h5 项目是 vue 开发 或者 也有 h5 项目也需要小程序开发，则比较适合 wepy 或者 mpvue 来做迁移或者开发，近期看wepy几乎不更新了，所以推荐美团的mpvue。
而如果如果团队前端强大，自己做一套框架也没问题。

## 哪些方法来提高微信小程序的应用速度？
提高页面的加载速度
用户行为预测
减少默认data的大小
组件化方案          
## 分析微信小程序的优劣势？     
优势：      
容易上手，基础组件库比较全，基本上不需要考虑兼容问题；      
开发文档比较完善，开发社区比较活跃，支持插件式开发  ；      
良好的用户体验：无需下载，通过搜索和扫一扫就可以打开，打开速度快，安卓上可以添加到桌面，与原生APP差不多；      
开发成本比APP要低；     
为用户提供良好的安全保障（小程序发布 严格的审查流程）        
劣势：      
限制较多，页面大小不能超过1M，不能打开超过5个层级的页面；      
样式单一，部分组件已经是成型了的，样式不可修改，例如：幻灯片、导航      
推广面窄，不能分享朋友圈，只能通过分享给朋友，附近小程序推广        
依托于微信，无法开发后台管理功能        
后台调试麻烦，因为api接口必须https请求且公网地址        
真机测试，个别功能安卓和苹果表现迥异，例如安卓的定位功能加载很慢        
## 怎么解决微信小程序的异步请求问题？       
在回调函数中调用下一个组件的函数：

**app.js**
```js
success:function(info){
    that.apirtnCallback(info)
}
```
**index.js**    
```js
onLoad:function(){
    app.apirtnCallback = res =>{
        console.log(res)
    }
}
```
## 小程序关联微信公众号如何确定用户的唯一性？       
使用wx.getUserInfo方法       withCredentials为true时，可获取encryptedData，里面有union_id.后端需要进行对称解密。     

## 使用webview直接加载要注意哪些事项？      
必须要在小程序后台使用管理员添加业务域名；      
h5页面跳转至小程序的脚步必须是1.3.1以上；       
微信分享只可以是小程序的主名称，如要自定义分享内容，需小程序版本在1.7.1以上；       
h5的支付不可以是微信公众号的appid，必须是小程序的appid，而且用户的openid也必须是用户和小程序的      
## 小程序调用后台接口遇到哪些问题？     
数据的大小限制，超过范围会直接导致整个小程序崩溃，除非重启小程序；      
小程序不可以直接渲染文章内容这类型的html文本，显示需借助插件        
注：插件渲染会导致页面加载变慢，建议在后台对文章内容的html进行过滤，后台直接处理批量替换p标签div标签为view标签。然后其他的标签让插件来做。
## 微信小程序如何实现下拉刷新？
用view代替scroll-view，设置onPullDo     wnRefresh函数实现

## webview中的页面怎么跳转回小程序？      
```js   
wx.miniProgram.navigateTo({
    url:'pages/login/login'+'$params'
})
```

**跳转到小程序导航页面**
```js
wx.miniProgram.switchTab({
    url:'/pages/index/index'
})
```
## bindtap和catchtap的区别？          
bind事件绑定不会阻止冒泡事件向上冒泡        
catch事件绑定可以阻止冒泡事件向上冒泡           
## 简述wx.navigateTo(),wx.redirectTo(),wx.switchTab(),wx.navigateBack(),wx.reLaunch()的区别？     
在wxml页面中：      
跳转新页面      
在当前页打开        
切换到首页Tab       
在js页面中：分为‘应用内的页面’和‘tabBar页面’；      
如果上述跳转遇到跳转失败或者无效的问题，请访问：wx.navigateTo/wx.redirectTo无效     
## 小程序的生命周期函数？     
onLoad()页面加载时触发，只会调用一次，可获取当前页面路径中的参数        
onShow()页面显示/切换前台时触发，一般用来发送数据请求      
onReady()页面初次渲染完成时触发，只会调用一次，代表页面已可和视图层进行交互        
onHide()页面隐藏/切入后台时触发，如底部tab切换到其他页面或小程序切入后台等      
onUnload()页面卸载时触发，如redirectTo或navigateBack到其他页面时。      
## 微信小程序与H5的区别？     
运行环境不同（小程序在微信运行，h5在浏览器运行）；  
开发成本不同（h5需要兼容不同的浏览器）；        
获取系统权限不同（系统级权限可以和小程序无缝衔接）；
应用在生产环境的运行流畅度（h5需不断对项目优化来提高用户体验）；        
## 小程序和Vue写法的区别？        
遍历的时候：         
小程序 wx:for = "lists"     
Vue是 v-for = "item in lists"       
调用data模型（赋值）的时候：        
小程序：this.data.item //调用 this.setData({item:1}) //赋值      
vue: this.item //调用 this.item =1 //赋值
常见问题        
rpx:小程序的尺寸单位，规定屏幕为750rpx，可适配不同分辨率的屏幕。        
本地资源无法通过wxss获取        
RE：        
background-image：可以使用网络图片，或者base64，或者使用标签        
wx.navigateTo无法打开页面       
RE：        
一个应用同时只能打开5个页面，请避免多层级的交互方式，或使用wx.redirectTo       
tabBar设置不显示            
RE：        
tabBar的数量少于2项或超过5项都不会显示；        
tabBar写法错误导致不显示；      
tabBar没有写pagePath字段（程序启动后显示的第一个页面）          

## Loader和Plugin的区别？     
Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。   
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。    
Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。    

## Webpack构建流程简单说一下  
Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
  初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数   
  开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译   
  确定入口：根据配置中的 entry 找出所有的入口文件   
  编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理    
  完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系   
  输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会   
  输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统    
在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。
简单说
  初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
  编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
  输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中   

## source map是什么？生产环境怎么用？    
source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。
map文件只要不打开开发者工具，浏览器是不会加载的。
线上环境一般有三种处理方案：
  hidden-source-map：借助第三方错误监控平台 Sentry 使用
  nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
  sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)
注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。   

## 模块打包原理   
Webpack 实际上为每个模块创造了一个可以导出和导入的环境，本质上并没有修改 代码的执行逻辑，
代码执行顺序与模块加载顺序也完全一致。      

## Webpack 的热更新原理   
Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR原理   
在本地开发环境下，浏览器时客户端，webpack-dev-server(WDS)相当于服务端。HMR的核心就是客户端从服务端拉取更新的资源（准确的说是chunk diff），实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。
后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。

## 如何优化 Webpack 的构建速度？      
1. 多进程/多实例构建:  HappyPack(不维护了)、thread-loader   
2. 压缩代码 
3. 图片压缩 
4. 缩小打包作用域 
5. 提取页面公共资源 
6. DLL  
7. 利用缓存提升二次构建速度: babel-loader   
8. Tree-shaking 
9. Scope hoisting 
10. 动态Polyfill
  建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。(部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)  

## JS 数字丢失精度的原因?  
计算机的二进制实现和位数限制有些数无法有限表示就像一些无理数不能有限表示，如 圆周率 3.1415926...。JS 遵循 IEEE 754 规范，采用双精度存储（double precision），占用 64 bit. 1位用来表示1符号位  
11位用来表示指数  
52位表示尾数  
JS 中能精准表示的最大整数是 Math.pow(2, 53)，十进制即 9007199254740992    
0.1 >> 0.0001 1001 1001 1001…（1001无限循环） 
0.2 >> 0.0011 0011 0011 0011…（0011无限循环） 
此时只能模仿十进制进行四舍五入了，但是二进制只有 0 和 1 两个，于是变为 0 舍 1 入。这即是计算机中部分浮点数运算时出现误差，丢失精度的根本原因。  

## 为什么 Javascript 要是单线程的 ?
这是因为 Javascript 这门脚本语言诞生的使命所致!JavaScript 为处理页面中用户的交互,以及操作 DOM 树、CSS 样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。

如果 JavaScript 是多线程的方式来操作这些 UI DOM,则可能出现 UI 操作的冲突。

如果 Javascript 是多线程的话,在多线程的交互下,处于 UI 中的 DOM 节点就可能成为一个临界资源,

假设存在两个线程同时操作一个 DOM,一个负责修改一个负责删除,那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果。

当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性,Javascript 在最初就选择了单线程执行。

## 为什么 JS 阻塞页面加载 ?
由于 JavaScript 是可操纵 DOM 的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。

因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。

当 JavaScript 引擎执行时 GUI 线程会被挂起,GUI 更新会被保存在一个队列中等到引擎线程空闲时立即被执行。

从上面我们可以推理出,由于 GUI 渲染线程与 JavaScript 执行线程是互斥的关系,

当浏览器在执行 JavaScript 程序的时候,GUI 渲染线程会被保存在一个队列中,直到 JS 程序执行完成,才会接着执行。

因此如果 JS 执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞的感觉。

## css 加载会造成阻塞吗 ？
由上面浏览器渲染流程我们可以看出 :

DOM 解析和 CSS 解析是两个并行的进程,所以 CSS 加载不会阻塞 DOM 的解析。

然而,由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的,

所以他必须等待到 CSSOM Tree 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染。

因此,CSS 加载会阻塞 Dom 的渲染。

由于 JavaScript 是可操纵 DOM 和 css 样式 的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。

因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。

因此,样式表会在后面的 js 执行前先加载执行完毕,所以css 会阻塞后面 js 的执行。

## DOMContentLoaded 与 load 的区别 ?
当 DOMContentLoaded 事件触发时,仅当 DOM 解析完成后,不包括样式表,图片。我们前面提到 CSS 加载会阻塞 Dom 的渲染和后面 js 的执行,js 会阻塞 Dom 解析,所以我们可以得到结论:
当文档中没有脚本时,浏览器解析完文档便能触发 DOMContentLoaded 事件。如果文档中包含脚本,则脚本会阻塞文档的解析,而脚本需要等 CSSOM 构建完成才能执行。在任何情况下,DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。
当 onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。

DOMContentLoaded -> load。

## 什么是 CRP,即关键渲染路径(Critical Rendering Path)? 如何优化 ?
关键渲染路径是浏览器将 HTML CSS JavaScript 转换为在屏幕上呈现的像素内容所经历的一系列步骤。也就是我们上面说的浏览器渲染流程。

为尽快完成首次渲染,我们需要最大限度减小以下三种可变因素:

关键资源的数量: 可能阻止网页首次渲染的资源。

关键路径长度: 获取所有关键资源所需的往返次数或总时间。

关键字节: 实现网页首次渲染所需的总字节数,等同于所有关键资源传送文件大小的总和。

1. 优化 DOM
删除不必要的代码和注释包括空格,尽量做到最小化文件。

可以利用 GZIP 压缩文件。

结合 HTTP 缓存文件。

2. 优化 CSSOM
缩小、压缩以及缓存同样重要,对于 CSSOM 我们前面重点提过了它会阻止页面呈现,因此我们可以从这方面考虑去优化。

减少关键 CSS 元素数量

当我们声明样式表时,请密切关注媒体查询的类型,它们极大地影响了 CRP 的性能 。

3. 优化 JavaScript
当浏览器遇到 script 标记时,会阻止解析器继续操作,直到 CSSOM 构建完毕,JavaScript 才会运行并继续完成 DOM 构建过程。

async: 当我们在 script 标记添加 async 属性以后,浏览器遇到这个 script 标记时会继续解析 DOM,同时脚本也不会被 CSSOM 阻止,即不会阻止 CRP。

defer: 与 async 的区别在于,脚本需要等到文档解析后（ DOMContentLoaded 事件前）执行,而 async 允许脚本在文档解析时位于后台运行（两者下载的过程不会阻塞 DOM,但执行会）。

当我们的脚本不会修改 DOM 或 CSSOM 时,推荐使用 async 。

预加载 —— preload & prefetch 。

DNS 预解析 —— dns-prefetch 。

总结
分析并用 关键资源数 关键字节数 关键路径长度 来描述我们的 CRP 。

最小化关键资源数: 消除它们（内联）、推迟它们的下载（defer）或者使它们异步解析（async）等等 。

优化关键字节数（缩小、压缩）来减少下载时间 。

优化加载剩余关键资源的顺序: 让关键资源（CSS）尽早下载以减少 CRP 长度 。

前端性能优化之关键路径渲染优化

## defer 和 async 的区别 ?
当浏览器碰到 script 脚本的时候 :

1. <script src="script.js"></script>
没有 defer 或 async,浏览器会立即加载并执行指定的脚本,“立即”指的是在渲染该 script 标签之下的文档元素之前,也就是说不等待后续载入的文档元素,读到就加载并执行。

2. <script async src="script.js"></script>
有 async,加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3. <script defer src="myscript.js"></script>
有 defer,加载后续文档元素的过程将和 script.js 的加载并行进行（异步）,但是 script.js 的执行要在所有元素解析完成之后,DOMContentLoaded 事件触发之前完成。

从实用角度来说,首先把所有脚本都丢到 </body> 之前是最佳实践,因为对于旧浏览器来说这是唯一的优化选择,此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着,我们来看一张图:

defer_async

蓝色线代表网络读取,红色线代表执行时间,这俩都是针对脚本的。绿色线代表 HTML 解析。

因此,我们可以得出结论:

defer 和 async 在网络读取（下载）这块儿是一样的,都是异步的（相较于 HTML 解析）

它俩的差别在于脚本下载完之后何时执行,显然 defer 是最接近我们对于应用脚本加载和执行的要求的

关于 defer,此图未尽之处在于它是按照加载顺序执行脚本的,这一点要善加利用

async 则是一个乱序执行的主,反正对它来说脚本的加载和执行是紧紧挨着的,所以不管你声明的顺序如何,只要它加载完了就会立刻执行

仔细想想,async 对于应用脚本的用处不大,因为它完全不考虑依赖（哪怕是最低级的顺序执行）,不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的

来自 defer 和 async 的区别 -- nightire 回答

## 谈谈浏览器的回流与重绘
回流必将引起重绘,重绘不一定会引起回流。

回流(Reflow)
当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时,浏览器重新渲染部分或全部文档的过程称为回流。

会导致回流的操作：

页面首次渲染

浏览器窗口大小发生改变

元素尺寸或位置发生改变元素内容变化（文字数量或图片大小等等）

元素字体大小变化

添加或者删除可见的 DOM 元素

激活 CSS 伪类（例如：:hover）

查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法:

clientWidth、clientHeight、clientTop、clientLeft

offsetWidth、offsetHeight、offsetTop、offsetLeft

scrollWidth、scrollHeight、scrollTop、scrollLeft

scrollIntoView()、scrollIntoViewIfNeeded()

getComputedStyle()

getBoundingClientRect()

scrollTo()
重绘(Repaint)
当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等）,浏览器会将新样式赋予给元素并重新绘制它,这个过程称为重绘。

性能影响
回流比重绘的代价要更高。

有时即使仅仅回流一个单一的元素,它的父元素以及任何跟随它的元素也会产生回流。现代浏览器会对频繁的回流或重绘操作进行优化：浏览器会维护一个队列,把所有引起回流和重绘的操作放入队列中,如果队列中的任务数量或者时间间隔达到一个阈值的,浏览器就会将队列清空,进行一次批处理,这样可以把多次回流和重绘变成一次。

当你访问以下属性或方法时,浏览器会立刻清空队列:

clientWidth、clientHeight、clientTop、clientLeft


offsetWidth、offsetHeight、offsetTop、offsetLeft


scrollWidth、scrollHeight、scrollTop、scrollLeft


width、height


getComputedStyle()


getBoundingClientRect()
因为队列中可能会有影响到这些属性或方法返回值的操作,即使你希望获取的信息与队列中操作引发的改变无关,浏览器也会强行清空队列,确保你拿到的值是最精确的。

如何避免
CSS
避免使用 table 布局。

尽可能在 DOM 树的最末端改变 class。

避免设置多层内联样式。

将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。

避免使用 CSS 表达式（例如：calc()）。

Javascript
避免频繁操作样式,最好一次性重写 style 属性,或者将样式列表定义为 class 并一次性更改 class 属性。

避免频繁操作 DOM,创建一个 documentFragment,在它上面应用所有 DOM 操作,最后再把它添加到文档中。

也可以先为元素设置 display: none,操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。

避免频繁读取会引发回流/重绘的属性,如果确实需要多次使用,就用一个变量缓存起来。

对具有复杂动画的元素使用绝对定位,使它脱离文档流,否则会引起父元素及后续元素频繁回流。

## 什么是渲染层合并 (Composite) ?
渲染层合并,对于页面中 DOM 元素的绘制(Paint)是在多个层上进行的。

在每个层上完成绘制过程之后,浏览器会将绘制的位图发送给 GPU 绘制到屏幕上,将所有层按照合理的顺序合并成一个图层,然后在屏幕上呈现。

对于有位置重叠的元素的页面,这个过程尤其重要,因为一旦图层的合并顺序出错,将会导致元素显示异常。

composite

RenderLayers 渲染层,这是负责对应 DOM 子树。

GraphicsLayers 图形层,这是负责对应 RenderLayers 子树。

RenderObjects 保持了树结构,一个 RenderObjects 知道如何绘制一个 node 的内容, 他通过向一个绘图上下文（GraphicsContext）发出必要的绘制调用来绘制 nodes。

每个 GraphicsLayer 都有一个 GraphicsContext,GraphicsContext 会负责输出该层的位图,位图是存储在共享内存中,作为纹理上传到 GPU 中,最后由 GPU 将多个位图进行合成,然后 draw 到屏幕上,此时,我们的页面也就展现到了屏幕上。

GraphicsContext 绘图上下文的责任就是向屏幕进行像素绘制(这个过程是先把像素级的数据写入位图中,然后再显示到显示器),在 chrome 里,绘图上下文是包裹了的 Skia（chrome 自己的 2d 图形绘制库）

某些特殊的渲染层会被认为是合成层（Compositing Layers）,合成层拥有单独的 GraphicsLayer,而其他不是合成层的渲染层,则和其第一个拥有 GraphicsLayer 父层公用一个。

合成层的优点
一旦 renderLayer 提升为了合成层就会有自己的绘图上下文,并且会开启硬件加速,有利于性能提升。

合成层的位图,会交由 GPU 合成,比 CPU 处理要快 (提升到合成层后合成层的位图会交 GPU 处理,但请注意,仅仅只是合成的处理（把绘图上下文的位图输出进行组合）需要用到 GPU,生成合成层的位图处理（绘图上下文的工作）是需要 CPU。)

当需要 repaint 时,只需要 repaint 本身,不会影响到其他的层 (当需要 repaint 的时候可以只 repaint 本身,不影响其他层,但是 paint 之前还有 style, layout,那就意味着即使合成层只是 repaint 了自己,但 style 和 layout 本身就很占用时间。)

对于 transform 和 opacity 效果,不会触发 layout 和 paint (仅仅是 transform 和 opacity 不会引发 layout 和 paint,其他的属性不确定。)

一般一个元素开启硬件加速后会变成合成层,可以独立于普通文档流中,改动后可以避免整个页面重绘,提升性能。

注意不能滥用 GPU 加速,一定要分析其实际性能表现。因为 GPU 加速创建渲染层是有代价的,每创建一个新的渲染层,就意味着新的内存分配和更复杂的层的管理。并且在移动端 GPU 和 CPU 的带宽有限制,创建的渲染层过多时,合成也会消耗跟多的时间,随之而来的就是耗电更多,内存占用更多。过多的渲染层来带的开销而对页面渲染性能产生的影响,甚至远远超过了它在性能改善上带来的好处。

## dns解析的具体过程    
DNS是应用层协议，，包括不限于HTTP和SMTP以及FTP，用于将用户提供的主机名解析为ip地址。    
具体过程如下：  
1. 用户主机上运行着DNS的客户端，就是我们的PC机或者手机客户端运行着DNS客户端了
2. 浏览器将接收到的url中抽取出域名字段，就是访问的主机名，并将这个主机名传送给DNS应用的客户端      
3. DNS客户机端向DNS服务器端发送一份查询报文，报文中包含着要访问的主机名字段（中间包括一些列缓存查询以及分布式DNS集群的工作）
4. 该DNS客户机最终会收到一份回答报文，其中包含有该主机名对应的IP地址
5. 一旦该浏览器收到来自DNS的IP地址，就可以向该IP地址定位的HTTP服务器发起TCP连接 
解析顺序：  
1. 浏览器缓存
当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的IP地址（若曾经访问过该域名且没有清空缓存便存在）；
2. 系统缓存
当浏览器缓存中无域名对应IP则会自动检查用户计算机系统Hosts文件DNS缓存是否有该域名对应IP；
3. 路由器缓存
当浏览器及系统缓存中均无域名对应IP则进入路由器缓存中检查，以上三步均为客服端的DNS缓存；
4. ISP（互联网服务提供商）DNS缓存
当在用户客服端查找不到域名对应IP地址，则将进入ISP DNS缓存中进行查询。比如你用的是电信的网络，则会进入电信的DNS缓存服务器中进行查找；
5. 根域名服务器
当以上均未完成，则进入根服务器进行查询。全球仅有13台根域名服务器，1个主根域名服务器，其余12为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器IP告诉本地DNS服务器；
6. 顶级域名服务器
顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的IP地址告诉本地DNS服务器；
7. 主域名服务器
主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；
8. 保存结果至缓存
本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个IP地址与web服务器建立链接。
## new String('a') 和 'a' 是一样的么?
new String('a') 得到的是一个对象。'a' 是字符常量。  
一个是值类型，一个是引用类型；一个入栈，一个入堆。  

## JSBridge原理是什么？如何设计一个JSBridge？
JSBridge是Native代码与JS代码的通信桥梁。目前的一种统一方案是:H5触发url scheme->Native捕获url scheme->原生分析,执行->原生调用h5
要实现JSBridge,我们可以进行关键步骤分析
JSBridge实现思路：  
第一步:设计出一个Native与JS交互的全局桥对象
第二步:JS如何调用Native
第三步:Native如何得知api被调用
第四步:分析url-参数和回调的格式
第五步:Native如何调用JS
第六步:H5中api方法的注册以及格式
详细https://www.cnblogs.com/dailc/p/5931324.html 
## Dev-Server是怎么跑起来       
wekpack-dev-server内部通过express实现, 运行时并不真正的生成打包文件，只是生成内存中的打包.       
使用sockjs建立实时通信通道，在后端检测到文件变化， 且编译发布完成后， 会主动通知前端， 前端执行刷新动作。 
## 抽取公共文件是怎么配置的  
plugins:[
 new webpack.optimize.CommonsChunkPlugin('common.js'), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js 
]      
## 表单可以跨域吗  
可以。  
根本原因应该是传统的表单提交不是从脚本发起的请求，所以无需遵循同源策略。   
拿不到返回的数据。      
## 介绍观察者模式,中介者模式      
观察者和订阅-发布的区别，各自用在哪里   
观察者模式中观察者和目标直接进行交互，而发布订阅模式中统一由调度中心进行处理，订阅者和发布者互不干扰. 
从使用层面上讲：    
观察者模式，多用于单个应用内部    
发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件        

## 介绍Service Worker      
Service Worker 在 Web Worker 的基础上加上了持久离线缓存能力.  
1. 不能直接操作 DOM    
2. 用到的时候可以直接唤醒，不用的时候自动睡眠    
3. 离线内容开发者可控    
4. 一旦被 install，就永远存在，除非被手动 unregister   
5. 必须在 HTTPS 环境下才能工作   
6. 异步实现，内部大都是通过 Promise 实现     
7. 一个独立的 worker 线程，独立于当前网页进程，有自己独立的 worker context。   
8. 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）    
9. 能向客户端推送消息    

## 介绍CSS3中Position:sticky    
设置了sticky的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是top、left等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成fixed，根据设置的left、top等属性成固定位置的效果。   
可以知道sticky属性有以下几个特点：    
该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。    
当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top: 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动。   
元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计算元素的偏移量.                
## a标签默认事件禁掉之后做了什么才实现了跳转     
click 事件，通过js来做跳转            
## 使用import时，Webpack对node_modules里的依赖会做什么   
在遇到导入语句时， Webpack 会做以下两件事：   
1. 根据导入语句去寻找对应的要导入的文件。例如 require ('react ’）导入语句对应的文件是.／node modules/react/react.js, require('./utils.js')对应的文件是./util.js.    
2. 根据找到的要导入的文件的后缀，使用配置中的 Loader 去处理文件 例如使
开发的 JavaScript 文件需要使用 babel-loader 处理.  
## Http报文的请求会有几个部分       
一个HTTP请求报文由请求行（request line）、请求头部（header）、空行和请求数据4个部分组成.       
## 介绍AST（Abstract Syntax Tree）抽象语法树       
抽象语法树（abstract syntax tree或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。
常见的几种用途：    
代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等      
如JSLint、JSHint对代码错误或风格的检查，发现一些潜在的错误    
IDE的错误提示、格式化、高亮、自动补全等等   
代码混淆压缩    
UglifyJS2等   
优化变更代码，改变代码结构使达到想要的结构    
代码打包工具webpack、rollup等等   
CommonJS、AMD、CMD、UMD等代码规范之间的转化     
CoffeeScript、TypeScript、JSX等转化为原生Javascript   

## ES6中的Map和原生的对象有什么区别   
Object的键的类型是字符串; 
Map的键的类型是 可以是任意类型; 
Object获取键值使用Object.keys(返回数组); 
Map获取键值使用 map变量.keys() (返回迭代器)。         
## JS里垃圾回收机制是什么，常用的是哪种，怎么处理的   
原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。
常用的标记清除法：垃圾回收器在运行时候会给存储在内存中中的所有变量都加上标记。然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。  
引用计数法:跟踪记录每个值被引用的次数.    

## 小程序里面开页面最多是多少     
在微信小程序中打开的页面不能超过10个，达到10个页面后，就不能再打开新的页面。           
## Webpack如何配Sass，需要配哪些Loader      
style-loader,css-loader,sass-loader       
## 配CSS需要哪些Loader    
style-loader,css-loader        
## Div垂直水平居中（Flex、绝对定位）   
``` html
<div style="display: flex;align-items:center;justify-content:center;border:1px solid red;height:200px;">
<div style=" width: 50px;height: 40px;border: 1px solid #00C1B3;"></div>
</div>  

```
      
## 上下固定，中间滚动布局如何实现     
```html
<div style="height:200px; display: flex;flex-direction: column;">
<div style="height:20px;background:pink;">22</div> 
<div style="background:orange;flex:1;">33</div>
<div style="height:20px;background:pink;">222</div>
</div>
```      
## 盒子模型，以及标准情况和IE下的区别    
IE 盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。  
## 如何实现new  
它创建了一个全新的对象。    
它会被执行[[Prototype]]（也就是__proto__）链接。 res.__proto__ = func.prototype;    
它使this指向新创建的对象。    
通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。 apply
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，
那么new表达式中的函数调用将返回该对象引用。
```js
function New(fn) {
  let res={};
  res.__proto__ = fn.prototype;
  fn.apply(res,arguments[1]);
  return res;
}    
```    
## Prototype和Proto区别   
__proto__可以理解为"构造器的原型"    
``` 
__proto__===constructor.prototype
```   
## em和px的区别    
px像素(Pixel)。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。   
em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。      
## 如何去除url中的#号       
使用history模式.     
URL中#号(井号)的作用：  
1. 页面定位符
比如：http://www.httpwatch.com/features.htm#print ，此URL表示在页面features.htm中print的位置。浏览器读取这个URL后，会自动将print位置滚动至可视区域。    
在页面上添加锚点的方法为：<a name=”print”></a>或使用<div id=”print” >。
2. #号后面的数据不会发送到HTTP请求中。  
3. 位于#号后面的字符都是位置标识符。  
4. 改变#号后面的参数不会触发页面的重新加载但是会留下一个历史记录。  
参考[URL的井号](http://www.ruanyifeng.com/blog/2011/03/url_hash.html)   
## Webpack和Gulp的优缺点      
gulp是一个自动化构建工具，主要用来设定程序自动处理静态资源的工作。  
webpack是一个模块打包器。webpack 的主要目标是将 JavaScript 文件打包在一起,打包后的文件用于在浏览器中使用.   
各自侧重点不一样。    
## base64为什么能提升性能，缺点     
它仅适用于非常小的图像。 Base64编码文件比原始文件大。其优势在于不必打开另一个连接并向服务器发送图像的HTTP请求。 然而，与之同时付出的代价则是 CSS 文件体积的增大。
而 CSS 文件体积的增大意味着什么呢？意味着 CRP 的阻塞。
CRP（Critical Rendering Path，关键渲染路径）：当浏览器从服务器接收到一个HTML页面的请求时，到屏幕上渲染出来要经过很多个步骤。浏览器完成这一系列的运行，或者说渲染出来我们常常称之为"关键渲染路径"。  
图片不会导致关键渲染路径的阻塞，而转化为 Base64 的图片大大增加了 CSS 文件的体积，CSS 文件的体积直接影响渲染，导致用户会长时间注视空白屏幕。

## 数据类型分别存在哪里
var a = {name: "前端开发"}; var b = a; a = null那么b输出什么
var a = {b: 1}存放在哪里
var a = {b: {c: 1}}存放在哪里
## 垃圾回收时栈和堆的区别   
在栈中变量用完之后自动释放，v8堆内存分为新生代和老生代内存    
## 打包时Hash码是怎么生成的   
hash 字段是根据每次编译compilation的内容计算所得，也可以理解为项目总体文件的hash值。    
## webpack中hash、chunkhash和contenthash三者的区别? 
hash:是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值.     
chunkhash:根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响.   
contenthash:在使用chunkhash的例子中，如果index.css被index.js引用了，那么就会共用相同的chunkhash值。但是这样子有个问题，如果index.js更改了代码，css文件就算内容没有任何改变，由于是该模块发生了改变，导致css文件会重复构建。这个时候，我们可以使用extra-text-webpack-plugin里的contenthash值，保证即使css文件所处的模块里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建。   
## formData和原生的Ajax有什么区别 
form data 不用设置request header 类型   
## SEO优化中用相对路径还是用绝对路径    
(1)在绝对路径下，你的文章内容被转载或采集且对方比较懒，没有除去你加的链接，就会给你的网站增加一些外链。   

(2)如果你的网站没有做301，并且你把带www和不带www的域名都解析到一个站点，可能会产生网址规范化问题。使用绝对路径，可以告诉搜索引擎你使用的是哪个版本的URL，防止搜索引擎自动选择你不想让它收录的URL版本。    

(3)在绝对路径下，如果你的网页移动位置，不会影响站内链接，因为是固定的链接。   

(4)绝对路径不利于测试，有规模的网站一般会有线下测试，如果网站内的链接不是动态参数，就会造成很多死链接，没办法进行测试。   

(5)如果网页中链接过多，绝对路径会加大网页的体积。   

(6)相对路径地址是模糊的，不具备独立性。采用绝对地址，可以有效地防止你的竞争对手镜像你的网站。     

以上优缺点的对比判断出的结论是在SEO优化中相对来说绝对路径更好一些。   
 
## Npm2和Npm3+有什么区别
npm3 和 npm2 对于依赖的处理不一样了。   
npm2所有项目依赖是嵌套关系，而npm3为了改进嵌套过多、套路过深的情况，会将所有依赖放在第二层依赖中（所有依赖只嵌套一次，彼此平行，也就是平铺的结构）    
## Doctype作用？严格模式与混杂模式如何区分？它们有何意义？  
声明位于位于HTML文档中的第一行，处于html标签之前。    
告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。   
HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；   
严格模式：严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。    
混杂模式：混杂模式的页面以宽松的向后兼容的方式显示；模拟老的浏览器的行为以防止站点无法工作。    
怪异模式：怪异模式则是使用浏览器自己的方式来解析执行代码。    
## 页面导入样式时，使用link和@import有什么区别？  
1. link是XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;   
2. link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。   
3. link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本(IE5及以下)的浏览器不支持。    
4. link支持使用Javascript控制DOM去改变样式；而@import不支持。

## 如何区分HTML和HTML5？  
最明显的在文档类型声明上    
html:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "&nbsp;&nbsp;<html xmlns="/>　
````
HTML5:
```
<!DOCTYPE html>
```
## HTML5的离线储存怎么使用，工作原理能不能解释一下？    
原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，    
通过这个文件上的解析清单离线存储资源，    
这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。    

如何使用：    
1、页面头部像下面一样加入一个manifest的属性;    
2、在cache.manifest文件的编写离线存储的资源;        
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/ /offline.html
3、在离线状态时，操作window.applicationCache进行需求实现。    
## 用纯CSS创建一个三角形的原理是什么？
## 请指出以下代码的区别：function Person(){}、var person = Person()、var person = new Person()？
## 请解释变量声明提升 (hoisting)。  
js引擎会在正式执行代码之前进行一次"预编译"，预编译简单理解就是在内存中开辟一些空间，    
存放一些变量和函数。    
具体步骤如下：        
（1）页面创建GO全局对象（Global Object）对象（window对象）。    
（2）加载第一个脚本文件。   
（3）脚本加载完毕后，进行语法分析。   
（4）开始预编译   
查找函数声明，作为GO属性，值赋予函数体（函数声明优先）    
查找变量声明，作为GO属性，值赋予undefined   
（5）解释执行代码（直到执行函数b，该部分也被叫做词法分析）    
创建AO活动对象（Active Object）   
查找形参和变量声明，值赋予undefined   
实参值赋给形参    
查找函数声明，值赋给函数体    
解释执行函数中的代码    
（6）第一个脚本文件执行完毕，加载第二个脚本文件   
（7）第二个文件加载完毕后，进行语法分析   
（8）开始预编译   
重复编译步骤        
与解析机制使得变量提升（Hoisting），从字面上理解就是变量和函数的声明会移动到函数或者全局代码的开头位置。    
## 面试中查考的Web安全问题
参考[Web项目开发中常见安全问题及防范](https://www.cnblogs.com/aiandbigdata/p/10057659.html)   
SQL 注入    
XSS：跨站脚本攻击  
XSS是注入恶意的javascript代码，然后由受害者浏览器执行。这是对应用程序用户的攻击，而不是系统本身。   
针对XSS的常见防御措施是什么？在代码符号不合适的情况下进行输入验证，但对输出进行清除更为重要。     
CSRF: 跨站请求伪造    
如何防御CSRF？一种缓解措施是使用Cookie的双重提交，其中将令牌分配给Cookie并作为请求参数包括在内，并且任何不匹配都表示请求不是来自用户的，因为请求将始终以正确的Cookie发送，但是攻击者无法生成Cookie用作请求参数。另一种方法是生成随机令牌，并将其作为参数包含在每个请求中。令牌已由服务器验证，因此攻击者不应将其包括在恶意CSRF攻击中。在有效的情况下，如果受保护的站点链接到外部URL，则可以在多个点公开令牌，包括在浏览器历史记录，HTTP日志文件，记录HTTP请求第一行的网络设备和引荐来源标头中。     
中间人攻击    
DDoS    
点击劫持


