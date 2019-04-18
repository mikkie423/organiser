<template>
  <article class="note" :class="noteClass">
    <div class="lines">
      <div class="pin-img">
        <img v-if="note.section === 0" src="@/assets/img/pins/pin-aqua.png" />
        <img v-if="note.section === 1" src="@/assets/img/pins/pin-blue.png" />
        <img v-if="note.section === 2" src="@/assets/img/pins/pin-purple.png" />
        <img v-if="note.section === 3" src="@/assets/img/pins/pin-yellow.png" />
        <img v-if="note.section === 4" src="@/assets/img/pins/pin-orange.png" />
        <img v-if="note.section === 5" src="@/assets/img/pins/pin-Lblue.png" />
        <img v-if="note.section === 6" src="@/assets/img/pins/pin-green.png" />
      </div>
      <div class="text">
        <h1 class="note-title">{{ note.title }}</h1>
        <span class="subtitle">{{ date }}</span>
        <p>{{ note.content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment';
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  computed: {
    date: function() {
      return moment(this.note.date).format('DD MMM YY');
    },
    noteClass: function() {
      switch (this.note.section) {
        case 0:
          return 'diary';
        case 1:
          return 'planner';
        case 2:
          return 'bos';
        case 3:
          return 'jot';
        case 4:
          return 'almanac';
        case 5:
          return 'todo';
        default:
          return 'notebook';
      }
    }
  }
};
</script>

<style lang="scss">
.note {
  flex-basis: content;
  // padding: 10px;
  box-shadow: 8px 8px 15px 5px #cccccc;
  -webkit-box-shadow: 5px 5px 10px 2px #375d96;
  overflow: visible;
  line-height: 1.3em;
  // font-size: 1.2em;
  h1 {
    font-size: 1.3em;
    margin: 0;
    padding: 0;
  }
  .subtitle {
    font-size: 1.3em;
    margin: 0;
  }
}

.diary {
  background: $paper;
}
.planner {
  background: red;
}
.bos {
  background: $parchment;
}
.jot {
  background: blue;
}
.almanac {
  background: silver;
}
.todo {
  background: yellow;
}
.notebook {
  background: repeating-linear-gradient(
    rgba(255, 255, 255, 1) 0em,
    rgba(255, 255, 255, 1) calc(1.3em - 1px),
    rgba(27, 144, 199, 0.938) 1.3em
  );
  box-shadow: 0px 0px 5px 0px #888;
  padding-left: 1em;
  height: 100%;
  .text {
    line-height: 1.3em;
    margin: 0px;
    padding: 0px;
  }
}

.pin-img {
  margin: 0 auto;
  width: 45px;
  height: 1.3em;
  position: relative;
  top: -1.3em;
}
</style>
