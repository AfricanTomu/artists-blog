<template>
  <div class="artist-style">
    <div v-for="artist in artists" :key="artist.id">
      <SingleArtist :artist="artist" />
    </div>
    <br />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SingleArtist from "./SingleArtist.vue";

export default defineComponent({
  name: "ArtistList",
  props: ["artists"],
  components: { SingleArtist },
  setup() {
    return {};
  },
});
</script>
