import {useContext, useState} from 'react';
import clsx from 'clsx';
import { Paper, Card, TextField, Button, InputAdornment} from "@material-ui/core"
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {v4} from 'uuid';
import BudgetDropdown from './BudgetDropDown';

import BudgetContext from '../../store/budget-context.js'

import useStyles from './listStyles';


const initialState = {
    weekEnding: '2021-W28',
    Netflix: '0',
    Spotify: '0',
    Rent: '0',
    Breakfast: '0',
    Lunch: '0',
    Dinner: '0',
    Snacks: '0',
    Water: '0',
    Electricity: '0',
    Girlfriend: '0',
    Internet: '0',
    Load: '0',
    type: 'Budget',
}

const categories = [
    {id: v4(), value:'Netflix'},
    {id: v4(), value:'Spotify'},
    {id: v4(), value:'Rent'},
    {id: v4(), value:'Breakfast'},
    {id: v4(), value:'Lunch'},
    {id: v4(), value:'Dinner'},
    {id: v4(), value:'Snacks'},
    {id: v4(), value:'Water'},
    {id: v4(), value:'Electricity'},
    {id: v4(), value:'Girlfriend'},
    {id: v4(), value:'Internet'},
    {id: v4(), value:'Load'},
]

const BudgetForm = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);
    const {addBudget} = useContext(BudgetContext)

    const createBudget = () => {
       
        if(formData.weekEnding === '' || 
                (Number(formData.Netflix) === 0) || (Number(formData.Spotify) === 0) || (Number(formData.Rent) === 0) ||
                (Number(formData.Breakfast) === 0) || (Number(formData.Lunch) === 0) || (Number(formData.Dinner) === 0) ||
                (Number(formData.Snacks) === 0) || (Number(formData.Water) === 0) || (Number(formData.Electricity) === 0) ||
                (Number(formData.Girlfriend) === 0) || (Number(formData.Internet) === 0) || (Number(formData.Load) === 0)){
                    setFormData(initialState);
                    return;
        } 
        
        const budgetItem = {...formData, weekEndingText:formData.weekEnding, weekEnding:formData.weekEnding.split('-'), 
            id: v4(),
            Netflix: Number(formData.Netflix),
            Spotify: Number(formData.Spotify),
            Rent: Number(formData.Rent),
            Breakfast: Number(formData.Breakfast),
            Lunch: Number(formData.Lunch),
            Dinner: Number(formData.Dinner),    
            Snacks: Number(formData.Snacks),
            Water: Number(formData.Water),
            Electricity: Number(formData.Electricity),
            Girlfriend: Number(formData.Girlfriend),
            Internet: Number(formData.Internet),
            Load: Number(formData.Load),
        }

        console.log(budgetItem)
        addBudget(budgetItem);
        setFormData(initialState);
    }

    return (
        <Paper style={{display: 'flex', flexDirection: 'column', width: '30rem'}} elevation={0}>
            <BudgetDropdown title='Select' items={categories} multiSelect/>
            <Card style={{padding: '1rem', display: 'flex', justifyContent: 'center'}} elevation={0}>
                    <TextField 
                        id="WeekEnding"
                        type="week" 
                        label="Week" 
                        value={formData.weekEnding}
                        onChange={(e)=> setFormData({...formData, weekEnding: e.target.value})}
                    />
            </Card>
            <Card style={{padding: '1rem',display: 'flex'}} elevation={0}>
                <TextField
                    label="Netflix"
                    id="Netflix"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Netflix}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Netflix: e.target.value})}
                    />
                <TextField
                    label="Spotify"
                    id="Spotify"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Spotify}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Spotify: e.target.value})}
                    />
                <TextField
                    label="Rent"
                    id="Rent"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Rent}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Rent: e.target.value})}
                    />
            </Card>
            <Card style={{padding: '1rem',display: 'flex'}} elevation={0}>
                <TextField
                    label="Breakfast"
                    id="Breakfast"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Breakfast}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Breakfast: e.target.value})}
                    />
                <TextField
                    label="Lunch"
                    id="Lunch"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Lunch}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Lunch: e.target.value})}
                    />
                <TextField
                    label="Dinner"
                    id="Dinner"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Dinner}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Dinner: e.target.value})}
                    />
            </Card>
            <Card style={{padding: '1rem',display: 'flex'}} elevation={0}>
                <TextField
                    label="Snacks"
                    id="Snacks"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Snacks}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Snacks: e.target.value})}
                    />
                <TextField
                    label="Water"
                    id="Water"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Water}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Water: e.target.value})}
                    />
                <TextField
                    label="Electricity"
                    id="Electricity"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Electricity}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Electricity: e.target.value})}
                    />
            </Card>
            <Card style={{padding: '1rem',display: 'flex'}} elevation={0}>
                <TextField
                    label="Girlfriend"
                    id="Girlfriend"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Girlfriend}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Girlfriend: e.target.value})}
                    />
                <TextField
                    label="Internet"
                    id="Internet"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Internet}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Internet: e.target.value})}
                    />
                <TextField
                    label="Load"
                    id="Load"
                    type="number"
                    className={clsx(classes.margin, classes.textField)}
                    value={formData.Load}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    }}
                    onChange={(e)=> setFormData({...formData, Load: e.target.value})}
                    />
            </Card>
            <Card style={{padding: '1rem'}} elevation={0}>
                
                </Card>
                <Card style={{padding: '1rem', display: 'flex', justifyContent: 'center'}} elevation={0}>
                    <Button
                        variant="contained"
                        style={{backgroundColor: '#fada5f',color: 'black'}}
                        startIcon={<NoteAddIcon />}
                        type="submit"
                        onClick={createBudget}
                    >
                        Set Budget
                    </Button>
            </Card>
        </Paper>    
        )
}

export default BudgetForm;