import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ workers, onDelete, onTogleProp }) => {

    const elements = workers.map(item => {
        const { id, ...itemProps } = item

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onTogleProp={(e) => onTogleProp(id, e.currentTarget.getAttribute('data-togle') )} />
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;