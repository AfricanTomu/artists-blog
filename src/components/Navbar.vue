<template>
  <header>
    <h1>Artist Blog 360</h1>
    <nav>
      <div class="links">
        <router-link :to="{ name: 'HomeView' }">Home</router-link>
        <router-link :to="{ name: 'CreateProfile' }">Create Profile</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

header h1 {
  color: #b9b6b6;
  font-size: 40px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
.links {
  margin-right: 30px;
}
</style>
