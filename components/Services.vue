<template>
  <div class="services">
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
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link>
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
    <section class="service">
      <div class="s-heading">
        <h1>Ser<font color="#4a90e2">vic</font>es</h1>
        <p>We Provide The Best In Class Servies For Our Customers</p>
      </div>

      <div class="s-box-container">
        <div class="s-box">
          <div class="bar"></div>

          <h1>Spend Money</h1>

          <p>
            Track on your all daily expense and make your day to life easier.
          </p>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <h1>Set Budget</h1>

          <p>Make a Budget That Fit Right With You And Can Do Most With It</p>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <h1>Security</h1>

          <p>
            We Store All Card Info And Money Safe To Make You Relax And Crazy
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "services"
};
</script>

<style>
.service {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.s-heading {
  text-align: center;
}
.s-heading h1 {
  color: #576975;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0px;
}
.s-heading p {
  color: rgba(87, 105, 117, 0.6);
  font-size: 1rem;
  margin: 5px;
  text-align: center;
}
.s-box-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.s-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  padding: 20px 25px;
  height: 400px;
  box-sizing: border-box;
  margin: 30px;
  position: relative;
}
.s-box h1 {
  color: #576975;
  letter-spacing: 1px;
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.s-box p {
  color: rgba(87, 105, 117, 0.9);
  text-align: center;
}
.s-btn {
  width: 140px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgba(74, 144, 226, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #576975;
  margin-top: 10px;
}
.bar {
  width: 100px;
  height: 6px;
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  background-color: #4a90e2;
  border-radius: 0px 0px 10px 10px;
  display: none;
  animation: bar 0.5s;
}
.s-box:hover {
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.08);
  transition: all ease 0.3s;
}
.s-btn:hover {
  background-color: #4a90e2;
  border: 1px solid #4a90e2;
  color: #ffffff;
  transition: all ease 0.3s;
}
.s-box:hover .bar {
  display: block;
}
@keyframes bar {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@media (max-width: 1050px) {
  .s-box-container {
    flex-wrap: wrap;
  }
  .services {
    height: auto;
  }
  .s-heading {
    margin: 15px;
  }
  .s-box {
    flex-grow: 1;
  }
}
</style>
