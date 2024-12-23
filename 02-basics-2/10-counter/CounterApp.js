import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let number=ref(0)
    return{
      number,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="number==0"
        @click="number--"
      >➖</button>

      <span class="count" data-testid="count">{{ number }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="number>4"
        @click="number++"
      >➕</button>
    </div>
  `,
})
