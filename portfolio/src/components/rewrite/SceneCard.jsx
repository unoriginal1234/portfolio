import Summary from "./Summary";

export default function SceneCard({scene}) {

    if (!scene) {
        return <div className="box">No scene data available.</div>;
    }

    if (!scene.title || !scene.summary || !scene.locations || !scene.characters ) {
        return <div className="box">Whoops! Incomplete scene data.</div>;
    }   
    
    return (   
        <div className="box">
            <p className="has-text-weight-bold has-text-centered">{scene.title}</p>
            {scene.characteristics && scene.characteristics.length > 0 && (
                    <>
                        <p className="has-text-centered">{scene.characteristics.join(" ")}</p>
                    </>
                )}
            <Summary sceneSummary={scene.summary} />
            <p className="has-text-weight-bold">Locations:</p>
                <Locations locations={scene.locations} />
            <p className="has-text-weight-bold">Characters:</p>
                <p>{scene.characters.join(", ")}</p>
            <PageLength pageLength={scene.pageLength} />
                
        </div>
        
    );

    function Locations ({locations}) {
        return (
            <ul>
                {locations.map((location, index) => (
                    <li className="is-size-7" key={index}>{location}</li>
                ))}
            </ul>
        )
    }
        

    function PageLength ({pageLength}) {

        if (pageLength <= 1) {
            return <p className="has-text-centered">{pageLength} pages</p>;
        }

        if (pageLength < 4) {
            return <p className="has-text-centered">{pageLength} pages</p>;
        }

        if (pageLength === 4) {
            return <p className="has-text-warning has-text-centered">{pageLength} pages</p>;
        }

        if (pageLength > 4) {
            return <p className="has-text-danger has-text-centered">{pageLength} pages</p>;
        }

    }
}