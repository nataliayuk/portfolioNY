import { StrictMode } from 'react' //importa o componente StrictMode do React
import { createRoot } from 'react-dom/client' //traz a função createRoot da biblioteca de renderização do React
import './index.css' //importa o arquivo de estilos globais (será aplicado antes de qualquer componente React ser exibido)
import App from './App.tsx' //importa o componente raiz, que contém toda a estrutura de rotas, layout principal e os demais componentes filhos

createRoot(document.getElementById('root')!).render(
  //createRoot é uma função que cria um ponto de entrada para a renderização do React
  //document.getElementById('root')! seleciona o elemento HTML com o ID 'root' (o ponto de entrada da aplicação)
  //o ponto de exclamação (!) indica que o TypeScript deve tratar isso como um valor não nulo
  //render é um método que renderiza o componente React dentro do elemento selecionado
  <StrictMode>
    <App />
  </StrictMode>,
  //envolve o App com StrictMode, que ativa verificações adicionais e avisos para ajudar a identificar problemas potenciais no código
)

/*Em resumo: este arquivo pega o CSS global,
importa seu componente principal App,
inicializa o React no elemento #root da página
e renderiza o App dentro do modo estrito,
para ajudar no desenvolvimento.*/