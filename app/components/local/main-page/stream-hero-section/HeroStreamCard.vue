<template>
  <div class="hero-stream-card-main">
    <div class="stream-info-block">
      <div class="stream-title">Классика #1234</div>
      <div class="stream-info">
        <div class="stream-date">
          <div>12</div>
          <div>апреля</div>
        </div>
        <div class="stream-time">
          <div class="title">20:00</div>
          <div class="text">пятница</div>
        </div>
        <div class="stream-pay-info">
          <div class="title">1000Р</div>
          <div class="text">с команды</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
//1440 - 700 - 50%
.hero-stream-card-main {
  width: clamp(13rem, 0.703rem + 28.11vw, 26rem);
  height: clamp(12.375rem, 0.669rem + 26.76vw, 24.75rem);
  border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  opacity: 1;
  background: #33004c url("@/assets/img/hero/stream-card-bg-rd.png") no-repeat
    center center;
  //background-size: contain;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("@/assets/img/hero/stream-card-bg-rd.png") no-repeat center
      center;
    background-size: contain;
    opacity: 0.15;
    filter: blur(clamp(0.063rem, 0.003rem + 0.14vw, 0.125rem));
    border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  }
  .stream-info-block {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: clamp(4.875rem, 0.264rem + 10.54vw, 9.75rem);
    opacity: 1;
    gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    padding: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    z-index: 1;
    .stream-title {
      font-weight: 600;
      font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      letter-spacing: 0;
    }
    .stream-info {
      display: flex;
      width: clamp(11.5rem, 0.622rem + 24.86vw, 23rem);
      height: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem);
      opacity: 1;
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      .stream-date {
        font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem);
        width: clamp(2.75rem, 0.208rem + 5.81vw, 5.438rem);
        height: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem);
        border-radius: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.08);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .stream-time {
        font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem);
        width: clamp(3.875rem, 0.15rem + 8.51vw, 7.813rem);
        height: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem);
        opacity: 1;
        padding-top: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        padding-bottom: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        border-right-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .stream-pay-info {
        width: clamp(3.875rem, 0.15rem + 8.51vw, 7.813rem);
        height: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem);
        border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
        opacity: 1;
        font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem);
        padding: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem)
          clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
