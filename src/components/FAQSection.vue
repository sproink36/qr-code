<template>
  <div class="section">
    <div class="container section__container">
      <H2Title class="title">Популярные вопросы</H2Title>
      <div class="list">
        <FAQCard
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          :text="item.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import FAQCard from "./FAQCard.vue";
import H2Title from "./H2Title.vue";

const data = [
    {title: "Как создать QR-код?", text: "Создание QR-кода очень просто! Введите нужную информацию в&nbsp;наш генератор, настройте внешний вид (если требуется), и&nbsp;нажмите &laquo;Сохранить куаркод&raquo;. Готовый код можно скачать сразу в&nbsp;нескольких форматах."},
    {title: "Можно&nbsp;ли редактировать QR-код после его создания?", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus architecto quam asperiores impedit consectetur saepe temporibus doloremque vero, nemo animi commodi, possimus dolorem? Repellat excepturi labore totam consequuntur quis fugiat!"},
    {title: "Как собирать статистику по&nbsp;QR-кодам?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "Какие форматы для QR-кодов поддерживаются?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "Есть&nbsp;ли у&nbsp;вас браузерное расширение?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "Что делать, если я&nbsp;хочу добавить QR-код в&nbsp;свой дизайн в&nbsp;Figma?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "QR-код не&nbsp;работает или сканируется неправильно. Что делать?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "Можно&nbsp;ли персонализировать внешний вид QR-кода?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
    {title: "Как защитить QR-код паролем?", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquam repellendus! Ut quam atque nemo qui error delectus veritatis consequatur repellat maxime doloribus libero, omnis beatae placeat nobis enim reiciendis."},
]
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.section {
  width: 100%;
  @include media-queries.media-Xlarge {
    margin-bottom: 300px;
  }

  @include media-queries.media-large {
    margin-bottom: 120px;
  }
  @include media-queries.media-medium {
    margin-bottom: 80px;
  }
  @include media-queries.media-small {
    margin-bottom: 40px;
  }
}

.section__container {
  padding-top: 0;
}

.title {
  margin-bottom: 20px;
  text-align: left;
  @include media-queries.media-Xlarge {
    margin-bottom: 30px;
  }

  @include media-queries.media-large {
    margin-bottom: 50px;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include media-queries.media-small {
    gap: 10px;
  }
}
</style>
