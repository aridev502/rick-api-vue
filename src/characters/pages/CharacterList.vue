<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';

const props = defineProps<{title: string, visible: boolean}>();

</script>

<template>
    <div>
        <h2>{{ props.title }}</h2>

        <CardList />
    </div>
</template>


<style scoped>

</style>