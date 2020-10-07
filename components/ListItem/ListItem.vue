<template>
  <div
    class="d-flex mb-4 aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay="NaN"
  >
    <div class="process-circle bg-primary" />
    <div class="ml-3">
      <h5>{{ title }}</h5>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class ListItem extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly description!: string
}
</script>
