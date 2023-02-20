import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name, 
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name, 
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><AiFillPlusCircle color="green" size='2em' onClick={e => increaseAllocation(props.name)}>+</AiFillPlusCircle></td>
            <td><AiFillMinusCircle color="red" size='2em' onClick={e => decreaseAllocation(props.name)}>-</AiFillMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
};

export default ExpenseItem;