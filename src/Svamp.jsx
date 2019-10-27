import React ,{ Component } from "react"

class Projects extends Component {
  constructor() {
    super();
    this.state ={
      projects:[
        {
          "id":1,
          "name":"My Frist Website"
        },
        {
          "id":2,
          "name":"fizzbuzz"
        }
      ]
    };
  }

render() {
  const projects = this.state.projects
  let projectsList
  
  if (projects.length > 0){
    projectsList = projects.map(project =>{
      return(
        <div key={project.id}>
          <h3 className="ui header">
            {project.name}
          </h3>
        </div>
      )
    })
  }

  return (
    <div className="ui main container">
      <h1 className="ui header">Svamp</h1>
      {projectsList}
    </div>
  )
  }
};
export default Svamp