import ShowBlogs from './components/ShowBlogs.vue';
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import Editor from './components/Editor.vue'

export default[
  {path:"/",component:ShowBlogs},
  {path:"/add",component:AddBlog},
  {path:"/blog/:id",component:SingleBlog},
  {path:"/editor/:id",component:Editor},
]
