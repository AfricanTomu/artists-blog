<template>
  <div class="ganre-tags">
    <div v-if="err">{{ err }}</div>
    <div v-if="artists.length" class="layout">
      <!--uses the layout style in homeview, coz its not scoped -->
      <ArtistList :artists="artistWithGanre" />
      <GanreTagCloud :artists="artists" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import ArtistList from "@/components/ArtistList.vue";
import Spinner from "@/components/Spinner.vue";
import getArtists from "@/composables/getArtists";
import { computed } from "vue";
import { useRoute } from "vue-router";
import GanreTagCloud from "../components/GanreTagCloud.vue";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  components: { Spinner, ArtistList, GanreTagCloud },
  setup() {
    const route = useRoute();
    const { load, err, artists } = getArtists();
    onMounted(() => load());

    const artistWithGanre = computed(() => {
      return artists.value.filter((artistPost) => {
        return artistPost.ganre.includes(route.params.ganre);
      });
    });

    return { err, artists, artistWithGanre };
  },
});
</script>

<style>
.ganre-tags {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
