import React from 'react'

const recipe = (props) => {
    //var list = props.skills;
    return (
        <div className="Recipe">
            <h3>{props.name}</h3>
            {/* <ul>
                {list.map(listitem => (
                    <li key={listitem}>{listitem}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default recipe;