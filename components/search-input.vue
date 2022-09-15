<template>
   <div class="container search flex py-8 px-4">             
        <input 
            type="text"
            placeholder = "Search a movie"
            v-model.lazy="searchInput"
            @keyup.enter="searchedMovies"
            class="max-w-[350px] w-full py-3 px-2 text-[14px] border-none rounded-md
            hover:outline-none focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
        <button 
            v-show="searchInput !== ''"
            @click="cleanSearch"
            class="button rounded-l-[0px] "
        >
           Clear Search
            
        </button>
    </div>
</template>

<script setup>

    // emits pour envoyer les données au parent
    const emits = defineEmits(["search-movie"])

    // pour afficher une notification
    const { $toast } = useNuxtApp();

    // tableau pour les films recherché via l'input
    const searchedMovie = ref([]);

    // référence pour l'input
    const searchInput = ref('');

     // méthode pour lancer une requete qui cherche les films correspondant à l'input
     const searchedMovies = async()=>{
        
        const {data:dataInput,error} = await useLazyFetch(`https://api.themoviedb.org/3/search/movie?api_key=611257dfca9999e7774b223f4ce0322b&language=en-US&page=1&query=${searchInput.value}`,{ initialCache:false});
        
        if(dataInput.value.results.length === 0){

            console.log('film inconnue')

            $toast.error('Film inconnue!')

            
        }


        dataInput.value.results.forEach(movie =>{

            searchedMovie.value.push(movie)
        })

        emits('search-movie',{searchMovie:searchedMovie.value, searchInput:searchInput.value})
    }


 
    // méthode pour reset l'input et le tableau de recherche
    const cleanSearch = () =>{

        searchInput.value = '';
        searchedMovie.value = []

        emits('search-movie',{searchMovie:searchedMovie.value, searchInput:searchInput.value});
        console.log(searchedMovie.value)

    }

</script>

