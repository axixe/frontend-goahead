<template>
  <div class="loader">
    <div class="loader__wrapper">
      <div class="loader__element"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.loader {
  width: 100px;
  height: 100px;
  margin: 200px auto 0;
  background-color: transparent;
  @media screen and (max-width: 480px) {
    margin: 100px auto 0;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  &__element {
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: calc(50% - 10px);
      width: 20px;
      height: 20px;
      background-color: $color-white;
      animation: squaremove 1s ease-in-out infinite;
    }

    &:after {
      bottom: 0;
      animation-delay: -0.5s;
    }
  }
}

@keyframes squaremove {
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }

  25% {
    transform: translate(40px, 40px) rotate(45deg);
  }

  50% {
    transform: translate(0px, 80px) rotate(0deg);
  }

  75% {
    transform: translate(-40px, 40px) rotate(45deg);
  }
}
</style>
