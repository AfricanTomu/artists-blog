import { projectFirestore } from "@/firebase/config"
import {ref} from "vue"

const getArtist = (id)=>{
    const artist = ref(null)
    const err = ref(null)

    const load = async ()=>{
        try {
            //get the data from firestore
            let res = await projectFirestore.collection('artists').doc(id).get()
            console.log(res)
            if(!res.exists){
                throw Error("this document does not exist")
            }
            artist.value = {...res.data(), id:res.id}
        } catch (error) {
            err.value = error.message
            console.log(err.value)
        }
    }
    return { artist, err, load}
}

export default getArtist