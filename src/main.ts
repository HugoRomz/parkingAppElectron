import { createApp } from "vue";
import "./Style.css";
import "preline/preline.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app").$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
  });
});

// Re-inicializa Preline después de cada navegación
router.afterEach(() => {
  // Espera al DOM actualizado
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).HSStaticMethods?.autoInit?.();
  }, 0);
});
