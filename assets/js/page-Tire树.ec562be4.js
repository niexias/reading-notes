(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{482:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg1.6d1322ea.png"},483:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg2.df796e56.png"},484:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg3.5c72db1b.png"},485:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg4.eb6ec344.png"},486:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg5.12baf126.png"},487:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg6.467a95ed.png"},488:function(t,s,a){t.exports=a.p+"assets/img/dataStructure-tire-eg7.e8bd235d.png"},570:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"tire-树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tire-树"}},[t._v("#")]),t._v(" Tire 树")]),t._v(" "),n("p",[t._v("为了方便输入，当你在搜索引擎的搜索框中，输入要搜索的文字的某一部分，搜索引擎就会自动弹出下拉框，里面是各种关键词提示。然后可以直接选择，而不必输入所有内容。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(482),alt:"search completion"}})]),t._v(" "),n("p",[t._v("它是怎么实现的呢？底层使用的是那种数据结构和算法呢？")]),t._v(" "),n("p",[t._v("这些搜索引擎的关键词提示功能肯定做了很多优化，但是底层最基本的就是 Tire 树这种数据结构。")]),t._v(" "),n("h2",{attrs:{id:"什么是-tire-树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tire-树"}},[t._v("#")]),t._v(" 什么是 Tire 树")]),t._v(" "),n("p",[t._v("Tire 树，也叫字典树。顾名思义，它是一种树形结构。这种数据结构专门处理字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。")]),t._v(" "),n("p",[n("strong",[t._v("Tire 树的本质，就是利用字符串之间的公共前缀，将重复的前缀组合在一起")]),t._v("。")]),t._v(" "),n("p",[t._v("举个例子，现在有 6 个字符串：how，hi，her，hello，so，see。我们希望在里面多次查找某个字符串是否存在。如果每次查找都是将要查找的字符串和这 6 个字符串匹配，那么效率就比较低了。有没有更高效的方法？")]),t._v(" "),n("p",[t._v("这时候，可以先对这 6 个字符串做一下预处理，组织成 Tire 树的结构。之后每次查找，都是在 Tire 中进行匹配查找：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(483),alt:"tire"}})]),t._v(" "),n("p",[t._v("Tire 的构造过程如下，每一步都相当于往 Tire 树中插入一个字符串，所有字符串都插入完成之后，Tire 树就构造好了。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(484),alt:"tire"}})]),t._v(" "),n("p",[t._v("在 Tire 树中查找一个字符串的时候，比如查找“her”，先将它分割成单个字符串 h，e，r，然后从 Tire 树的根节点开始匹配。如果所示，绿色的路径就是在 Tire 树中的匹配路径。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(485),alt:"tire"}})]),t._v(" "),n("p",[t._v("如果要查找 “he”，方法还是一样的，如图所示，绿色路径就是“he”的匹配路径。但是有点不同，"),n("strong",[t._v("路径的最后一个节点“e”并不是红色的")]),t._v("，也就是说，“he”是某个字符串的前缀，它并不能完全匹配任何字符串。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(486),alt:"tire"}})]),t._v(" "),n("h2",{attrs:{id:"实现-tire-树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现-tire-树"}},[t._v("#")]),t._v(" 实现 Tire 树")]),t._v(" "),n("h3",{attrs:{id:"tire-树主要有两个操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tire-树主要有两个操作"}},[t._v("#")]),t._v(" Tire 树主要有两个操作")]),t._v(" "),n("ul",[n("li",[t._v("构造：将字符串集合构造成 Tire 树。这个过程拆开来看，就是将字符串插入 Tire 树的过程。")]),t._v(" "),n("li",[t._v("查询：在 Tire 树中查询一个字符串。")])]),t._v(" "),n("p",[t._v("从前面的图可以看出，Tire 树是一棵多叉树。在二叉树中，一个节点的左右子节点是通过两个指针来存储的，那在多叉树中，怎么存储一个节点的所有子节点的指针呢？")]),t._v(" "),n("h3",{attrs:{id:"经典的存储方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#经典的存储方式"}},[t._v("#")]),t._v(" 经典的存储方式")]),t._v(" "),n("p",[t._v("借助散列表的思想，"),n("strong",[t._v("通过一个下标与字符一一映射的数组，来存储子节点的指针")]),t._v("。如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(487),alt:"tire"}})]),t._v(" "),n("p",[t._v("假设我们的字符串只有 a~z 这 26 个小写字母。那么，在数组下标为 0 的位置存储指向子节点 a 的指针，下标为 1 的位置存储指向子节点 b 的指针，以此类推，下标为 25 的位置存储指向子节点 z 的指针。如果某个节点不存在，那么就在对应的下标位置存储 null。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个下标位置存储的是指向对应子节点的指针")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"实现构造和查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现构造和查询"}},[t._v("#")]),t._v(" 实现构造和查询")]),t._v(" "),n("p",[t._v("接下来，实现构造和查询。当我们在 Tire 树行查找字符串的时候，就可以通过字符的 ASCII 码减去“a”的 ASCII 码（得到的就是数组下标），迅速的找到匹配的子节点的指针。比如 d - a = 3，那子节点 d 的指针就存储在数组下标为 3 的位置。")]),t._v(" "),n("p",[t._v("整个过程代码的实现为：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEndingChar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieTree")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 往 Trie 树中插入一个字符串")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" char "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEndingChar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Trie 树中查找一个字符串")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" char "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isEndingChar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tree "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrieTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"how"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"her"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"so"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"see"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" strs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" strs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br")])]),n("p",[n("strong",[t._v("那么在 Tire 树中，查找某个字符串的时间复杂是多少？")])]),t._v(" "),n("p",[t._v("如果要在一组字符串中，频繁地查询某些字符串，用 Trie 树会非常高效。")]),t._v(" "),n("p",[t._v("构建 Trie 树的过程，需要扫描所有的字符串，时间复杂度是 "),n("strong",[t._v("O(n)（n 表示所有字符串的长度和")]),t._v("）。但是一旦构建成功之后，后续的查询操作会非常高效。")]),t._v(" "),n("p",[t._v("每次查询时，如果要查询的字符串长度是 k，那我们只需要比对大约 k 个节点，就能完成查询操作。跟原本那组字符串的长度和个数没有任何关系。所以说，构建好 Trie 树后，在其中查找字符串的时间复杂度是 "),n("strong",[t._v("O(k)")]),t._v("，k 表示要查找的字符串的长度。")]),t._v(" "),n("h3",{attrs:{id:"tire-树是否真的耗内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tire-树是否真的耗内存"}},[t._v("#")]),t._v(" Tire 树是否真的耗内存")]),t._v(" "),n("p",[t._v("存储 Tire 树时，用数组来存储一个节点的子节点的指针。")]),t._v(" "),n("p",[t._v("如果字符串中包含 a~z 这 26 个字符，那么每个节点都需要存储一个长度为 26 的数组，并且每个数组元素存储一个 8 字节指针（或者 4 个字节，跟 CPU、操作系统、编译器等有关）。而且，不管一个节点有多少个子节点，我们都需要维护这个长度为 26 的数组。")]),t._v(" "),n("p",[t._v("按照上面的例子，数组长度是 26，每个元素是 8 个字节，所以每个节点额外需要 26 * 8 = 208 个字节。而且这还是只包含 26 个字符的情况。")]),t._v(" "),n("p",[t._v("如果字符串中，不仅包含小写字母，还包含大写字母、数字、甚至中文，那么需要的存储空间就更多了。")]),t._v(" "),n("p",[t._v("Tire 树的本质是将重复的前缀组合在一起，避免重复存储。但是，在某些情况下，Tire 树并不能节省存储空间。在重复前缀并不多的情况下，Tire 不但不能节省空间，还有可能浪费更多的内存。")]),t._v(" "),n("p",[n("strong",[t._v("所以 Tire 树是比较耗内存的，是一种空间换时间的解决思路。")])]),t._v(" "),n("p",[t._v("可以牺牲一点查询效率，将每个节点中的数组换成其他数据结构，来存储一个子节点的指针。比如有序数组、跳表、散列表、红黑树等。")]),t._v(" "),n("p",[t._v("假设是有序数组，查询的时候，可以通过二分查找的方法，快速找到某个字符应该匹配的子节点的指针。往 Tire 插入一个字符串时，需要维护数组中数据的有序性，就会稍微慢点。")]),t._v(" "),n("p",[t._v("Tire 的变体都可以在一定程度上解决内存的销毁问题。比如，还有"),n("strong",[t._v("缩点优化")]),t._v("，就是对于只有一个子节点的节点，可以将此节点与子节点合并。也可以节省空间。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(488),alt:"tire"}})]),t._v(" "),n("h2",{attrs:{id:"tire-树与散列表、红黑树的比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tire-树与散列表、红黑树的比较"}},[t._v("#")]),t._v(" Tire 树与散列表、红黑树的比较")]),t._v(" "),n("p",[t._v("支持数据动态操作的数据有，散列表、红黑树、跳表等。这些数据结构也可以实现在一组字符串中查找字符串的功能。这里做个比较。")]),t._v(" "),n("p",[t._v("在刚刚这个场景中，Tire 树实际上表现得并不好，它对处理的字符串有极其严苛的要求：")]),t._v(" "),n("ol",[n("li",[t._v("字符串包含的字符集不能太大。字符集太大，存储空间就会浪费很多。")]),t._v(" "),n("li",[t._v("字符串的前缀重合要比较多，不然消耗也会变大很多。")]),t._v(" "),n("li",[t._v("要用 Tire 树，首先需要从零开始实现一个 Tire 树，这个在工程上是简单问题复杂化了，除非必须，一般不建议这样做。")]),t._v(" "),n("li",[t._v("通过指针串起来的数据块不是连续的，而 Tire 树中用到了指针，所以这对缓存并不友好，性能会打折扣。")])]),t._v(" "),n("p",[t._v("针对在一组字符串中查找字符串的问题，在工程中，更倾向于用散列表或者红黑树。因为这两种数据结构，我们都不需要自己去实现，直接利用编程语言中提供的现成类库就行了。")]),t._v(" "),n("p",[n("strong",[t._v("Trie 树只是不适合精确匹配查找，这种问题更适合用散列表或者红黑树来解决。Trie 树比较适合的是查找前缀匹配的字符串，也就是类似开篇的关键词提示那种场景。")])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("解答开篇问题，假设关键词词库是由用户的热门搜索关键词组成，先将这个词库构建成 Tire 树，当用户其中某个单词时，把这个词作为前缀子串在 Tire 树中匹配，将满足这个匹配的关键词展示在搜索提示框。这就是搜索关键词的最基本算法原理。")]),t._v(" "),n("p",[t._v("Trie 树的这个应用可以扩展到更加广泛的一个应用上，就是"),n("strong",[t._v("自动输入补全")]),t._v("，比如输入法自动补全功能、IDE 代码编辑器自动补全功能、浏览器网址输入的自动补全功能等等。")]),t._v(" "),n("p",[t._v("最后总结一下，Tire 树是一种解决字符串快速匹配的数据结构。它比较耗内存，是一种空间换时间的解决问题思路。当然，在 Tire 树中做字符串匹配非常高效，时间复杂度是 O(k)，k 是要匹配的字符串的长度。")]),t._v(" "),n("p",[t._v("Trie 树的优势并不在于，用它来做动态集合数据的查找，因为，这个工作完全可以用更加合适的散列表或者红黑树来替代。"),n("strong",[t._v("Trie 树最有优势的是查找前缀匹配的字符串")]),t._v("，比如搜索引擎中的关键词提示功能这个场景，就比较适合用它来解决，也是 Trie 树比较经典的应用场景。")])])}),[],!1,null,null,null);s.default=r.exports}}]);