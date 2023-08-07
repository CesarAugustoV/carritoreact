import './App.css'
import {
    NavBar
} from './componentes';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { CartProvider } from './state/cart.context';
import { ThemeProvider } from './state/Theme.context';
import { Cart } from './pages/Cart';




const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Details />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />} />
    </Route>
));



export function App() {

    return (
        <>
            <ThemeProvider>
                <CartProvider>
                    <RouterProvider router={routes} />
                </CartProvider>
            </ThemeProvider>
        </>

    );
}