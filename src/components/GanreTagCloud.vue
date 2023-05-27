<template>
  <div class="ganre-tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Ganre', params: { ganre: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useGanreTags from "../composables/useGanreTags";

export default defineComponent({
  props: ["artists"],
  setup(props) {
    const { tags } = useGanreTags(props.artists);

    return { tags };
  },
});
</script>

<style>
.ganre-tag-cloud {
  padding: 10px;
}
.ganre-tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}

.ganre-tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.ganre-tag-cloud a {
  color: #807d7d;
  text-decoration: none;
}
.ganre-tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
