<template>
  <footer class="footer-rd">
    <Container>
      <div class="main-footer-block-rd">
        <ContactBlockRd />
        <FooterLinkBlockRD />
      </div>
    </Container>
  </footer>
</template>

<script setup>
import ContactBlockRd from "~/components/global/footer/ContactBlockRD.vue";
import Container from "~/components/global/wrappers/Container.vue";
import FooterLinkBlockRD from "~/components/global/footer/FooterLinkBlockRD.vue";
</script>

<style lang="scss">
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with($breakpoints: v.$breakpoints);

.footer-rd {
  width: 100%;
  border-top: 2px solid #542969;
}
.main-footer-block-rd {
  display: flex;
  padding: 48px 0;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  @include mq.mq($until: smallTablet) {
    display: none;
  }
}
</style>
