<template>
  <div class="artist">
    <router-link :to="{ name: 'ArtistDetails', params: { id: artist.id } }">
      <h3>{{ artist.name }}</h3>
    </router-link>
    <p>{{ `Has ${artist.album} album and their tagline is  ${shortTagline} ` }}</p>
    <span class="ganre" v-for="ganre in artist.ganre" :key="ganre" @click="handleGanre"
      >#{{ ganre }}</span
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { computed } from "vue";
export default defineComponent({
  name: "SingleArtist",
  props: ["artist"],
  setup(props) {
    const shortTagline = computed(() => {
      return props.artist.tagline.substring(0, 50) + "...";
    });

    const handleGanre = () => {};
    return { shortTagline, handleGanre };
  },
});
</script>

<style>
.ganre {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.artist {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.artist h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.artist h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.artist p {
  font-size: 16px; /* set a comfortable font size for reading */
  line-height: 1.5; /* use a line-height that is 1.5 times the font size for better legibility */
  color: #333; /* choose a readable text color */
  margin-bottom: 1em; /* add some space below the paragraph */
}
</style>
