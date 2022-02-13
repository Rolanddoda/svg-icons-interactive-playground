import { Quasar } from 'quasar'
import { app } from './main-app'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

app.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})
