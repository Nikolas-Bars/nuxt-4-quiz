<template>
  <div class="footer-link-block-rd">
    <div class="footer-link-block-rd__top">
      <div class="footer-link-block-rd__top__for-players">
        <div class="footer-link-block-rd__top__for-players__title">
          Для игроков
        </div>
        <div class="footer-link-block-rd__top__for-players__item">
          Приложение
        </div>
        <div class="footer-link-block-rd__top__for-players__item">
          Расписание игр
        </div>
        <div class="footer-link-block-rd__top__for-players__item">
          Хоум игры
        </div>
        <div class="footer-link-block-rd__top__for-players__item">Стримы</div>
        <div class="footer-link-block-rd__top__for-players__item">Рейтинг</div>
      </div>
      <div class="footer-link-block-rd__top__for-business">
        <div class="footer-link-block-rd__top__for-business__title">
          Для бизнеса
        </div>
        <div class="footer-link-block-rd__top__for-business__item">
          Заказать корпоратив
        </div>

        <div class="footer-link-block-rd__top__for-business__title">
          Вакансии
        </div>
        <div class="footer-link-block-rd__top__for-business__item">
          Стать автором
        </div>

        <div class="footer-link-block-rd__top__for-business__title">
          Партнёрам
        </div>
        <div class="footer-link-block-rd__top__for-business__item">
          Открыть франшизу
        </div>
      </div>
    </div>
    <div class="footer-link-block-rd__bottom">
      <a class="link-doc" target="_blank" href="/marketing-consent">
        Согласие на получение информационных и рекламных сообщений
      </a>
      <a class="link-doc" target="_blank" href="/personal-data-consent">
        Согласие на обработку персональных данных
      </a>
      <a class="link-doc" target="_blank" href="/privacy-policy">{{
        t("footer.politicPersonalDataPolicy")
      }}</a>
      <a class="link-doc" target="_blank" href="/rules">{{
        t("footer.politicUserAgreement")
      }}</a>
      <a class="link-doc" target="_blank" href="/public-offer">{{
        t("footer.public-offer")
      }}</a>
      <a class="link-doc" target="_blank" href="/requisites">{{
        t("footer.politicDetails")
      }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.footer-link-block-rd {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  padding: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem) 16px;
  width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
  height: clamp(14.25rem, 0.77rem + 30.81vw, 28.5rem);
  &__top {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
  }
  &__top__for-players {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    height: clamp(5.75rem, 0.311rem + 12.43vw, 11.5rem);
    &__title {
      color: #cca9df;
      font-style: normal;
      font-weight: 700;
      font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem);
      line-height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
    }
    &__item {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem);
      line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    }
  }
  &__top__for-business {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    gap: 8px;
    &__title {
      color: #cca9df;
      font-style: normal;
      font-weight: 700;
      font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem);
      line-height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
    }
    &__item {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem);
      line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    }
  }
  &__bottom {
    color: #cca9df;
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 500;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
    line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
    font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem);
  }
}
</style>
