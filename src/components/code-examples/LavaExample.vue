<template>
  <pre><code class="cs-codeblock"><span class="cs-com">## A basic HTTP request</span>
<span class="cs-kw">use</span> <span class="cs-fn">writeln</span> <span class="cs-kw">from</span> <span class="cs-str"><span class="cs-op">@</span>std<span class="cs-op">/</span>io</span>
<span class="cs-kw">use</span> <span class="cs-fn">request</span> <span class="cs-kw">from</span> <span class="cs-str"><span class="cs-op">@</span>http</span>

<span class="cs-com">## This will be included in @http eventually</span>
<span class="cs-kw">interface</span> <span class="cs-class">Response</span> <span class="cs-b1">{</span>
&ThickSpace;<span class="cs-b1">()</span> <span class="cs-op">::</span> <span class="cs-kw">any</span> <span class="cs-id">json</span>
<span class="cs-b1">}</span>

<span class="cs-class">Response</span> <span class="cs-id">res</span> <span class="cs-op">=</span> <span class="cs-fn">request</span><span class="cs-b1">(</span><span class="cs-str"><span class="cs-op">"</span>https://api.sampleapis.com/coffee/hot<span class="cs-op">"</span></span><span class="cs-op">,</span> <span class="cs-b3">{</span>
&ThickSpace;<span class="cs-id">method</span><span class="cs-op">:</span> <span class="cs-str"><span class="cs-op">"</span>GET<span class="cs-op">"</span></span>
<span class="cs-b3">}</span><span class="cs-b1">)</span>

<span class="cs-fn">writeln</span><span class="cs-b1">(</span><span class="cs-id">res</span><span class="cs-op">.</span><span class="cs-fn">json</span><span class="cs-b1">()</span><span class="cs-b1">)</span></code></pre>
</template>