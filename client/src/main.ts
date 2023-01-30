import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./index.css";

library.add(faXmark);

createApp(App)
	.use(router)
	// .use(VueAxios, axios)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
