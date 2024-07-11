import SkillIcon from './skillIcon'

export default function SkillMessage({discipline, skills}) {
  return <>
    <article className="box">

        <div className="content is-size-6">
        {discipline}
        </div>

        <div className="grid is-col-min-1">

        {skills.map((language, index) => {
          return <SkillIcon key={index} language={language} index={index} size={'medium'}/>
        })}

        </div>


    </article>
  </>
}