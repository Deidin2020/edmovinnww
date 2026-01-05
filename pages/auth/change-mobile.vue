<template>
  <div id="main-wrapper" class="main-wrapper">
    <div class="auth-section">
      <div class="container">
        <div class="row row--45 align-items-center">
          <div class="col-lg-5 col-md-12 margin-top--120">
            <FormChangeMobile />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
};
</script>
