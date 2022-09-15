<!-- page principal le '/' -->

<template>
    <div class="home">

        <!-- la bannière -->
        <Hero />

        <!-- input de recherche -->
        <search-input v-on:search-movie="searchMovies($event) "/>

        <!-- la grille de cartes affichant des films par défaut -->
        <movie-container v-if="inputSearch ===''">   
            <movie-cart 
                :movies = "movies"
            >
            </movie-cart>
        </movie-container>

        <!-- composant de chargement lorsque la requête est en cours -->
         <Loading v-if="pending" />

         <!-- la grille de films issue d'une recherche dans l'input -->
        <movie-container v-else>   
            <movie-cart 
                :movies = "moviesSearch"
                >
            </movie-cart>
        </movie-container>

    </div>
</template>

<script setup>


    // métadonnées pour le référencement
    useHead({

        title:'Movie App - Latest Streaming Movie Info',
        meta :[
            {   
                hid:'description',
                name:'description',
                content:'Get all the lastest streaming movies in theaters & online'
            },
            {   
                hid:'keywords',
                name:'keywords',
                content:'movies,stream, streaming'
            }
        ]
    })

    // pour récupérer la clée API définie dans nuxt.config 
    const config = useRuntimeConfig()

    const isLoading= ref(false);

    // ref pour récupérer la valeur de l'input
    const inputSearch = ref('');

    // réf pour récupérer le tableau des films recherchés
    const moviesSearch = ref([]);

    // tableau qui contient les films
    const movies = ref([]);

    // requête pour récupérer une liste de 20 films
    const {data,pending,error} = await useLazyFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.API_KEY}&language=en-US&page=1`, { initialCache: false });
   
    // on remplit le tableau movies avec chacun des films de la requête
    data.value.results.forEach(movie =>{

         movies.value.push(movie)
    })


    // méthode pour récupérer les données envoyé par le composant enfant
    const searchMovies = (dataEmit)=>{

        inputSearch.value = dataEmit.searchInput;

        moviesSearch.value =dataEmit.searchMovie   

        console.log(moviesSearch.value)

    }

    const ResetInput = ()=>{

        inputSearch.value = '';
        console.log('input reset')
    }
    
</script>

