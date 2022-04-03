<template>
  <div class="contacts">
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
    <h1>My Contact Information</h1>

    <p>
      Phone Number:# <br />
      Email Address: <a href="#">tongoldanieljoshua24@gmail.com</a> <br />
    </p>
    <br />

    <h3>forms</h3>
    <form action="mailto:info@valorant.com" method="post" enctype="text/plain">
      <label for="name">Name:</label>
      <input type="name" /><br />
      <label for="name">Email:</label>
      <input type="email" /><br />
      <label for="">Your Message:</label><br />
      <textarea name="" id="" cols="20" rows="5"></textarea><br />
      <label for="email">Do you want a copy sent to your email?</label>
      <input type="checkbox" /><br />
      <input type="submit" />
    </form>

    <br />
  </div>
</template>
<script>
export default {
  name: "contacts"
};
</script>
