import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import CreateTopic from "./components/CreateTopic.vue";
import Message from "./components/Message.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/topics/:id",
      component: Topic
    },
    {
      path: "/user/:loginname",
      component: User
    },
    {
      path: "/topic/create",
      component: CreateTopic
    },
    {
      path: "/my/messages",
      component: Message
    }
  ],
  mode: "history"
});
