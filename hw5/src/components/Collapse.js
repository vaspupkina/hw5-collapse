import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import {v4} from "uuid";

function Collapse({id = v4(), collapsedLabel = "Развернуть", expandedLabel = "Свернуть", ...props}) {
    const [isExpanded, setExpanded] = useState(false);

    return (
    <>
        <p>
            <button onClick={() => setExpanded( (prev) => !prev)} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+id} aria-expanded="false" aria-controls={"collapse_"+id}>
                { isExpanded ? expandedLabel : collapsedLabel}
            </button>
        </p>
        <div className="collapse" id={"collapse_"+id}>
            <div className="card card-body">
                {props.children}
            </div>
        </div>    
    </>
    )
}

Collapse.propTypes = {
    id : PropTypes.string,
    collapsedLabel : PropTypes.string,
    expandedLabel : PropTypes.string
}

export default Collapse
