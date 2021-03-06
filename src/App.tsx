import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

/*  1. yarn add @types/react-router-dom // - Para instalar a biblioteca que faz o controle de rotas na nossa aplicação. 
    2. Geralmente colocamos as rotas da nossa aplicação no App.tsx */

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />
        {/* Dentro do Switch vão todas as minhas rotas que serão de fato alteradas.
    As rotas em nossa aplicação React.js são os caminhos das páginas da nossa aplicação.  */}
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            {/* Route é responsável por fazer a troca de cada componente pois, é ele que terá a rota de cada um, e dentro dele chamamos o componente "path" para representar o caminho do componente.*/}
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/tema'>
              <ListaTema />
            </Route>

            <Route path='/postagem'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>

            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>);
}

/* Caso dê erro ao rodar, tentar instalar também a biblioteca: yarn add react-router-dom  */
export default App;
