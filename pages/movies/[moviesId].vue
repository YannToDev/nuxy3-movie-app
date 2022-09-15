<!-- page pour afficher le détail d'un film donné -->
<template>
    <Loading v-if="pending" />

    <div v-else class="container single-movie min-h-screen flex flex-col justify-center py-8 px-4 text-[#fff]">

       <NuxtLink @click="sendResetInput" class="button mb-8 self-start" :to="'/'">Back to home</NuxtLink>
        <div class="movie-info flex flex-col items-center gap-8 text-[#fff] md:flex-row md:items-start">

            <div class="movie-img">
                <img 
                    :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" 
                    alt="movie poster"
                    class="max-h-[500px] w-full lg:max-h-[700px]"
                >
            </div>
            <div class="movie-content">
                <h1 class="text-6xl font-normal">Title: {{movie.title}}</h1>
                <p class="movie-fact tagline mt-3 text-lg">
                    <span class="font-bold underline">Tagline:</span> <span class="italic">{{movie.tagline}}</span>
                </p>

                <p class="movie-fact mt-3 text-lg">
                    <span class="underline font-bold">Released:</span>
                        {{
                            new Date(movie.release_date).
                                toLocaleString('en-us',{
                                    month:'long',
                                    day:'numeric',
                                    year:'numeric'
                            })
                        }}
                    
                </p>

                <p class="movie-fact mt-3 text-lg">
                    <span class="underline font-bold">Duration:</span> {{movie.runtime}} minutes
                </p>

                <p class="movie-fact mt-3 text-lg">
                    <span class="underline font-bold">Revenue:</span>
                    {{
                        movie.revenue.toLocaleString('en-us',{

                            style:'currency',
                            currency:'USD'
                        })
                    }}
                </p>

                <p class="movie-fact mt-3 text-lg">
                    <span class="underline font-bold">Overview:</span> {{movie.overview}}
                </p>

            </div>

       </div>

    </div>
</template>

<script setup>

    // on récupère le router  pour accéder à l'id en paramètre
    const route = useRoute();

    // on réupère l'id du film pour le passer dans la requête
    const movieId = route.params.moviesId;

    // requête pour récupérer le film correspond à l'id
    const{data:movie,pending} = await useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=611257dfca9999e7774b223f4ce0322b&language=en-US`,{initialCache: false });
    

    // méta donnée pour afficher le titre de façon dynamique et définir une balise
    useHead({

        title:`${movie.value.title}`,

        meta:{

            hid:'description',
            name:'description',
            content:'Movie description with many informations'
        }
    })

    const emits = defineEmits(['reset-input']);

    const sendResetInput = ()=>{

        emits('reset-input')
    }

</script>


