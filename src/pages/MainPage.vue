<script setup>
</script>

<template>
  <div class="container">

    <div class="content">

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
                src="data:image/jpeg;base64,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"
                class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://armyinform.com.ua/wp-content/uploads/2023/09/01_golovna-16.jpg" class="d-block w-100"
                 alt="...">
          </div>
          <div class="carousel-item">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIfF7tC5lTX-9F5vd_aikiorEwj34G2ujOAFP5_WV4NhSMUp7NgVgiKnqdx31F2ycpSs&usqp=CAU"
                class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="content">
        <h1>Історія</h1>

        <p>Оригінальний надпис, що планувалось вигравіювати на ордені, був «FOR BRAVERY» («ЗА СМІЛИВІСТЬ»), але пізніше
          був виправлений на «FOR VALOUR» («ЗА МУЖНІСТЬ») за порадою королеви Вікторії, котра вважала, що в першому
          випадку деякі люди можуть вирішити, що тільки здобувачі проявили сміливість у бою.
          <br>
          <br>

          Перша нагорода Хрестом Вікторії відбулась 26 червня 1857 року, за відвагу під час Кримської Війни 1854–1855
          рр. Усі ордени Хреста Вікторії виливаються із бронзи двох трофейних китайських гармат, захоплених у росіян під
          час облоги Севастополя. Деякі історики сумніваються, що ці гармати захоплені в Севастополі.
          <br>
          <br>

          Орден має форму мальтійського хреста, шириною 1,375 дюйму, із зображенням корони, увінчаної левом, та
          надписом. Стрічка кармазинного кольору, шириною 1,5 дюйми.
          <br>
          <br>

          Усього Хрест Вікторії вручався 1355 разів. Найбільше нагород за один день — 24 (16 листопада 1857 року) при
          звільненні міста Люкнов в Індії. По закінченні Другої світової війни орден вручався всього 12 разів. Чотири
          останні нагороди були розподілені так: дві — учасникам війни за Фолкленди, одну — за участь у другій Війні в
          затоці та одну — за участь в операції НАТО в Афганістані. Тільки троє людей отримали нагороду двічі. Друга
          нагорода має вигляд планки, почепленої на стрічці першої нагороди, та називається VC and Bar («Хрест із
          планкою»).
          <br>
          <br>
          Єдиним українцем, що отримав Хрест Вікторії, є Пилип Коновал (1917 р.).
          <br>
          <br>
          Хрестом Вікторії було, як виняток, нагороджено американського Невідомого солдата (як взаємність, британський
          Невідомий солдат був нагороджений американською Почесною Медаллю).
          <br>
          <br>
          Оскільки Хрестом Вікторії нагороджують за мужність «перед лицем ворога», вважається, що зміна характеру
          сучасної війни на більш технологічний матиме наслідком меншу кількість нагород.
          <br>
          <br>
          Хоча Австралія, Канада та Нова Зеландія впровадили власні системи нагород, Хрест Вікторії залишається найвищою
          військовою нагородою в цих країнах.</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

.container {
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 10vh 0 0 0;

}

.content {
  background-color: #ccaf89;
  padding: 5px 25px;
}

h1 {
  text-align: center;
}

section {
  margin-bottom: 20px;
}

h2 {
  color: #0066cc;
}

</style>