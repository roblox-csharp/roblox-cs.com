<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HTTPServerExample from "@/components/code-examples/HTTPServerExample.vue"
</script>

<script lang="ts">
export default {
  data() {
    return {
      latestRelease: "..."
    };
  },
  created() {
    this.fetchLatestRelease();
  },
  methods: {
    async fetchLatestRelease(): Promise<void> {
      fetch("https://api.github.com/repos/roblox-csharp/roblox-cs/releases/latest")
        .then(response => response.json())
        .then(data => this.latestRelease = data.tag_name ?? data.message);
    }
  }
};
</script>

<template>
	<h1 class="bright title">roblox-cs</h1>
	<h3>Roblox C# is a C# to Luau compiler built for Roblox.</h3>

	<div id="main-button-list">
		<ul>
			<router-link to="/install">
				<button class="main-button">Get Started</button>
			</router-link>
			<router-link to="/playground">
				<button class="main-button">Try It</button>
			</router-link>
			<a href="https://github.com/roblox-csharp" target="_blank">
				<button class="main-button">GitHub</button>
			</a>
		</ul>
	</div>

	<h1 class="bright push-down-much">Latest release: <p style="font-weight: 700; display: inline;">{{ latestRelease }}</p></h1>

	<HTTPServerExample class="push-down"/>
</template>