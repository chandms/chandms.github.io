import React from "react";
import { research } from "../data";
import CustCard from "./CustCard";
import Collapsible from 'react-collapsible';
import { ChartBarIcon} from "@heroicons/react/solid";

function OutlineCollapse(props){
  return (
    <div className="flex flex-col flex-wrap break-all">
    <div className="px-5 py-10 mx-auto text-center lg:px-40">
      <div>
      <h1 className="text-white title-font text-2xl">{props.title}</h1>
      <a href={props.project_doc} target="_blank" rel="noreferrer" className="mr-2 text-white title-font text-2xl hover:bg-blue-200 underline">{props.project_name}</a>
      </div>
    </div>
    <a href={props.location1_url} target="_blank" rel="noreferrer" className="text-center mx-auto underline text-black hover:bg-blue-200">{props.location1}</a>
    <br></br>
    <a href={props.location2_url} target="_blank" rel="noreferrer" className="text-center mx-auto underline text-black hover:bg-blue-200">{props.location2}</a>
    
    <p className="text-slate">{props.date}</p>
    <br></br>
    <p className="shadow-lg text-black">{props.description}</p>
    <br></br>
    <p className="shadow-lg text-black">{props.goal}</p>
    <br></br>
    </div>

  );
}

export default function ResearchProjects() {
  return (
    <section id="research" className=" title-font">
    <div className="px-5 py-10 mx-auto text-center lg:px-10">
    <div className="flex flex-col w-full mb-20 flex-wrap break-all overflow-hidden">
      <ChartBarIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
        Research Experience
      </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My ongoing and previous research experiences - 
        </p>
      </div>
      {research.map((project )=>(
    <div>
     <div className="bg-slate-300 rounded h-full items-center">
        <OutlineCollapse title={project.title} image={project.image} 
        width={project.width} height={project.height} 
        description={project.description} date={project.subtitle} location1={project.location1} location2={project.location2}
        location1_url={project.location1_url} location2_url={project.location_url2}
        goal={project.goal} project_doc={project.project_doc} project_name={project.project_name}/>
            
        <Collapsible trigger={<p className="w-max h-auto mx-auto text-center hover:bg-blue-400 rounded " >Expand &#8594;</p>}>
        <CustCard
              tech={project.tech}
              tools={project.tools}
              tasks={project.tasks}
               />
        <b>{project.github_link!=="" ? 
        <a target="_blank" rel="noreferrer" href={project.github_link} className="text-black underline hover:bg-indigo-700 break-all">GitHub Link</a>
        : <p></p>
        }
        </b>
        <div className="flex mx-auto flex-wrap">
            {
                project.images.map((image)=>{
                    return (
                        <img
                            className="mx-auto w-32 sm:w-32 md:w-64 lg:w-96"
                            src={image}
                            alt="Logo"
                            />
                    );
                })
            }
            
        </div>
        </Collapsible>
          </div>
      <br></br>
      </div>
      ))}
      

      
    </div>
    </section>
  );
}
