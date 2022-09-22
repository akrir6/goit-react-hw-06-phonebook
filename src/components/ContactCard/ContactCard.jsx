import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contactsSlice";
import { Text, Button } from "./ContactCard.styled";

export const ContactCard = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type="button" onClick={()=>dispatch(removeContact(id))}>Delete</Button>
        </>
    )
}

ContactCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}