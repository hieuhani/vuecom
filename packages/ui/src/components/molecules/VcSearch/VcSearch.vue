<template>
  <div class="vc-search">
    <vc-input class="vc-search__input" />
    <vc-button class="vc-search__button" variant="primary">Search</vc-button>
  </div>
</template>


<script lang="ts">
import { createComponent } from '@vue/composition-api'
import VcInput from '../../atoms/VcInput'
import VcButton from '../../atoms/VcButton'

export default createComponent({
  name: 'VcSearch',
  components: {
    VcInput,
    VcButton,
  },
})
</script>

<style lang="scss">
.vc-search {
  display: flex;
  flex-direction: row;
  &__input {
    .vc-input__input {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
  &__button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}
</style>
