import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col'>
                        <Budget/>
                    </div>    
                    <div className='col'>
                        <Remaining/>
                    </div>    
                    <div className='col'>
                        <ExpenseTotal/>
                    </div>
                    <div className='col-2'>
                        <Currency/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>       
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList/>
                    </div>                           
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col'>
                        <AllocationForm/>
                    </div>              
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
