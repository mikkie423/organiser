<template>
  <div>
    <h1>Add new note!</h1>
    <form action="save" @submit.prevent="submit">
      <div class="input-group">
        <label for="title">Title: </label>
        <input id="title" v-model="note.title" type="text" name="title" />
      </div>

      <div class="input-group">
        <label for="content">Content: </label>
        <textarea
          id="content"
          v-model="note.content"
          type="text"
          name="content"
        ></textarea>
      </div>

      <div class="input-group">
        <label for="section">Section: </label>
        <select id="section" v-model="note.section" name="section">
          <option :value="0">Diary</option>
          <option :value="1">Planner</option>
          <option :value="2">BOS</option>
          <option :value="3">Jot-pad</option>
          <option :value="4">Almanac</option>
          <option :value="5">Todo</option>
          <option :value="6">Notebook</option>
        </select>
      </div>

      <div class="input-group">
        <label for="pinned">Pinned: </label>
        <input
          id="pinned"
          v-model="note.pinned"
          type="checkbox"
          name="pinned"
        />
      </div>

      <div class="input-group">
        <label for="tags">Tags: </label>
        <input-tags id="tags" v-model="note.tags"></input-tags>
      </div>

      <button type="submit">Save Note</button>
    </form>
  </div>
</template>

<script>
import InputTags from '@/components/forms/InputTags';

export default {
  components: { InputTags },
  data() {
    return {
      note: {
        title: '',
        content: '',
        section: 0,
        pinned: true,
        tags: []
      }
    };
  },
  mounted: function() {
    this.note.section = this.$route.query.section || 0;
  },
  methods: {
    async submit() {
      await this.$store.dispatch('notes/create', this.note);
      this.$router.push('/notes');
    }
  }
};
</script>

<style lang="css">
.input-group {
  padding: 12px;
}
.input-group label {
  display: block;
}
.input-group input {
  width: 250px;
}
.input-group textarea {
  width: 250px;
}
.input-group select {
  width: 250px;
}
</style>
