import { defineComponent,ref,computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let operand1=ref(0)
    let operand2=ref(0)
    let operator=ref('sum')
    let result= computed(() => {
      if(operator.value=='sum') return Number(operand1.value)+Number(operand2.value);
      if(operator.value=='subtract') return operand1.value-operand2.value;
      if(operator.value=='multiply') return operand1.value*operand2.value;
      if(operator.value=='divide') return operand1.value/operand2.value;
      return "error";
    })
    return{
      operand1,
      operand2,
      operator,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" :value="operand1" @input="operand1=$event.target.value"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" @input="operator='sum'"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" @input="operator='subtract'"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" @input="operator='multiply'"/>✖</label>
        <label><input type="radio" name="operator" value="divide" @input="operator='divide'"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" :value="operand2" @input="operand2=$event.target.value"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
