# Terceiro dia

- [x]  Limpando estrutura

    Foi retirado diversos arquivos e linhas de código desnecessárias, ficou dessa forma aqui:

    ![Terceiro%20dia%20d08937c230d04ab296f044c7eab9fa83/Screen_Shot_2020-03-25_at_10.58.53.png](Terceiro%20dia%20d08937c230d04ab296f044c7eab9fa83/Screen_Shot_2020-03-25_at_10.58.53.png)

    O index.html ficou dessa forma:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <title>Be The Hero</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

      </body>
    </html>
    ```

    O App.js:

    ```jsx
    import React from 'react';

    function App() {
      return (
        <h1> Hello World! </h1>
      );
    }

    export default App;
    ```

    E o index.js assim:

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    import App from './App';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```

- [x]  Conceitos do React

    No terminal, na pasta aulas/frontend, executar:

    ```powershell
    npm start
    ```

    - [x]  Componente

        É uma função que retorna XML (App.js), que é componente da index.js, que é chamada na index.html

    - [x]  JSX

        É o HTML preenchido dentro do JavaScript (JavaScript XML)

    - [x]  Propriedades

        Criamos o arquivo "Header.js" pqe vai ser utilizado em várias páginas e não em só 1

        ```jsx
        import React from 'react';

        export default function Header (props) {
            return(
                <header>
                    <h1>{props.title}</h1>
                </header>
            );
        }

        // { } chaves sao utilizadas para colocar código js
        // no HTML
        ```

        Atualizamos o arquivo App.js

        ```jsx
        import React from 'react';
        import Header from './Header'

        function App() {
          return (
            <Header title="Semana OmniStack"/>
          );
        }

        export default App;
        ```

        Se eu quiser tudo o que tiver dentro de uma propriedade, por exemplo

        ```jsx
        <Header>
        	teste123
        </Header>
        ```

        Posso utilizar dessa forma:

        ```jsx
        <h1>{props.children}</h1>
        ```

    - [x]  Estado

        O react não muda o estado por si só, ou seja, se fizermos um contador, a funcão irá atualizar o valor, porém não será atualizado na page, para isso importamos o {useState}

        ```jsx
        //app.js

        import React, {useState} from 'react';
        import Header from './Header'

        function App() {
          let count = useState(0)

          function increment(){
            count ++
        		console.log(count)
          }

          return (
            <div>
              <Header>Contador : {count}</Header>
              <button onClick={increment}>Incrementar</button>
            </div>
          );
        }

        export default App;
        ```

    - [x]  Imutabilidade

        Dentro do React, nós não podemos alterar uma variável de forma direta, é necessário sobrepor

        O useState retorna um array, com [valor, funcaoDeAtualizacao]

        ```jsx
        import React, {useState} from 'react';
        import Header from './Header'

        function App() {
          const [count,setCounter] = useState(0)
          // useState retorna array [valor, funcaoDeAtualizacao]

          function increment(){
            setCounter(count + 1)
          }

          return (
            <div>
              <Header>Contador : {count}</Header>
              <button onClick={increment}>Incrementar</button>
            </div>
          );
        }

        export default App;
        ```

- [x]  Página de login

    Colocamos a pasta Assets dentro de frontend/src/

    E criamos a pasta pages e seus arquivos

    Cmd + Shift + P

    → Preferences: Open Settings (JSON)

    Adicionar isso:

    ```jsx
    "emmet.syntaxProfiles": {"javascript": "jsx"},
    "emmet.includeLanguages" : {"javascript": "javascriptreact"}
    ```

    Agora no index.js

    Da pra colocar um 

    ```jsx
    div.logon-container

    // Que o VS Code automaticamente vai fazer isso:

    <div className="logon-container"></div>
    ```

    Para adicionar icones → Terminal:

    ```jsx
    nom install react-icons
    ```

    importar no arquivo: 

    ```jsx
    import { FiLogIn } from 'react-icons/fi'
    ```

    Criadas:

    Index.js (localhost:3000/)

    ```jsx
    import React from 'react'
    import {FiLogIn } from 'react-icons/fi'
     
    import './styles.css'

    import heroesImg from '../../assets/heroes.png'
    import logoImg  from '../../assets/logo.svg'

    export default function Logon(){
        return(
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero"/>

                    <form>
                        <h1>Faça seu Logon</h1>

                        <input placeholder = "Sua ID"/>
                        <button className="button" type="submit">Entrar</button>

                        <a href='/register'>
                            <FiLogIn size={16} color="#E02041"/>
                            Não tenho cadastro
                        </a>

                    </form>

                </section>

                <img src={heroesImg} alt="Heroes"/>
            </div>
        )
    }
    ```

    Style.css (localhost:3000/)

    ```jsx
    .logon-container{
        width: 100%;
        max-width: 1120px;
        height: 100vh;
        margin: 0 auto;

        display: flex;
        align-items: center; /*Alinha Vertical*/
        justify-items: center;
    }

    .logon-container section.form{
        width: 100%;
        max-width: 350px;
        margin-right: 506px;
    }

    .logon-container section.form form{
        margin-top: 100px;
    }

    .logon-container section.form form h1{
        font-size: 32px;
        margin-bottom: 32px;
    }
    .logon-container section.form form a{
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }

    .logon-container section.form form a svg{
        margin-right: 8px;
    }

    .logon-container section.form form a:hover{
        opacity: 0.8;
    }
    ```

    Global.css

    ```jsx
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font: 400 14px Roboto, sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;

    }

    input, button, textarea{
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid;
        border-radius: 8px;
        padding: 0 24px;
    }

    .button{
        width:100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: 0.2s;
    }

    .button:hover{
        filter: brightness(90%);
    }
    ```

    App.js

    ```jsx
    import React from 'react';
    import Logon from './pages/Logon'
    import './global.css'

    function App() {
      return (
        <Logon/>
      );
    }

    export default App;
    ```

