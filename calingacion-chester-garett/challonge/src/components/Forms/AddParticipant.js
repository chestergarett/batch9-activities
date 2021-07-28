import {useState} from 'react';
import {TextField} from '@material-ui/core';
import Select from 'react-select';

const AddParticipant = () => {

    const [formData, setFormData] = useState({})
    const submitHandler = () => {
        console.log(formData)
    }

    return (
        <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField  disabled 
                    value="Tournaments"
                    required
                    id="type" 
                    label="type" 
                    name="type"  
                    className={classes.items}
                    />
                    
                    <TextField 
                        required 
                        id="tournamentName" 
                        placeholder="Tournament Name" 
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, name: e.target.value})}
                        />
                    
                    <TextField 
                        required
                        id="url" 
                        label="URL" 
                        defaultValue={`${UNIQUE_ID}_${DUMMY_IDENTIFIER}`}
                        className={classes.items}
                        onChange={ (e) => setFormData({...formData, url: e.target.value})}
                    />

                    <Select
                            className={classes.items}
                            name="Tournament Type"
                            options={options}
                            onChange={dropdownHandler}
                            value={selectedOption}
                    />

                    <TextField
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        defaultValue="2021-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, starts_at: dateHelper(e.target.value)})}
                    />

                    <TextField
                        id="description"
                        label="Description"
                        placeholder="Describe Tournament here"
                        multiline
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, description: e.target.value})}
                    /> 

                    <Button type='submit'>Create Tournament</Button>
                </form> 
            </CenteredModal>
    )

}

export default AddParticipant;