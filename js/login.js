const App = {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `fabio20token=${token};expires=${new Date(
            expired
          )}; path=/`;
          window.location = "product.html";
          user = {
            username: "",
            password: "",
          };
        })
        .catch((err) => {
          alert(輸入錯誤);
        });
    },
  },
};
Vue.createApp(App).mount("#app");
