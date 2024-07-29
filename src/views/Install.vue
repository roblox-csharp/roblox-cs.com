<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
</script>

<template>
  <h1 class="bright title push-down-much">Install</h1>
  <h2 class="description-body">You can install roblox-cs via the roblox-cs installer program, or compile it from source & add it to PATH yourself.</h2>
  <br/>
  <div id="main-button-list">
		<ul>
      <a href="https://github.com/roblox-csharp/roblox-cs/archive/refs/heads/main.zip">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="48" height="48" src="https://img.icons8.com/color/48/000000/git.png" alt="source"/>
        </button>
			</a>
      <a href="https://github.com/roblox-csharp/installer/releases">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="48" height="48" src="/favicon.ico" alt="installer"/>
        </button>
			</a>
    </ul>
  </div>
</template>