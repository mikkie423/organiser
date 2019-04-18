<template>
  <div class="tags-input">
    <span v-for="tag in value" :key="tag" class="tags-input-tag">
      <span> {{ tag }} </span>
      <button type="button" class="tags-input-remove" @click="removeTag(tag)">
        &times;
      </button>
    </span>
    <input
      v-model="newTag"
      class="tags-input-text"
      placeholder="Add tag..."
      @keydown.enter.prevent="addTag"
      @keydown.delete="onBackspace"
    />
  </div>
</template>

<script>
export default {
  name: 'InputTags',

  props: {
    value: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      newTag: ''
    };
  },

  methods: {
    onBackspace(e) {
      console.debug('Backspace');
      if (this.newTag.length === 0) {
        e.preventDefault();
        this.$emit('input', this.value.slice(0, -1));
      }
    },

    addTag() {
      console.debug('Add tag: ' + this.newTag);
      if (this.newTag.length === 0 || this.value.includes(this.newTag)) {
        return;
      }
      this.$emit('input', [...this.value, this.newTag]);
      this.newTag = '';
    },

    removeTag(tag) {
      console.debug('Add tag: ' + tag);
      this.$emit('input', this.value.filter(t => t !== tag));
    },

    onInput(e) {
      this.newTag = e.target.value;
    }
  }
};
</script>

<style lang="scss">
.tags-input {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border: 0.25rem solid #dae4e9;
  padding: 0.5rem 1rem 0.25rem 0.5rem;
}
.tags-input-tag {
  display: inline-flex;
  align-items: center;
  background-color: #bcdefa;
  color: #103d60;
  border-radius: 0.25rem;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}
.tags-input-remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
  background: transparent;
  padding: 0;
  border: none;
}
.tags-input-remove:last-child {
  margin-left: 0.25rem;
}
.tags-input-text {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
  border: none;
}
</style>