- [x]  Configurando rotas

    Terminal →

    ```jsx
    npm install react-router-dom
    ```

    Criar na pasta raiz / aulas/frontend/src o arquivo Routes.js

    ```jsx
    import React from 'react'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'

    import Logon from './pages/Logon'

    export default function Routes(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Logon}/>
                </Switch>
            </BrowserRouter>
        )
    }
    ```

    Alterar no App.js:

    ```jsx
    import React from 'react';

    import './global.css'

    import Routes from './routes'

    function App() {
      return (
        <Routes/>
      );
    }

    export default App;
    ```

- [x]  Cadastro de ONGs

    Criar uma pasta dentro da pasta pages "Register" e seus arquivos index.js e styles.css

    index.js localhost:3000/register

    ```jsx
    import React from 'react'
    import {Link} from 'react-router-dom'
    import{FiArrowLeft} from 'react-icons/fi'

    import logoImg  from '../../assets/logo.svg'
    import './styles.css'

    export default function Register(){
        return (

            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Hero"/>

                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                        <Link className="back-link" to='/'>
                            <FiArrowLeft size={16} color="#E02041"/>
                            Não tenho cadastro
                        </Link>

                    </section>

                    <form>
                        <input placeholder= "Nome da ONG"/>
                        <input type="email" placeholder="E-mail"/>
                        <input placeholder="WhatsApp"/>
                        
                        <div className="input-group">
                            <input placeholder="Cidade"/>
                            <input placeholder="UF" style={{ width: 80 }}/>
                        </div>

                        <button className="button" type="submit">Cadastar</button>
                    </form>
                </div>
            </div>
        )
    }
    ```

    style.css localhost:3000/register

    ```css
    .register-container{
        width: 100%;
        max-width: 1120px;
        height: 100vh;
        margin: 0 auto;

        display: flex;
        align-items: center; /*Alinha Vertical*/
        justify-items: center;
    }

    .register-container .content{
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0,0,0,0.1);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .register-container .content section{
        width: 100%;
        max-width: 380px;
    }

    .register-container .content section h1{
        margin: 64px 0 32px ;
        font-size: 32px;
    }

    .register-container .content section p{
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    .register-container .content form{
        width: 90%;
        max-width: 450px;
    }

    .register-container .content form input{
        margin-top: 8px;
    }

    .register-container .content form .input-group{
        display: flex;
    }

    .register-container .content form .input-group input + input{
        margin-left: 8px;
    }
    ```

- [x]  Listagem de casos

    Criar uma pasta dentro da pasta pages "profile" e seus arquivos index.js e styles.css

    index.js localhost:3000/profile

    ```jsx
    import React from 'react'
    import logoImg from '../../assets/logo.svg'
    import {Link} from 'react-router-dom'
    import {FiPower,FiTrash2} from 'react-icons/fi'

    import './styles.css'

    export default function(){
        return (
            <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Be The Hero"/>
                    <span>Bem Vinda, APAD</span>

                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button">
                        <FiPower size={18} color="#E02041"/>
                    </button>
                </header>

                <h1>Casos cadastrados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>
                    
                </ul>

            </div>
        )
    }
    ```

    style.css localhost:3000/profile

    ```css
    .profile-container{
        width: 100%;
        max-width: 1180px;
        padding: 0 30px;
        margin: 32px auto;
    }

    .profile-container header{
        display: flex;
        align-items: center;

    }

    .profile-container header span {
        font-size: 20px;
        margin-left: 24px;
    }

    .profile-container header img{
        height: 64px;
    }

    .profile-container header a{
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    .profile-container header button{
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
    }

    .profile-container header button:hover{
        border-color: #999;

    }

    .profile-container h1{
        margin-top: 80px;
        margin-bottom: 24px;

    }

    .profile-container ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;
    }

    .profile-container ul li {
        background: #FFF;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    .profile-container ul li button{
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
    }

    .profile-container ul li button:hover{
        opacity: 80%;
    }

    .profile-container ul li strong{
        display: block;
        margin-bottom: 16px;
        color: #41414d;
    }

    .profile-container ul li p + strong{
        margin-top: 32px;
    }

    .profile-container ul li p{
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }
    ```

