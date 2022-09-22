
import { ContactCard } from "components/ContactCard/ContactCard";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { List, ListItem } from "./ContactList.styled";

export const ContactList = () => {

    const normalizedFilter = useSelector(getFilter).toLowerCase();
    const contacts = useSelector(getContacts);
    const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(normalizedFilter));

    return (
        <List>
            {filteredContacts.map(({ id, name, number })=>(
            <ListItem key={id}>
                <ContactCard id={id} name={name} number={number}/>
            </ListItem>
            ))}
        </List>
    )

}

