import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import CustCard from "./CustCard";
import Collapsible from 'react-collapsible';
// import { ArrowsExpandIcon} from "@heroicons/react/solid";

function OutlineCollapse(props){
  return (
    <div className="flex flex-col flex-wrap break-all">
    <div className="px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-row space-x-2 justify-around">
      <h1 className="  text-slate-500 font-mono text-2xl">{props.title}</h1>
      <div>
        <img
          className="w-16 md:w-32 lg:w-48"
          src={props.image}
          alt="Logo"
        />
      </div>
      </div>
    </div>
    <p className="text-slate">{props.location}</p>
    <p className="text-slate">{props.date}</p>
    <br></br>
    <p className="shadow-lg text-black">{props.description}</p>
    <br></br>
    <p className="shadow-lg text-black">{props.goal}</p>
    
    </div>

  );
}

export default function Projects() {
  return (
    <section id="projects" className="body-font ">
    <div className="px-5 py-10 mx-auto text-center lg:px-10">
    <div className="flex flex-col w-full flex-wrap break-all overflow-hidden">
      <CodeIcon className="mx-auto inline-block w-10" />
      <h1 className="sm:text-2xl text-3xl font-medium title-font">
        Software Engineering Experience
      </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-2">
            Following are my past software industry experiences - 
        </p>
      </div>
      {projects.map((project )=>(
    <div>
     <div className="bg-blue-100 rounded p-4 h-full items-center">
        <OutlineCollapse title={project.title} image={project.image} 
        width={project.width} height={project.height} 
        description={project.description} date={project.subtitle} location={project.location}
        goal={project.goal}/>
        <br></br>
        <Collapsible trigger={<p className="w-max h-auto mx-auto text-center hover:bg-blue-400 rounded ">Expand &#8594;</p>}>
        <CustCard
              tech={project.tech}
              tools={project.tools}
              tasks={project.tasks}
               />
        </Collapsible>
          </div>
      <br></br>
      </div>
      ))}
      

      
    </div>
    </section>
  );
}
