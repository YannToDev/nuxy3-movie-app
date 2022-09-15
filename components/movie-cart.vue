<!-- cart contenant chaque film -->

<template>
    <div 
        v-for="movie in movies" 
        :key="movie.id" 
        class="movie relative flex flex-col "
    >
        <div class="movie-img relative overflow-hidden">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="block w-full h-full" alt="movie img">
            <p class="review absolute top-0 left-0 flex items-center justify-center w-[40px] h-[40px] bg-[#c92502] text-[#fff] rounded-br-[16px] shadow-md" >{{movie.vote_average}}</p>
            <p class="overview absolute b-0 p-[12px] text-[#fff] translate-y-full transition-all duration-[300] ease-in-out">{{movie.overview}}</p>
        </div>

        <div class="info mt-auto">
            <p class="title mt-[8px] text-[#FFF] text-xl">{{movie.title.slice(0,25)}} <span v-if="movie.title.length > 25">...</span></p>
            <p class="realse mt-[8px] text-[#c9c9c9]">
                Released :
                {{new Date(movie.release_date).
                toLocaleString('en-us',{
                        month:'long',
                         day:'numeric',
                        year:'numeric'
                })}}
            </p>
            <!-- <NuxtLink class="button button-light" :to="`/movies/` + movie.id">
                Get More infos
            </NuxtLink> -->
            <NuxtLink class= "button button-light mt-[8px]" :to="{name:'movies-moviesId', params:{moviesId:movie.id}}">
                Get More infos
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>

    const props = defineProps({

        movies:{
            type:Array
        }
    })
    
</script>

<style>

.movie-img:hover .overview {

    transform: translateY(0%)
}
</style>
