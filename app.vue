<template>
  <div>
    <h2>Starlink Launches</h2>
    <p>Limit: {{limit}}</p>
    <button @click="limit = 5">change limit to 5</button>

    <p v-for="(entry, i) of data?.launches" :key="entry.id">
      {{ i + 1 }}. Mission Name: {{ entry.mission_name }} ({{
        entry.launch_year
      }})
    </p>
  </div>
</template>

<script lang="ts" setup>
const limit = ref(10)

const { data } = await useAsyncData('starlink', () => GqlLaunches({limit: limit.value}))
</script>
