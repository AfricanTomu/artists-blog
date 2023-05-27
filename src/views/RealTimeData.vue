<template>
  <div>
    <h1>Real Time Data</h1>
    <div v-for="artist in artists" :key="artist.id">
      <h3>{{ artist.name }}</h3>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/firebase/config";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const artists = ref([]);

    projectFirestore
      .collection("artists")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        artists.value = docs;
      });

    return { artists };
  },
});
</script>

<style scoped></style>
