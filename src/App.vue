<template>
  <div id="app">
    <nav
      class="flex items-center w-auto flex-wrap bg-blue-500 p-6 justify-center sm:flex sm:w-auto"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-5">
        <span class="font-semibold text-xl tracking-tight">
          Erik Dyrr Flooring</span
        >
      </div>
      <div
        class="w-full block flex-grow lg:flex lg:w-auto md:flex md:w-auto sm:flex sm:w-auto"
      >
        <div class="text-sm flex-grow ">
          <div
            class="block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white hover:teal-200 mr-4"
          >
            <router-link to="/">Home</router-link>
          </div>
          <div
            class=" block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-white hover:teal-200 mr-4"
          >
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </div>
      <div class="w-auto mr-5">
        <router-link
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white justify-end
            border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 sm:mt-0"
          to="/contact"
          >Contact</router-link
        >
      </div>
    </nav>
    <router-view />
    <nav class="flex items-center justify-center  bg-blue-500 p-2">
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
