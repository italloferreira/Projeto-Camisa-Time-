import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Br from './pages/Brasileirao'
import Selecao from './pages/Selecao'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/brasileirao" element={ <Br /> }></Route>
                    <Route path="/selecao" element={ <Selecao /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes
