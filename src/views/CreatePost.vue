<template>
  <div class="container">
    <form>
      <label for="title" class="label__title">title</label>
      <input
        type="text"
        id="title"
        placeholder="Input Your Title"
        :title="title"
        class="input__title"
      />
      <label for="body" class="label__body">body</label>
      <textarea placeholder="Input Your Body" :body="body" class="input__body">
      </textarea>
      <label for="tags" class="label__tags">tags</label>
      <input
        type="text"
        placeholder="Input Your Tags"
        :tags="tags"
        class="input__tags"
      />
      <CreateButton name="create post" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import CreateButton from "@/components/buttons/MainButton.vue";

export default {
  name: "CreatePost",
  components: {
    CreateButton
  },
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);

    return { title, body, tags };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 40%;
  margin: 3% auto;

  form {
    display: block;

    label {
      @include label;
      margin-bottom: 8px;
    }
    input {
      margin-bottom: 8px;
      width: 65%;
      padding: 8px;
      border-radius: 5px;
    }
    textarea {
      width: 67%;
      border-radius: 5px;
      height: 150px;
    }
    button {
      @include label;
    }
  }
}
</style>
