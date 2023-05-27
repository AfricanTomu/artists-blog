<template>
  <div class="home">
    <h2>Artist Profiles</h2>
    <div v-if="artists.length" class="layout">
      <ArtistList v-if="toggleInfor" :artists="artists" />
      <GanreTagCloud :artists="artists" />
      <!-- <button @click="toggleInfor = !toggleInfor">Toggle information</button> -->
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ArtistList from "../components/ArtistList.vue";
import getArtists from "../composables/getArtists";
import Spinner from "../components/Spinner.vue";
import GanreTagCloud from "@/components/GanreTagCloud.vue";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { ArtistList, Spinner, GanreTagCloud },
  setup() {
    //supporsed to pass this data as a prop to some child component
    const toggleInfor = ref(true);

    //registering the composable
    const { artists, err, load } = getArtists();
    onMounted(() => load());

    return { toggleInfor, err, artists };
  },
});
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
