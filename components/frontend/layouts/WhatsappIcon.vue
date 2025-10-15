<template>
  <div class="whatsapp-icon">
    <a href="https://wa.me/+905550448000" target="_blank" rel="noopener">
      <img src="/img/whatsapp.webp" alt="WhatsApp" title="WhatsApp" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
  },
  name: "WhatsappIcon",
};
</script>

<style scoped>
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 1000;
}

.whatsapp-icon img {
  width: 88%;
  height: 88%;
  /* border-radius: 50%; */
  /* box-shadow: 0 0 15px rgba(0, 255, 0, 0.8);  */
  animation: 1.5s infinite ease-in-out, bounce 2s infinite;
}

@keyframes glow {

  0%,
  100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }

  50% {
    box-shadow: 0 0 30px rgba(0, 255, 0, 1);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>