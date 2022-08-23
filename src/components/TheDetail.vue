<template>
<div>
    <h4>상세페이지</h4>
    <h5>{{blog[$route.params.id].title}}</h5>
    <h5>{{blog[$route.params.id].content}}</h5>
    <h5>{{blog[$route.params.id].date}}</h5>
</div>
  
</template>

<script>
export default {
    name:'TheDetail',
    props:{
        blog:Array,
    }

}
</script>

<style>

</style>