<!-- container de chacune des cartes de films -->
<template>
    <div class="container movies py-[32px] px-[16px]">
        <div  id="#movie-grid" class="movies-grid grid gap-x-[32px] gap-y-[64px] grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>


</style>