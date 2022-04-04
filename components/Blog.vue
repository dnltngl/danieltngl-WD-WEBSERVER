<template>
  <div class="Blog">
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

    <section id="blog">
      <div class="blog-heading">
        <h3>My Blog</h3>
      </div>
      <div class="blog-container">
        <div class="blog-box">
          <div class="blog-text">
            <span>Web Design</span>
            <a href="#" class="blog-title">Effective and evolving design</a>
            <p>
              Have you ever clicked on a website and instantly got lost in the
              clutter of buttons, text and links? The impression your website
              makes directly reflects the competency of your business. A
              well-designed page is important for building trust and
              communicating value to potential customers. So, it’s best to
              always keep the user experience in mind when designing; elements
              like a compelling layout, whitespace, excellent copy and a
              thoughtful style guide will go far in grabbing and maintaining
              customer attention. A good balance in web design encourages a good
              experience for your customers.What’s more, responsive design is
              key: no matter the user’s screen size, platform or orientation, a
              great responsive website provides them with an optimal experience,
              every time. Regular, thorough market research will help you to
              consistently adapt and evolve your website to fit the
              ever-changing needs of your consumers remember, digital design is
              constantly expanding and so should your website.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-text">
            <span>Web Design</span>
            <a href="#" class="blog-title">Communicating your brand identity</a>
            <p>
              Your website plays a key part in building a consistent brand
              identity. Your logo, tagline, branded imagery and values should be
              obvious through the messaging of every page of the website.
              Accumulatively, your site should clearly answer “who” and “what”
              your brand is/does so that visitors get it within seconds!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-text">
            <span> Web Design</span>
            <a href="#" class="blog-title">Appealing to your audience</a>
            <p>
              The most important part of building a brand and website is keeping
              your target audience in mind. All design choices need to answer
              how you can best serve them and create a positive, memorable and
              unique experience for them. Without this, you won’t be able to
              stand up next to competitors. Use language and imagery that will
              appeal to them and reflect values they can relate to.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 1em;
  background: rgb(0, 0, 0, 0.1);
  height: 100vh;
  text-align: center;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
#blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.blog-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog-heading span {
  color: #f33c3c;
}
.blog-heading h3 {
  font-size: 2.4rem;
  color: #2b2b2b;
  font-weight: 600;
}
.blog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-wrap: wrap;
}

.blog-box {
  width: 350px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  margin: 20px 20px;
}
.blog-img {
  width: 100%;
  height: auto;
}
.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.blog-text {
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.blog-text span {
  color: #f33c3c;
  font-size: 0.9rem;
}
.blog-text .blog-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: #272727;
}
.blog-text p {
  color: #9b9b9b;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0px;
}
.blog-text a {
  color: #0f0f0f;
}
.blog-text a:hover {
  color: #c74242;
  transition: all ease 0.3s;
}

@media (max-width: 1250px) {
  .blog-box {
    width: 300px;
  }
}
@media (max-width: 1100px) {
  .blog-box {
    width: 70%;
  }
}

@media (max-width: 550px) {
  .blog-box {
    margin: 20px 10px;
    width: 100%;
  }
  #blog {
    padding: 20px;
  }
}
</style>
