import Vue from 'vue';

import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

Vue.use(VueFileAgent);

Vue.prototype.$log = console.log;

export default Vue;