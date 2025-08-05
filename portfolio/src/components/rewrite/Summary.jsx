import {useState} from "react";

export default function Summary ({sceneSummary}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="container">
            <SceneSummary sceneSummary={sceneSummary} />
            <button className="button is-small" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show Less" : "Show More"}
            </button>
        </div>
    );  

    function SceneSummary({sceneSummary}) {

        if (sceneSummary.length < 50) {
            return <p>{sceneSummary}</p>;
        }

        if (!expanded){
            return <p>{sceneSummary.slice(0, 50)}...</p>;
        }

        return <p>{sceneSummary}</p>;
        
    }
}