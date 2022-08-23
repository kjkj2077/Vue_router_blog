<template>
    <div v-for="(a, i) in blog " :key="i">
        <h3 @click="$router.push('/detail/' + a.number)">{{ a.title }}</h3>
        <p>{{ a.content }}</p>
        <p>{{ a.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'TheList',
    props: {
        blog: Array,
    }
}
</script>

<style>
</style>