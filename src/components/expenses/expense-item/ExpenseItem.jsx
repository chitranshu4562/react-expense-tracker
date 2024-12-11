import CircleIcon from '@mui/icons-material/Circle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {formatDate} from "../../../utils.js";
import classes from './ExpenseItem.module.css';

export default function ExpenseItem({ expense}) {
    return (
        <div className={classes.cardContainer}>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                    <CircleIcon
                        sx={{
                            fontSize: 15,
                        }}
                    />
                    <span>{expense.category}</span>
                </div>
                <div>
                    <i>{formatDate(expense.date)}</i>
                </div>
            </div>
            <div>
                {expense.description}
            </div>
            <div>
                Amount: <span><CurrencyRupeeIcon sx={{fontSize: '17px'}}/>{expense.amount}</span>
            </div>
        </div>
    )
}
