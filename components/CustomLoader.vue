<template>
  <div class="loader">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: 'CustomLoader'
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: inherit;
}
.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 4px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4265ed transparent transparent transparent;
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
