<template>
  <div class="app-dropzone">

    <div class="preview-file" v-if="previewURL">
      <a :href="previewURL" target="_blank" class="file-link" rel="noopener">
        {{ $t('open_file') }}
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.5 0C4.0815 0 0.5 3.5815 0.5 8V22C0.5 26.4185 4.0815 30 8.5 30H17.5C21.9185 30 25.5 26.4185 25.5 22V9.3035C25.4999 8.75502 25.3871 8.21241 25.1684 7.70939C24.9498 7.20638 24.63 6.7537 24.229 6.3795L18.547 1.076C17.8063 0.384562 16.8308 2.49421e-06 15.8175 0H8.5ZM2.5 8C2.5 4.6865 5.1865 2 8.5 2H15.5V5C15.5 6.06087 15.9214 7.07828 16.6716 7.82843C17.4217 8.57857 18.4391 9 19.5 9H23.5V22C23.5 25.3135 20.8135 28 17.5 28H8.5C5.1865 28 2.5 25.3135 2.5 22V8ZM21.963 7L17.5 2.835V5C17.5 5.53043 17.7107 6.03914 18.0858 6.41421C18.4609 6.78929 18.9696 7 19.5 7H21.963Z"
            fill="black" />
        </svg>
      </a>
    </div>

    <div class="vue-dropzone dropzone dz-clickable" @click="openFileInput">
      <div class="dz-default dz-message">

        <div class="preview" v-if="previewImg && !previewURL" :class="fileTypeClass" style="border: 1px dashed #1D2939">
          <img v-if="isImage" alt="edmov" title="edmov" :src="previewImg"
            style="width: 102px; height: 102px; object-fit: contain" />
          <a v-else :href="previewImg" target="_blank" class="file-link" rel="noopener">
            {{ fileName }}
          </a>
        </div>

        <span v-if="!previewImg && !previewURL">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5 16C11.2348 16 10.9804 16.1054 10.7929 16.2929C10.6054 16.4804 10.5 16.7348 10.5 17C10.5 17.2652 10.6054 17.5196 10.7929 17.7071C10.9804 17.8946 11.2348 18 11.5 18H15V21.5C15 21.7652 15.1054 22.0196 15.2929 22.2071C15.4804 22.3946 15.7348 22.5 16 22.5C16.2652 22.5 16.5196 22.3946 16.7071 22.2071C16.8946 22.0196 17 21.7652 17 21.5V18H20.5C20.7652 18 21.0196 17.8946 21.2071 17.7071C21.3946 17.5196 21.5 17.2652 21.5 17C21.5 16.7348 21.3946 16.4804 21.2071 16.2929C21.0196 16.1054 20.7652 16 20.5 16H17V12.5C17 12.2348 16.8946 11.9804 16.7071 11.7929C16.5196 11.6054 16.2652 11.5 16 11.5C15.7348 11.5 15.4804 11.6054 15.2929 11.7929C15.1054 11.9804 15 12.2348 15 12.5V16H11.5Z"
              fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.5 1C7.0815 1 3.5 4.5815 3.5 9V23C3.5 27.4185 7.0815 31 11.5 31H20.5C24.9185 31 28.5 27.4185 28.5 23V10.3035C28.4999 9.75502 28.3871 9.21241 28.1684 8.70939C27.9498 8.20638 27.63 7.7537 27.229 7.3795L21.547 2.076C20.8063 1.38456 19.8308 1 18.8175 1H11.5ZM5.5 9C5.5 5.6865 8.1865 3 11.5 3H18.5V6C18.5 7.06087 18.9214 8.07828 19.6716 8.82843C20.4217 9.57857 21.4391 10 22.5 10H26.5V23C26.5 26.3135 23.8135 29 20.5 29H11.5C8.1865 29 5.5 26.3135 5.5 23V9ZM24.963 8L20.5 3.835V6C20.5 6.53043 20.7107 7.03914 21.0858 7.41421C21.4609 7.78929 21.9696 8 22.5 8H24.963Z"
              fill="black" />
          </svg>
          {{ options.text ?? $t('upload_document') }}
        </span>
      </div>
    </div>

    <input ref="fileInput" type="file" style="display: none;" @change="handleFileUpload"
      accept="image/*,application/pdf,.doc,.docx" />

    <div class="loading-overlay" v-if="loading">
      <span class="loader"></span>
    </div>

    <span class="text-danger text-sm">
      {{ error }}
    </span>
  </div>
</template>

<script>
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  props: {
    options: {
      required: true,
      type: Object
    },
    previewURL: String,
  },
  data() {
    return {
      loading: false,
      previewImg: null,
      fileTypeClass: '',
      isImage: false,
      fileName: '',
      error: null,

    }
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.fileName = file.name;
      this.isImage = file.type.startsWith('image/');

      this.previewImg = URL.createObjectURL(file);

      this.uploadFileToApi(file);
    },
    uploadFileToApi(file) {
      const formData = new FormData();
      formData.append(this.options.paramName, file);

      Object.entries(this.options.body).forEach(entry => {
        const [key, value] = entry;
        formData.append(key, value);
      });

      this.loading = true;
      this.$axios.$post(this.options.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          // console.log('File uploaded successfully:', response.result);
          this.$emit('success', response.result);
          this.previewImg = response.result.url;
        })
        .catch(error => {
          // console.error('Error uploading file:', error);
          this.error = error.response?.data?.message || 'An error occurred';
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>