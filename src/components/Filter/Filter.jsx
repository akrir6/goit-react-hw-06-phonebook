
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import { Label, Input } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const onChangeFilter = e => dispatch(setFilter(e.currentTarget.value));
    
    return (
        <Label>Find contacts by name
            <Input type="text" name="filter" value={useSelector(getFilter)} onChange={onChangeFilter} />
        </Label>
    )
}

