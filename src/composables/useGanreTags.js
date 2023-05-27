import {ref} from 'vue'

const useGanreTags = (artists)=>{
    const tags = ref([])
    const tagSet = new Set()

    artists.forEach(element => {
        element.ganre.forEach(ganreTag=>tagSet.add(ganreTag))
    });

    tags.value = [...tagSet]

    return { tags }
}
export default useGanreTags
