import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import MainRoutes from './routes'

import './index.css'
import { store } from './store'

const queryClient = new QueryClient()

console.log(
  'Olá recrutador! 👀 Que bom te ver por aqui no console haha 😄 Espero que goste do meu site. Qualquer feedback é super bem-vindo!',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
