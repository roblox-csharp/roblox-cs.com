<template>
  <pre><code class="p-codeblock"><span class="psh-com">## A basic HTTP request</span>
<span class="psh-kw">use</span> <span class="psh-fn">writeln</span> <span class="psh-kw">from</span> <span class="psh-str"><span class="psh-op">@</span>std<span class="psh-op">/</span>io</span>
<span class="psh-kw">use</span> <span class="psh-fn">request</span> <span class="psh-kw">from</span> <span class="psh-str"><span class="psh-op">@</span>http</span>

<span class="psh-com">## This will be included in @http eventually</span>
<span class="psh-kw">interface</span> <span class="psh-class">Response</span> <span class="psh-b1">{</span>
&ThickSpace;<span class="psh-b1">()</span> <span class="psh-op">::</span> <span class="psh-kw">any</span> <span class="psh-id">json</span>
<span class="psh-b1">}</span>

<span class="psh-class">Response</span> <span class="psh-id">res</span> <span class="psh-op">=</span> <span class="psh-fn">request</span><span class="psh-b1">(</span><span class="psh-str"><span class="psh-op">"</span>https://api.sampleapis.com/coffee/hot<span class="psh-op">"</span></span><span class="psh-op">,</span> <span class="psh-b3">{</span>
&ThickSpace;<span class="psh-id">method</span><span class="psh-op">:</span> <span class="psh-str"><span class="psh-op">"</span>GET<span class="psh-op">"</span></span>
<span class="psh-b3">}</span><span class="psh-b1">)</span>

<span class="psh-fn">writeln</span><span class="psh-b1">(</span><span class="psh-id">res</span><span class="psh-op">.</span><span class="psh-fn">json</span><span class="psh-b1">()</span><span class="psh-b1">)</span></code></pre>
</template>