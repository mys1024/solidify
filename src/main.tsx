import { render } from 'solid-js/web'
import App from '~/App'

import '@unocss/reset/tailwind.css'
import '~/styles/index.css'
import 'uno.css'

render(() => <App />, document.getElementById('root') as HTMLElement)
