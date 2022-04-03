<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href=" https://vuejs-templates.github.io/webpack"
          >Vue.js</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"></li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/"
                >Home
                <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services"
                >services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts"
                >contacts</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Others</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- <div class="name">
      <h1>WELCOME TO VUE.JS</h1>
      <h2>My Name is Daniel Joshua Tongol</h2> -->
    <div class="profile">
      <h1>Daniel Joshua D. Tongol</h1>
      <p><em> WEB DEVELOPER</em></p>
      <br />

      <p>
        Hi my name is Daniel im a College student in Holy Angel University,
        <br />
        My course is Bachelor of Science in Information Technology(BSIT).
      </p>
    </div>
    <div class="education">
      <h3>Education</h3>

      <ul>
        <li>
          <a href="#">Graduated at Angeles City National Trade School</a>
        </li>
        <li>
          <a href="#">Currently Studying at Holy Angel University</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
