import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function ToDoitem({todo,removeTodo, toggleTodo}){
    
            const labelId = `checkbox-list-label-${todo.id}`;
            const tomggle = ()=>{
                toggleTodo(todo.id)
            }
            return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                      <ClearIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={tomggle}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.text} />
                  </ListItemButton>
                </ListItem>
              );
            
        }