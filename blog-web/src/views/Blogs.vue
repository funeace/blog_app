<template>
  <div>
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
        <AddBlog />
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <!-- railsのeach文 -->
          <tr v-for="blog in blogs" :key = "blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.body }}</td>
            <td><router-link :to="{name: 'show-blog', params: { id: blog.id }}">show</router-link></td>
            <td><router-link :to="{name: 'edit-blog', params: { id: blog.id }}">Edit</router-link></td>
            <td><span class="button_link" @click="deleteBlog(blog)">[Delete]</span></td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddBlog from './AddBlog'

export default {
  components: {
    AddBlog
  },
  computed: {
    ...mapState(['blogs'])
  },
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    onSubmit() {
    },
    deleteBlog(blog){
      this.$store.dispatch('deleteBlog', blog)
    }
  }
}
</script> 

<style scoped>
.button_link {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>