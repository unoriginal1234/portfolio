import SceneCard from "./SceneCard";
import { redHoneyData } from "../../content/redHoneyContent/redHoneyJson";
import Key from "./Key"
import LoginPage from "./LoginPage";


export default function RewritePage() {

  return (
    <div className="container">
      <LoginPage />
      <h1 className="title has-text-centered">Red Honey</h1>
      <Key />
      <div className="columns is-multiline is-centered">
        {
          redHoneyData.map((scene) => (
            <div key={scene.title} className="column is-3">
              <SceneCard scene={scene} />
            </div>
          ))
        }
      </div>
    </div>
  );
}