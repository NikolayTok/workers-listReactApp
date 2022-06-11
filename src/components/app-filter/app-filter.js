import "./app-filter.css";

const AppFilter = (props) => {
    const btns = [
        { name: 'moreThen1000', label: 'З/П больше 1000$' },
        { name: 'rise', label: 'На повышение' },
        { name: 'all', label: 'Все сотрудники' },
    ]
    const btnData = btns.map(({ name, label }) => {
        return (
            <button 
                type="button"
                className="btn btn-light"
                key={name}
                onClick={()=>props.btnTab(name)}
                id="all">
                    {label}
                
            </button>
        )
    })

    return (
        <div className="btn-group">
           {btnData}
        </div>
    )

}

export default AppFilter;