- [x]  Cadastro de um novo caso

    Criar uma pasta dentro da pasta pages "NewIncident" e seus arquivos index.js e styles.css

    index.js localhost:3000/incidents/new

    ```jsx
    import React from 'react'
    import {Link} from 'react-router-dom'
    import{FiArrowLeft} from 'react-icons/fi'

    import logoImg  from '../../assets/logo.svg'
    import './styles.css'

    export default function NewIncident(){
        return (
            <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Hero"/>

                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                        <Link className="back-link" to='/profile'>
                            <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para Home
                        </Link>

                    </section>

                    <form>
                        <input placeholder= "Título do Caso"/>
                        <textarea placeholder="Descrição"/>
                        <input placeholder="Valor em Reais"/>

                        <button className="button" type="submit">Cadastar</button>
                    </form>
                </div>
            </div>
        )
    }
    ```

    style.css localhost:3000/incidents/new

    ```css
    .new-incident-container{
        width: 100%;
        max-width: 1120px;
        height: 100vh;
        margin: 0 auto;

        display: flex;
        align-items: center; /*Alinha Vertical*/
        justify-items: center;
    }

    .new-incident-container .content{
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0,0,0,0.1);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .new-incident-container .content section{
        width: 100%;
        max-width: 380px;
    }

    .new-incident-container .content section h1{
        margin: 64px 0 32px ;
        font-size: 32px;
    }

    .new-incident-container .content section p{
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    .new-incident-container .content form{
        width: 90%;
        max-width: 450px;
    }

    .new-incident-container .content form input,
    .new-incident-container .content form textarea{
        margin-top: 8px;
    }
    ```

    Atualizar routes.js

    ```jsx
    import React from 'react'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'

    import Logon from './pages/Logon'
    import Register from './pages/Register'
    import Profile from './pages/Profile'
    import NewIncident from './pages/NewIncident'

    export default function Routes(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Logon}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/incidents/new" component={NewIncident}/>
                </Switch>
            </BrowserRouter>
        )
    }
    ```

    Atualizar global.css

    ```css
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font: 400 14px Roboto, sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;

    }

    input, button, textarea{
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea{
        width: 100%;
        resize: vertical;
        min-height: 140px;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
    }

    .button{
        width:100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: 0.2s;
    }

    .button:hover{
        filter: brightness(90%);
    }

    .back-link{
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }

    .back-link svg{
        margin-right: 8px;
    }

    .back-link:hover{
        opacity: 0.8;
    }
    ```

- [x]  Conectando aplicação à API

    Ir até a pasta Backend no terminal e dar um `npm start`

    Na paste de frontend no terminal, dar um `npm install axios`

    Dentro de src, criar uma pasta "Services" com arquivo api.js

    ```css
    import axios from 'axios'

    const api = axios.create({
        baseURL: 'http://localhost:3333'
    })

    export default api;
    ```

     

    Agora nos arquivos, impostar esse arquivo:

    Por exemplo, register (index.js)

    ```jsx
    import api from '../../services/api'

    //Colocar no arquivo:

    import React, {useState} from 'react'
    import {Link, useHistory} from 'react-router-dom'
    import{FiArrowLeft} from 'react-icons/fi'

    import api from '../../services/api'

    import logoImg  from '../../assets/logo.svg'
    import './styles.css'

    export default function Register(){

        const [name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [whatsapp,setWhatsapp] = useState('')
        const [city,setCity] = useState('')
        const [uf,setUf] = useState('')

        const history = useHistory()

        async function hadleRegister(e){
            e.preventDefault()

            const data ={
                name,
                email,
                whatsapp,
                city,
                uf,
            }

            try{
                const response = await api.post('ongs', data)
                alert(`Seu ID de acesso: ${response.data.id}`)
                history.push('/')

            }catch(err){
                alert('Erro no cadastro, tente novamente')
            }
        }

        return (

            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Hero"/>

                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                        <Link className="back-link" to='/'>
                            <FiArrowLeft size={16} color="#E02041"/>
                            Não tenho cadastro
                        </Link>

                    </section>

                    <form onSubmit={hadleRegister}>
                        <input placeholder= "Nome da ONG"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input placeholder="WhatsApp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />
                        
                        <div className="input-group">
                            <input placeholder="Cidade"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />

                            <input placeholder="UF" 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            style={{ width: 80 }}
                            />
                        </div>

                        <button className="button" type="submit">Cadastar</button>
                    </form>
                </div>
            </div>
        )
    }
    ```

- [x]  Enviar projeto ao GitHub