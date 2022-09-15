<!-- composant pour afficher la bannière -->
<template>
    <div class="hero h-[400px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gray-100/10 ">
        <img class="w-full h-full object-cover" src="../assets/imgs/movieHero.jpg" alt="">

        <div class="text-container z-[99] absolute top-0 m-0 w-full h-full flex flex-col justify-center">
            
            <div class="text pt-0 pb-0 pl-[16px] pr-[16px] w-full ml-auto max-w-[1400px]">
                <span class="mini-heading font-semibold text-lg uppercase text-[#c92502] mb-2 md:text-[22px]">Now Streaming</span>
                <h1 class="text-white text-[64px] font-light m-2 md:text-[84px]"><span class="font-[500]">Now</span> Streaming</h1>
                <a href="#movie-grid" class="button text-xl self-start">View Movies</a>
            
            </div>  
        </div>

    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>