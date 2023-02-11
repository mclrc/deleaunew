<template>
  <footer>
    <hr />
    <div id="uls">
      <div>
        <ul>
          <li>Roland Deleau</li>
          <li>15, Place du Marché</li>
          <li>F-26170 Buis Les Baronnies</li>
          <li>+33 638 59 43 69</li>
          <li>+49 1575 3535 828</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://deleau-buis.com">Deleau-Buis Ferienwohnung</a>
          </li>
          <li>
            Seite entwickelt von <a href="https://moritzclc.me">Moritz</a>
          </li>
        </ul>
      </div>
    </div>
    <p id="copyright">©{{ new Date().getFullYear() }} Roland Deleau</p>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/style/vars.scss";

footer {
  font-size: 0.9em;
  font-family: Quicksand;
  max-width: $max-content-width;
  padding: 2rem $content-padding;
  display: block;
  margin: 0 auto;
}
hr {
  margin-bottom: 2rem;
}
ul {
  margin: 2 auto;
  padding: 0;
  list-style: none;
  color: $text-color;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
}
#copyright {
  text-align: center;
  margin: 1rem 0;
}

@media screen and (min-width: $breakpoint) {
  #uls {
    display: flex;
    > * {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    ul {
      display: inline-block;
      margin: 0 auto;
    }
    *:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
