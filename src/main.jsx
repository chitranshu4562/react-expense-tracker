import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {FilterContextProvider} from "./contexts/FilterContext.jsx";
import {ExpenseContextProvider} from "./contexts/ExpenseContext.jsx";

createRoot(document.getElementById('root')).render(
    <FilterContextProvider>
        <ExpenseContextProvider>
            <App />
        </ExpenseContextProvider>
    </FilterContextProvider>,
)
