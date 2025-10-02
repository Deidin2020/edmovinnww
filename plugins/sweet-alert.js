import Vue from 'vue'
import Swal from 'sweetalert2'

Vue.prototype.$swal = Swal

const dangerAlert = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const successAlert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const warningAlert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Vue.prototype.$dangerAlert = function (title) {
    dangerAlert.fire({
        icon: 'error',
        title: title,
    })
}

Vue.prototype.$successAlert = function (title) {
    successAlert.fire({
        icon: 'success',
        title: title,
    })
}

Vue.prototype.$warningAlert = function (title) {
    warningAlert.fire({
        icon: 'warning',
        title: title,
    })
}
