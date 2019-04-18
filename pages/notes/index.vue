<template>
  <div>
    <overview></overview>
    <div class="pinboard">
      <note v-for="note in pinned" :key="note.id" :note="note"></note>
      <nuxt-link to="/notes/add">Add new Note</nuxt-link>
    </div>
  </div>
</template>

<script>
import Overview from '@/components/Overview';
import Note from '@/components/notes/Note';
import { mapGetters } from 'vuex';

export default {
  components: { Note, Overview },
  middleware: 'auth',
  computed: {
    ...mapGetters({
      pinned: 'notes/pinned'
    })
  },
  async fetch({ store }) {
    await store.dispatch('notes/fetchAll');
  },
  methods: {
    addNote(e) {
      this.$store.commit('notes/add', e.target.value);
    }
  }
};
</script>

<style lang="scss">
.pinboard {
  background-image: url('~assets/img/pinboard-bg.jpg');
  background: top center no-repeat fixed $pinboard;
  display: grid;
  padding: 10px;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
</style>
