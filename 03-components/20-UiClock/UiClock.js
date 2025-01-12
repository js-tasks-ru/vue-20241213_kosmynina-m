import { defineComponent,ref,onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    function getTime() {
      return new Date().toLocaleTimeString(navigator.language,{ timeStyle: 'medium' })
    }
    const time=ref(getTime())
    const interval=setInterval(() => {
      time.value = getTime()
    },1000)

    onUnmounted(() => clearInterval(interval))
    
    return {
        time
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
