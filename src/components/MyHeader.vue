<script>

</script>

<template>
  <header>
    <ul>
      <li><a href="/">Головна</a></li>
      <li><a href="/people">Люди, що отримали нагороду</a></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  z-index: 1;

  height: 5vh;

  background-color: rgb(51, 74, 101);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  user-select: none;

  margin-top: 1vh;

  font-size: 24px;
  font-weight: bold;
}

a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: white;
}
</style>