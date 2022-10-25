import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import iphone from './assets/iphone_mockup.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg width="56" height="56" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="49" cy="49" r="49" fill="black" />
              <circle cx="47.04" cy="47.04" r="47.04" fill="#F9EE2F" />
              <rect x="11.368" y="68.6" width="70.56" height="2.744" fill="black" />
              <path d="M56.84 69.7759C56.84 75.1883 52.4524 79.5759 47.04 79.5759C41.6276 79.5759 37.24 75.1883 37.24 69.7759C37.24 69.7759 41.6276 69.7759 47.04 69.7759C52.4524 69.7759 56.84 69.7759 56.84 69.7759Z" fill="black" />
              <rect x="44.296" y="74.48" width="4.704" height="19.6" fill="black" />
              <rect x="51.744" y="38.024" width="10.584" height="29.4" rx="5.292" fill="black" />
              <path d="M33.3199 49H42.7279V62.72C42.7279 65.3179 40.6219 67.424 38.0239 67.424C35.426 67.424 33.3199 65.3179 33.3199 62.72V49Z" fill="black" />
              <rect x="54.88" y="33.32" width="3.92" height="9.8" fill="black" />
            </svg>
            <span className="ml-3 text-xl">Hello Service</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Aplicativo</a>
            <a className="mr-5 hover:text-white">Opinião</a>

          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="text-black bg-[#F8ED31] body-font ">
        <div className="container mx-auto flex px-2 sm:py-10 md:py-20 sm:pt-15 md:flex-row flex-col items-center ">
          <div className="p-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              <div className="hidden lg:inline-block">Hello Service</div>
            </h1>
            <p className="mb-8 leading-relaxed">Servir mesas não é um trabalho fácil; você precisa de paciência, boas habilidades de comunicação e vontade de colocar as outras pessoas em primeiro lugar em todos os momentos. Felizmente, existem o Hello Service para facilitar. </p>
            <div className="flex lg:flex-row md:flex-col text-gray-300">
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">Download on the</span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
          <div className="max-w-lg w-full ">
            <img className=" align-middle first-letter:object-cover object-center rounded transform transition-all animate-fade-in-down max-w-[100%]" alt="hero" src={iphone} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font px-20">
        <div className="container px-2 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">O que nosso usuarios dizem?</h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Sem uma boa equipe de garçons, nenhum estabelecimento do setor alimentício conquista o sucesso.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://media.gazetadopovo.com.br/bomgourmet/2017/05/14753477-768x307-94ef43a0.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Tio da Churrascaria </span>
                    <span className="text-gray-500 text-sm">Garçom</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Eu trabalho para sustentar meu hobby. Então, se você me perguntasse qual eu escolheria, meu trabalho ou meu hobby, meu hobby tem prioridade.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://img.freepik.com/fotos-premium/vista-de-perfil-do-jovem-cozinheiro-indiano-pensando_251136-31960.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Itami</span>
                    <span className="text-gray-500 text-sm">Cozinheiro</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-black body-font bg-[#F8ED31] ">
        <div className="container  mx-auto flex flex-wrap">
          <div className="lg:w-3/5 w-full mb-10 lg:mb-0 overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src="https://www.casamagalhaes.com.br/blog/wp-content/uploads/2016/08/transforme-o-seu-garcom-em-um-vendedor-de-sucesso.png" />
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-left self-center py-10 px-10">
            <h1 className="title-font font-medium text-3xl text-gray-900 ">Por que contratar um garçom?</h1>
            <p className="leading-relaxed mt-4">A necessidade de novos funcionários pode afetar sua equipe existente e seus resultados. Uma ótima contratação de garçom pode ajudar sua empresa:
            </p>
            <ul className='list-disc px-4 py-2'>
              <li>Receber os pedidos dos clientes e transmiti-los à equipe da cozinha</li>
              <li>Sugerir itens de menu com base nos desejos dos clientes</li>
              <li>Oferecer sugestões aos clientes sobre opções de comida e vinho</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Como é o mercado de trabalho para Garçom?</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Este profissional está presente em bares, restaurantes, lanchonetes, buffets para eventos e diversos outros estabelecimentos de entretenimento que trabalham com a oferta de alimentos e bebidas para consumo no local. O Garçom precisa ser uma pessoa muito atenciosa, cortês, paciente, prestativa, ágil, organizada, flexível, com boa comunicação e desenvoltura e que goste de atuar com o atendimento direto ao público.</p>
          </div>

        </div>
      </section>
      <footer className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg width="50" height="50" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="49" cy="49" r="49" fill="black" />
              <circle cx="47.04" cy="47.04" r="47.04" fill="#F9EE2F" />
              <rect x="11.368" y="68.6" width="70.56" height="2.744" fill="black" />
              <path d="M56.84 69.7759C56.84 75.1883 52.4524 79.5759 47.04 79.5759C41.6276 79.5759 37.24 75.1883 37.24 69.7759C37.24 69.7759 41.6276 69.7759 47.04 69.7759C52.4524 69.7759 56.84 69.7759 56.84 69.7759Z" fill="black" />
              <rect x="44.296" y="74.48" width="4.704" height="19.6" fill="black" />
              <rect x="51.744" y="38.024" width="10.584" height="29.4" rx="5.292" fill="black" />
              <path d="M33.3199 49H42.7279V62.72C42.7279 65.3179 40.6219 67.424 38.0239 67.424C35.426 67.424 33.3199 65.3179 33.3199 62.72V49Z" fill="black" />
              <rect x="54.88" y="33.32" width="3.92" height="9.8" fill="black" />
            </svg>

            <span className="ml-3 text-xl color-white">Cadastre-se</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 BMWV Team

          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
