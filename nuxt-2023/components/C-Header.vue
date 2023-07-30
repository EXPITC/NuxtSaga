<template>
  <header>
    <nav class="max-w-screen-md w-full">
      <ul class="flex justify-evenly">
        <li class="hover:text-red-500">
          Anime List
        </li>
        <li class="hover:text-red-500">
          <NuxtLink to="/gendres">
            Gendres
          </NuxtLink>
        </li>
        <li class="hover:text-red-500">
          <NuxtLink to="/popular">
            popular
          </NuxtLink>
        </li>
        <li class="hover:text-red-500">
          <NuxtLink to="/Contact">
            Contact us
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CHeader'
})
</script>
