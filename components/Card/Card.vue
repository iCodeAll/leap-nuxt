<template>
  <div
    class="col-md-4 aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="card card-body">
      <div class="icon-round mb-3 mb-md-4 bg-primary">
        <img class="icon bg-primary" src="~assets/img/icons/theme/food/sushi.svg" data-inject-svg>
      </div>
      <h4>{{ title }}</h4>
      <p>
        {{ description }}
      </p>
      <a href="#">Learn More</a>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Card extends Vue {
    @Prop({ required: true }) readonly title!: string
    @Prop({ required: true }) readonly description!: string
    @Prop({ required: true }) readonly image!: string
}
</script>
