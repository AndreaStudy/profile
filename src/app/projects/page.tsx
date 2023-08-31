import { DATABASE_ID, TOKEN } from "@/config";
import ProjectItem from "@/app/components/projects/projectItem";
import { Repo } from "@/types/types";


export default async function Projects() {
  
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const repo = await res.json();

  const projects = [...repo.results]

  projects.sort((a, b) => {
    const startA = new Date(a.properties["WorkPeriod"].date.start).getTime();
    const startB = new Date(b.properties["WorkPeriod"].date.start).getTime();
    return startA - startB;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
      <h1 className="text-4xl font-bold sm:text-6xl">
        프로젝트 수 :
        <span className="pl-4 text-blue-500">{projects.length}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 m-4">
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
