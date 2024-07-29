<script setup lang="ts">
import ListBlock from '@/components/ListBlock.vue';
</script>

<template>
  <ListBlock title="Add a feature or fix an issue yourself">
    <p style="text-indent: 20px;">
      roblox-cs is open-source, so you can go in and look at and modify the code for yourself. This means that if you find a bug or want a feature, you can just do it yourself! Of course this doesn't mean I won't, but it's always helpful to have people contributing. Speaking of, if you contribute you will get a "Contributor" role in the Discord server.
    </p>
    <p>
      Remember that roblox-cs isn't just the compiler! You can also help by contributing to:
      <ul>
        <li>
          <a class="nice-hl" href="https://github.com/roblox-csharp/types">The type generator</a>
        </li>
        <li>
          <a class="nice-hl" href="https://github.com/roblox-csharp/installer">The installer</a>
        </li>
        <li>
          And <a class="nice-hl" href="https://github.com/roblox-csharp/roblox-cs.com">the website</a>.
        </li>
      </ul>
    </p>
  </ListBlock>
  <ListBlock title="Updates, questions, discussions, and more">
    <p style="text-indent: 20px;">
      If you're unsure about anything, need to know where to find something, are interested in what's changing with roblox-cs, want to talk about roblox-cs, want to share your roblox-cs projects, or anything else of that nature, <a class="nice-hl" href="https://discord.gg/nFcsW3C33u">our Discord server</a> is the place to do it.
    </p>
  </ListBlock>
</template>