import {createContext, useState} from "react";
import {EXPENSE_CATEGORY, expenseCategories} from "../constants.js";

const FilterContext = createContext();

const categoryFilterInitialValue = () => expenseCategories.map(category => {
    return {
        category, checked: false
    }
});

const FilterContextProvider = ({children}) => {
    const [filters, setFilters] = useState({
        expenseCategories: categoryFilterInitialValue(),
        searchInput: ''
    })

    const updateExpenseCategories = (obj) => {
        setFilters(prevState => {
            const temp = {...prevState};
            const index = temp.expenseCategories.findIndex(categoryObj => categoryObj.category === obj.category);
            if (index > -1) {
                temp.expenseCategories[index].checked = obj.checked;
            }
            return temp;
        })
    }

    const updateSearchInput = (searchInput) => {
        setFilters(prevState => {
            return {
                ...prevState, searchInput
            }
        })
    }

    const handleClearFilters = (identifier) => {
        if (identifier === EXPENSE_CATEGORY) {
            setFilters(prevState => {
                return {
                    ...prevState,
                    expenseCategories: categoryFilterInitialValue()                }
            })
        }
    }

    return (
        <FilterContext.Provider value={{filters, updateExpenseCategories, handleClearFilters, updateSearchInput}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterContext, FilterContextProvider};
