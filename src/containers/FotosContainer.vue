<template>
  <div class="fotos-container">
    <div class="thumb-control">
      <span id="thumb-control__left" @click="leftControl">left</span>
      <span id="thumb-control__right" @click="rightControl">Right</span>
    </div>
    <div class="fotos-container__thumb" v-if="imgs.length > 0">
      <foto-thumb v-for="img in imgs" :key="img.id" :src="img.thumbnailUrl" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FotoThumb from '../components/FotoThumb';

const { mapState, mapActions } = createNamespacedHelpers('main');
export default {
  name: 'fotos-container',
  data() {
    return {
      thumbIndex: 0,
      thumbContainer: '',
      fotoItem: '',
      thumbWidth: '',
      move: ''
    };
  },
  computed: {
    ...mapState(['imgs'])
  },
  components: {
    FotoThumb
  },
  methods: {
    constrolWithFotoItem() {
      // this.thumbContainer = document.getElementsByClassName('fotos-container');
      this.thumbContainer = document.getElementsByClassName(
        'fotos-container__thumb'
      );
      this.thumbWidth = this.thumbContainer[0].clientWidth / 4;
      setTimeout(() => {
        this.fotoItem = document.getElementsByClassName('foto-item');

        Array.from(this.fotoItem).map(ele => {
          ele.firstElementChild.setAttribute('width', `${this.thumbWidth}px`);
        });
      }, 100);
    },
    controlActive() {
      const fotoItem = document.getElementsByClassName('foto-item');
      Array.from(fotoItem).map(ele => ele.classList.remove('active'));
      fotoItem[this.thumbIndex].classList.toggle('active');
    },
    rightControl() {
      this.thumbIndex++;
      if (this.thumbIndex > this.fotoItem.length - 4) {
        this.thumbIndex = 0;
      }

      this.move = this.thumbWidth * this.thumbIndex;
      this.thumbContainer[0].style.marginLeft = `-${this.move}px`;
    },
    leftControl() {
      this.thumbIndex--;
      this.move = this.move - this.thumbWidth;

      if (this.thumbIndex <= 0) {
        this.thumbIndex = 0;
        this.move = 0;
      }

      this.thumbContainer[0].style.marginLeft = `-${this.move}px`;
      this.controlActive();
    }
  },
  updated() {
    this.constrolWithFotoItem();
  }
};
</script>

<style>
.fotos-container {
  /* max-width: 100%; */
  position: relative;
  overflow: hidden;
}
.fotos-container__thumb {
  display: flex;
  transition: ease;
}

#thumb-control__left {
  position: absolute;
  left: 0;
  cursor: pointer;
}
#thumb-control__right {
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>
