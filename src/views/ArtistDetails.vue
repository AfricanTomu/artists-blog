<template>
  <div v-if="err">
    {{ err }}
  </div>
  <div v-else-if="artist" class="artist">
    <h3>{{ artist.name }}</h3>
    <small
      ><p>
        <i>({{ artist.tagline }})</i>
      </p></small
    >
    <p>
      {{
        ` He has ${artist.SpotifyPlays} spotify plays and he has achieved this in only 1 yr`
      }}
    </p>
    <div class="pill" v-for="ganre in artist.ganre" :key="ganre">#{{ ganre }}</div>

    <br />

    <button class="homePage" @click="handleDelete">Delete Album</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getArtist from "../composables/getArtist";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted } from "vue";
import { projectFirestore } from "@/firebase/config";
export default defineComponent({
  name: "ArtistDetails",
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const route = useRoute(); //helps you to get infor about the param
    const router = useRouter();
    //  const { artist, err, load } = getArtist(props.id);
    //below is when you dont have the id on the props
    const { artist, err, load } = getArtist(route.params.id);
    onMounted(() => load());

    const handleDelete = () => {
      projectFirestore.collection("artists").doc(props.id).delete();
      router.push("/");
    };

    return { artist, err, handleDelete };
  },
});
</script>

<style>
.pill {
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

.homePage {
  display: felx;
  margin: 10px 10px 0 0;
  padding: 6px 12px;
  background: #060404;
  border-radius: 5px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #e5e0e0;
  cursor: pointer;
  margin-top: 40px;
}
</style>
