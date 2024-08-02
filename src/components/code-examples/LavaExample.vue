<template>
  <pre><code class="cs-codeblock"><span class="cs-com">// A basic Lava component</span>

<span class="cs-kw">foreach</span> <span class="cs-b1">(</span><span class="cs-kw">var</span> <span class="cs-id">instance</span> <span class="cs-kw">in</span> <span class="cs-class">Services</span><span class="cs-op">.</span><span class="cs-id">CollectionService</span><span class="cs-op">.</span><span class="cs-fn">GetTagged</span><span class="cs-b2">(</span><span class="cs-op">"</span><span class="cs-str">Lava</span><span class="cs-op">"</span><span class="cs-b2">)</span><span class="cs-b1">)</span>
<span class="cs-b1">{</span>
&ThickSpace;<span class="cs-kw">if</span> <span class="cs-b2">(</span><span class="cs-id">instance</span> <span class="cs-kw">is</span> <span class="cs-class">BasePart</span> <span class="cs-id">instance</span><span class="cs-b2">)</span>
&ThickSpace;<span class="cs-b2">{</span>
&ThickSpace;&ThickSpace;<span class="cs-id">part</span><span class="cs-op">.</span><span class="cs-id">Touched</span><span class="cs-op">.</span><span class="cs-fn">Connect</span><span class="cs-b3">(</span><span class="cs-id">part</span> <span class="cs-op">=></span>
&ThickSpace;&ThickSpace;&ThickSpace;<span class="cs-id">part</span><span class="cs-op">.</span><span class="cs-id">Parent</span><span class="cs-op">?</span>
&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;<span class="cs-op">.</span><span class="cs-fn">FindFirstChildOfClass</span><span class="cs-op">&lt;</span><span class="cs-class">BasePart</span><span class="cs-op">&gt;()?</span>
&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;<span class="cs-op">.</span><span class="cs-fn">TakeDamage</span><span class="cs-op">(</span><span class="cs-num">100</span><span class="cs-op">)</span>
&ThickSpace;&ThickSpace;<span class="cs-b2">)</span><span class="cs-op">;</span>
&ThickSpace;<span class="cs-b2">}</span>
<span class="cs-b1">}</span>
</code></pre>
</template>