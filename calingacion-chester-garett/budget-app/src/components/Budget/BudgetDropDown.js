import {useState} from 'react';
import {TextField, Card, Paper} from '@material-ui/core';
import onClickOutside from 'react-click-outside';


const BudgetDropDown = ({title, items =[], multiSelect=false}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    BudgetDropDown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item){
        if(!selection.some(current => current.id === item.id)){
            if(!multiSelect){
                console.log(item.id)
                setSelection([item]);
            } else if (multiSelect){
                setSelection([...selection, item]);
            }else{
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id !== item.id
                );
                setSelection([...selectionAfterRemoval])
            }
        }
    }

    function isItemInSelection(item){
        if (selection.find(current => current.id === item.id)){
            return true;
        }
        return false;
    }

    return(
        <Card>
            <div tabIndex={0} 
                role="button" 
                onKeyPress={() => toggle(!open)}
                onClick={()=>toggle(!open)}
            >
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{open ? 'Close': 'Add budget'}</p>
                </div>
            </div>
            {open && (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <button onClick={()=>handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{isItemInSelection(item) && 'Selected'}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => BudgetDropDown.handleClickOutside,
}
export default onClickOutside(BudgetDropDown, clickOutsideConfig);
