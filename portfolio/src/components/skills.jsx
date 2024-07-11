import SkillIcon from './skillIcon'
import skills from '../content/skillList'

export default function Skills () {

  return <div className="grid is-col-min-2">

      {skills.map((language, index) => {
        return <SkillIcon key={index} language={language} index={index} size={'large'}/>
      })}

  </div>
}


