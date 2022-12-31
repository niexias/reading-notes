import{_ as s,o as n,c as a,a as l,b as p,d as o,e,r}from"./app.236119f4.js";const t=JSON.parse('{"title":"介绍","description":"","frontmatter":{"title":"介绍"},"headers":[{"level":2,"title":"什么是数据结构？什么是算法？","slug":"什么是数据结构-什么是算法","link":"#什么是数据结构-什么是算法","children":[]},{"level":2,"title":"数据结构和算法的关系","slug":"数据结构和算法的关系","link":"#数据结构和算法的关系","children":[]},{"level":2,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[{"level":3,"title":"为什么需要复杂度分析","slug":"为什么需要复杂度分析","link":"#为什么需要复杂度分析","children":[]},{"level":3,"title":"大 O 复杂度表示法","slug":"大-o-复杂度表示法","link":"#大-o-复杂度表示法","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"空间复杂度","slug":"空间复杂度","link":"#空间复杂度","children":[]},{"level":3,"title":"再分析时间复杂度","slug":"再分析时间复杂度","link":"#再分析时间复杂度","children":[]}]},{"level":2,"title":"重点和方法","slug":"重点和方法","link":"#重点和方法","children":[{"level":3,"title":"重点学习","slug":"重点学习","link":"#重点学习","children":[]},{"level":3,"title":"学习方法","slug":"学习方法","link":"#学习方法","children":[]}]}],"relativePath":"algo/index.md"}'),c={name:"algo/index.md"},F=p("h1",{id:"介绍",tabindex:"-1"},[o("介绍 "),p("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#")],-1),y=e('<h2 id="什么是数据结构-什么是算法" tabindex="-1">什么是数据结构？什么是算法？ <a class="header-anchor" href="#什么是数据结构-什么是算法" aria-hidden="true">#</a></h2><p>从广义上讲，数据结构就是指一组数据的存储结构。算法就是操所数据的一组方法。</p><p>从狭义上讲，是指某些著名的数据结构和算法，比如队列、栈、堆、二分查找、动态规划等。这些都是前人智慧的结晶，我们可以直接拿来使用。是从实际场景中抽象出来的，经过非常多的求证和检验，可以高效地帮助我们解决实际中的开发问题。</p><h2 id="数据结构和算法的关系" tabindex="-1">数据结构和算法的关系 <a class="header-anchor" href="#数据结构和算法的关系" aria-hidden="true">#</a></h2><p>数据结构和算法是相辅相成的。<strong>数据结构为算法服务，算法要作用在特定的数据结构之上</strong>。因此，我们不能孤立数据结构来讲算法，也无法孤立算法来讲数据结构。</p><p>比如，二分查找算法需要用数组来存储数据，因为数组具有随机访问的特点。但是如果我们选择链表这种数据结构，二分查找就不能工作了，因为链表并不支持随机访问。</p><p>数据结构是静态的，它只是组织数据的一种方式。如果不在它的基础上操作，构建算法，孤立存在的数据结构是没有用的。</p><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a></h2><p>学习数据结构和算法，首先要掌握<strong>复杂度分析</strong>。数据结构和算法解决的是如何更省、更快的存储和处理数据的问题。因此，需要一个考量效率和资源消耗的方法，这就是复杂度分析方法。</p><h3 id="为什么需要复杂度分析" tabindex="-1">为什么需要复杂度分析 <a class="header-anchor" href="#为什么需要复杂度分析" aria-hidden="true">#</a></h3><p>实际上，可以把代码执行一遍，通过统计、监控，就能得到算法的执行时间和占用的内存大小，这种评估算法执行效率的方法是正确的。但是这种方法存在局限性：</p><ol><li>测试结果非常依赖测试环境。测试环境中的硬件不同会对测试结果有很多的影响。</li><li>测试结果受数据规模的影响很大。待排序的数据有序度、规模不同，会得到不同结果。</li></ol><p>所以，需要一个<strong>不用具体的测试数据来测试，就可以粗略地估计算法的执行效率的方法</strong>。通过复杂度分析，能够让我们对我们的程序或算法有一个“效率”上感性的认识，它和实际的测试并不冲突。一个低阶时间复杂度的算法在极大的可能上会优于一个高阶时间复杂度的算法，在实际编程中，时刻关心时间复杂度、空间复杂度有助于产出效率高的程序。</p><h3 id="大-o-复杂度表示法" tabindex="-1">大 O 复杂度表示法 <a class="header-anchor" href="#大-o-复杂度表示法" aria-hidden="true">#</a></h3><p>在不运行代码的情况下，怎么用“肉眼”得到一段代码的执行时间呢？</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>对 CPU 来说，每一行代码都执行类似的操作：<strong>读数据-运算-写数据</strong>。尽管每一行对应的执行时间不一样，但是这里只是粗略的估计，所以可以假设每行代码执行的时间都是一样的，为 <code>unit_time</code>。</p><p>那么再看看上面这段代码，第 2、3 行代码分别需要 1 个 <code>unit_time</code>，第 4、5 行 都执行了 n 遍，所以需要 2n * unit_time 的执行时间，所以这段代码总的执行时间就是 (2n + 2) * unit_time。可以看出，<strong>所有代码的执行时间 T(n) 与 每行代码的执行次数成正比</strong>。</p><p>把这个规律总结为成一个公式：</p><p><strong>T(n) = O(f(n))</strong></p><ul><li>T(n)：表示代码的执行时间</li><li>n：表示数据的规模大小</li><li>f(n)：表示每行代码执行的次数总和。因为这是一个公式，所以用 f(n) 表示</li><li>O：表示代码的执行时间 T(n) 和 f(n) 表达式成正比</li></ul><p>所以上面的实例执行时间为：T(n) = O(2n + 2)。这就是<strong>大 O 时间复杂度表示法</strong>。</p><p><strong>大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随着数据规模增长的变化趋势</strong>，所以也叫作<strong>渐进时间复杂度（asymptotic time complexity）</strong>，简称<strong>时间复杂度</strong>。</p><p>当 n 很大时，可以想象成 10000、100000，而公式中的<strong>低阶、常量、系数</strong>三个部分不能左右增长趋势，所以可以忽略。只记录一个最大量级就可以了，所以用大 O 表示法表示上面代码的时间复杂度，就记为：T(n) = O(n)。</p><h3 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a></h3><p>分析一段代码的时间复杂度时，有三个实用的方法：</p><ul><li><p><strong>只关注循环执行次数最多的一段代码。</strong></p></li><li><p><strong>加法法则：总复杂度等于量级最大的那段代码的复杂度。即代码的执行时间由几个部分相加组成时，取量级最大的那段代码的复杂度。</strong></p><p>T1(n) = O(f(n))，T2(n) = O(g(n))，那么 T(n) = T1(n) + T2(n) = max(O(f(n)), O(g(n))) = O(max(f(n), g(n)))</p></li><li><p><strong>乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积。</strong></p><p>T1(n) = O(f(n))，T2(n) = O(g(n))，那么 T(n) = T1(n) * T2(n) = O(f(n)) * O(g(n)) = O(f(n), g(n))</p></li></ul><p>几种常见的时间复杂度：</p><ul><li>常数阶 O(1)</li><li>对数阶 O(logn)</li><li>线性阶 O(n)</li><li>线性对数阶 O(nlogn)</li><li>平方阶 O(n^2)、立方阶 O(n^3)、...、k 次方阶 O(n^k)</li><li>指数阶 O(x^n)</li><li>阶乘阶 O(n!)</li></ul><p>可以粗略的分为两类，多项式量级和非多项式量级。其中非多项式量级只有两个：O(2^n) 和 O(n!)，当数据规模越来越大时，非多项式量级的执行时间会急剧增加，求解问题的执行时间会无线增长，所以非多项式时间复杂度的算法是非常低效的算法。</p><p><img src="/reading-notes/assets/dataStructure-complexity.c440775e.png" alt="complexity"></p><h3 id="空间复杂度" tabindex="-1">空间复杂度 <a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a></h3><p>时间复杂度的全称是<strong>渐进时间复杂度</strong>，<strong>表示算法的执行时间与数据规模之间的增长关系</strong>。类比一下，空间复杂度的全称是<strong>渐进空间复杂度（asymptotic space complexity）</strong>，表示算法的存储空间与数据规模之间的增长关系。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>跟时间复杂度分析一样，第 2 行代码中，我们申请了一个空间存储变量 i，但是它是常量阶，和数据规模 n 没有关系，所以忽略。接着，第三行申请一个大小为 n 的数组，初次之外，剩下的代码都没有占用更多的空间，所以这段代码的空间复杂度就是 O(n)。</p><p>常见的空间复杂度就是 O(1)、O(n)、O(n^2)，像 O(logn)、O(nlogn) 这样的对数阶的复杂度平时是用不到的。空间复杂度的分析比时间复杂度分析简单很多。</p><h3 id="再分析时间复杂度" tabindex="-1">再分析时间复杂度 <a class="header-anchor" href="#再分析时间复杂度" aria-hidden="true">#</a></h3><p>同一段代码，在不同情况下时间复杂度可能会出现量级的差异，为了更全面、更准确的描述代码的时间复杂度，复杂度还分：<strong>最好情况时间复杂度（base case time complexity）</strong>、<strong>最坏情况时间复杂度（worst case time complexity）</strong>、<strong>平均情况时间复杂度（average case time complexity）</strong>、<strong>均摊时间复杂度（amortized time complexity）</strong>。</p><h4 id="最好、最坏情况时间复杂度" tabindex="-1">最好、最坏情况时间复杂度 <a class="header-anchor" href="#最好、最坏情况时间复杂度" aria-hidden="true">#</a></h4><p>先看一段代码，在数组中找一个数据，如果找到了就返回它的位置，如果没有找到，就返回 -1。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// n为数组的长度</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">array</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">pos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pos</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>这个时候，我们不需要每次都把整个数组遍历一遍，因为中途可能找到就可以提前结束循环了。那问题来了，这段代码的时间复杂度时 O(n) 吗？</p><p>因为变量 <code>x</code> 可能出现在任意位置，如果在第一个位置，那时间复杂度就是 O(1)；如果数组中不存在变量，那就需要把整个数组遍历一遍，时间复杂度就变成 O(n)。所以不同情况下，这段代码的时间复杂度是不一样的。</p><p>为了表示代码在不同情况下不同的时间复杂度，这里需要引入三个概念：</p><ul><li>最好情况时间复杂度。即在最理想的情况下，执行这段代码的时间复杂度。</li><li>最坏情况时间复杂度。即在最糟糕的情况下，执行这段代码的时间复杂度。</li><li>平均情况时间复杂度。</li></ul><h4 id="平均情况时间复杂度" tabindex="-1">平均情况时间复杂度 <a class="header-anchor" href="#平均情况时间复杂度" aria-hidden="true">#</a></h4><p>最好、最坏情况时间复杂度都是在极端的情况下的复杂度，发生的概率并不大。为了更好地表示平均情况下的复杂度，这里引入另一个概念：<strong>平均情况时间复杂度</strong>，简称平均时间复杂度。</p><p>再看上面的代码，要查找变量 <code>x</code> 在数组中的位置，有 n+1 种情况：<strong>在数组中的 0 ~ n-1 位置</strong>和<strong>不在数组中</strong>。<strong>要计算平均时间复杂度，那就需要把每种情况发生的概率考虑进去</strong>。</p><p>我们知道，<code>x</code> 要么在数组里，要么不在数组里。这两种情况对应的概率统计起来很麻烦，为了方便理解，这里加上在数组中和不在数组中的概率都为 1/2。另外，要查找的数据出现在 0 ~ n-1 这 n 个位置的概率也是一样的，为 1/n。所以要查找的数据出现在 0 ~ n-1 中任意位置的概率为 1/(2n)。</p><p>那么平均时间复杂度计算就是：</p><p>1 * 1/2n + 2 * 1/2n + 3 * 1/2n + ... + n * 1/2n + n * 1/2 = (3n + 1)/4</p><p>这个值就是概率论中的<strong>加权平均值</strong>，也叫<strong>期望值</strong>，所以平均时间复杂度的全称应该叫做<strong>加权平均时间复杂度</strong>或者<strong>期望时间复杂度</strong>。</p><p>前面那段代码的加权平均值为 (3n + 1)/4，用大 O 表示法表示，去掉系数和常量，复杂度仍为 O(n)。</p><p>在大多数情况下，不需要区分最好、最坏、平均情况时间复杂度三种情况。很多情况只使用一个复杂度就可以满足了。<strong>只有同一块代码在不同情况下，时间复杂度有量级的差距，才会使用这三种复杂度表示法来区分</strong>。</p><h4 id="均摊时间复杂度" tabindex="-1">均摊时间复杂度 <a class="header-anchor" href="#均摊时间复杂度" aria-hidden="true">#</a></h4><p>先看下面的代码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 创建一个长度为 n 的数组</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">insert</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>这段代码的时间复杂度是多少呢？先用上面的三种时间复杂度分析方法来分析一下。</p><p>最好情况下，数组有位置，直接插入，所以最好情况时间复杂度为 O(1)；最坏情况下，数组没有多余空间，需要做一次遍历求和，然后再插入，所以最坏情况时间复杂度为 O(n)。</p><p>数组长度为 n，根据插入位置不同有 n 种情况，另外还有一种情况是数组没有空闲位置时插入一个数据。这 n 种情况的发生的概率是一样的，为 1/(n+1)，所以平均时间复杂度为 O(1)：</p><p>1 * 1/(n+1) + 1 * 1/(n+1) + ... + n * 1/(n+1) = O(1)</p><p><code>insert()</code> 和上面的 <code>find()</code> 对比一下。会发现，对于 <code>insert()</code> 函数来说，O(1) 时间复杂度的插入和 O(n) 时间复杂度的插入，出现的频率是有规律的，而且有一定的前后次序，一般都是一个 O(n) 插入之后，紧跟着 n-1 个 O(1) 的插入操作，循环往复。</p><p>针对这种场景，并不需要向平均时间复杂度分析一样，<strong>找出所有情况以及相应的发生概率，然后计算加权平均值</strong>。引入更加简单的分析方法：<strong>摊还分析法</strong>，通过摊还分析法得到的时间复杂度叫<strong>均摊时间复杂度</strong>。</p><p>再看看 <code>insert()</code>，每一个 O(n) 插入之后，紧跟着 n-1 个 O(1) 的插入操作，所以把耗时多的那次操作均摊到接下来的 n-1 次耗时少的操作上，均摊下来之后，这一组连续操作的均摊时间复杂度就是 O(1)。</p><p>在对一组数进行一组连续操作时：</p><ol><li>大部分情况时间复杂度都很低，只有个别情况复杂度比较高。</li><li>这些操作之间存在前后连贯的时序关系。</li></ol><p>这个时候，就可以把这些操作放在一块分析，看是否可以将较高时间复杂度的那次操作的耗时，平摊到其他那些时间复杂度比较低的操作上。而且，能够使用均摊时间复杂度的场合，一般均摊时间复杂度就等于最好情况时间复杂度。</p><p>均摊时间复杂度就是一种特殊的平均时间复杂度。</p><h2 id="重点和方法" tabindex="-1">重点和方法 <a class="header-anchor" href="#重点和方法" aria-hidden="true">#</a></h2><h3 id="重点学习" tabindex="-1">重点学习 <a class="header-anchor" href="#重点学习" aria-hidden="true">#</a></h3><ul><li>10 个数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie 树</li><li>10 个算法：递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、动态规划、字符串匹配算法。</li></ul><p>不仅是学习数据结构和算法的概念和基本实现，更需要知道它的<strong>来历、特点、适合解决的问题以及实际的应用场景</strong>。</p><h3 id="学习方法" tabindex="-1">学习方法 <a class="header-anchor" href="#学习方法" aria-hidden="true">#</a></h3><ul><li>做笔记，写总结</li><li>多思考，避免一知半解</li><li>边学边练，按照分类针对性做题</li><li>需要沉淀，反复迭代，重点难点，多学几遍</li></ul>',74);const D=s(c,[["render",function(s,p,o,e,t,c){const D=r("VueJobs");return n(),a("div",null,[F,l(D),y])}]]);export{t as __pageData,D as default};
