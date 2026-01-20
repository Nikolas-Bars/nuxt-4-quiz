<template>
  <div class="question-card-main">
    <div class="question-image-block">
      <img src="@/assets/img/question-img-rd.png" />
    </div>
    <div class="question-content-block">
      <div class="question-text">
        Как зовут фиксика, изображённого на картинке?
      </div>
      <div class="question-variants">
        <div class="question-variant-item">Пупа</div>
        <div class="question-variant-item">Лупа</div>
        <div class="question-variant-item">Симка</div>
        <div class="question-variant-item">Шпуля</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
//1440 - 700 - 50%
.question-card-main {
  border-radius: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
  background: #fff;
  width: clamp(34.25rem, 1.851rem + 74.05vw, 68.5rem);
  display: flex;
  height: clamp(13.25rem, 0.716rem + 28.65vw, 26.5rem);
  align-items: center;
  align-content: center;
  gap: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  .question-image-block {
    margin-left: clamp(1rem, 0.054rem + 2.16vw, 2rem);
    width: clamp(11.25rem, 0.608rem + 24.32vw, 22.5rem);
    max-height: clamp(11.25rem, 0.608rem + 24.32vw, 22.5rem);
    flex-shrink: 0;
    img {
      width: 100%;
      height: auto;
    }
  }
  .question-content-block {
    display: flex;
    width: 100%;
    max-width: clamp(34.25rem, 1.851rem + 74.05vw, 68.5rem);
    padding: clamp(1rem, 0.054rem + 2.16vw, 2rem);
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 0.054rem + 2.16vw, 2rem);
    .question-text {
      color: var(--neutral---gray-800, #29272a);
      /* H3 */
      font-size: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      font-style: normal;
      font-weight: 600;
      line-height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem); /* 125% */
    }
    .question-variants {
      display: grid;
      height: clamp(4.25rem, 0.23rem + 9.19vw, 8.5rem);
      row-gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      column-gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      align-self: stretch;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      grid-template-columns: repeat(2, minmax(0, 1fr));
      .question-variant-item {
        display: flex;
        padding: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
        align-items: center;
        gap: clamp(0.313rem, 0.017rem + 0.68vw, 0.625rem);
        color: var(--neutral---gray-800, #29272a);
        font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
        font-style: normal;
        font-weight: 700;
        line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
        border-radius: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
        background: #f5f5f5;
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: #e0e0e0;
        }
      }
    }
  }
}
</style>
