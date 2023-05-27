<template>
  <div class="create">
    <form @submit.prevent="handleCreateNewAlbum" autocomplete="off">
      <label> Album Artist: </label>
      <input type="text" v-model="name" required />
      <label>Album Name: </label>
      <input type="text" v-model="album" required />
      <label>Spotify plays: </label>
      <input type="text" v-model="SpotifyPlays" required />
      <textarea name="tagline" v-model="tagline" required></textarea>
      <label>Ganres</label>
      <input type="text" v-model="ganre" @keydown.enter.prevent="handleKeydown" />
      <div v-for="ganre in ganres" :key="ganre" class="pill">#{{ ganre }}</div>
      <button type="submit">Submit Album</button>
    </form>
  </div>
</template>
<script>
import { projectFirestore, timestamp } from "@/firebase/config";
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const name = ref("");
    const album = ref("");
    const SpotifyPlays = ref("");
    const tagline = ref("");
    const ganre = ref("");
    const ganres = ref([]);
    const router = useRouter();

    const handleKeydown = () => {
      if (!ganres.value.includes(ganre.value)) {
        ganre.value = ganre.value.replace(/\s/, ""); //removes all white space
        ganres.value.push(ganre.value);
      }
      ganre.value = "";
    };

    //submit data
    const handleCreateNewAlbum = async () => {
      const artistFormData = {
        name: name.value,
        album: album.value,
        SpotifyPlays: SpotifyPlays.value,
        tagline: tagline.value,
        ganre: ganres.value,
        createdAt: timestamp(),
      };
      /* submit form data*/
      try {
        // const response = await fetch("http://localhost:3000/artists", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(artistFormData),
        // });

        // if (!response.ok) {
        //   throw Error("We encountered some problem, will be back soon");
        // }
        const res = await projectFirestore.collection("artists").add(artistFormData);
      } catch (error) {
        console.log(error);
      }

      router.push({ name: "HomeView" });
    };
    return {
      ganre,
      ganres,
      handleKeydown,
      handleCreateNewAlbum,
      name,
      SpotifyPlays,
      tagline,
      album,
    };
  },
});
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #201d1a;
  color: white;
  border-radius: 80px;
  padding: 8px 16px;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
