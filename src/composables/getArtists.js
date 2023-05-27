 import { ref } from "vue"

 import { projectFirestore } from "@/firebase/config"
const getArtists = ()=>{
    const artists = ref([])
    const err = ref(null)

    const load = async()=>{
        try {
            const res = await projectFirestore.collection('artists')
                .orderBy('createdAt','desc')
                .get()
            artists.value = res.docs.map(doc=>{
                return { ...doc.data(), id:(doc).id }
            })
        } catch (error) {
           err.value = error.message
        }
    }
    return { artists, err, load }
}

export default getArtists