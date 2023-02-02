import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

library.add(faXmark, faSpinner);

createApp(App)
	.use(router)
	.use(createPinia())
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
