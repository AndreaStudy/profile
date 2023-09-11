import Image from "next/legacy/image";

type ProjectItem = {
  project: {
    id: string;
    cover: {
      file: {
        url: string;
      };
    };
    created_time: string;
    last_edited_time: string;
    properties: {
      [key: string]: any;
    };
    url: string;
  };
};

export default function ProjectItem({
  project: { cover, properties, url },
}: ProjectItem) {
  const title = properties["Name"]?.title[0]?.text?.content ?? "";
  const explain = properties["Description"]?.rich_text[0]?.plain_text ?? "";
  const coverImg = cover.file.url;
  const fTags = properties['Front Tag']?.multi_select
  const bTags = properties['Back Tag']?.multi_select
  const start = properties["WorkPeriod"]?.date?.start ?? "";
  const end = properties["WorkPeriod"]?.date?.end ?? "";
  const gitUrl = properties["GitHub"]?.url ?? "";
  const youtubeUrl = properties["Youtube"]?.url ?? "";

  const calculatedPeriod = (start: any, end: any) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    const startDate: any = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    const endDate: any = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result+1;
  };
  

  return (
    <div className="project-card">
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image className="rounded-t-xl" src={coverImg} alt="cover image" layout="fill" objectFit="contain" quality={100}></Image>
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{explain}</h3>
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        {gitUrl && <a href={gitUrl}>깃허브 바로가기</a>}
        {youtubeUrl && <a href={youtubeUrl}>시연영상 바로가기</a>}
        <div className="flex flex-wrap items-start mt-2 gap-2">
          {fTags.map((aTag:any) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}
          {bTags.map((aTag:any) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-orange-200 dark:bg-orange-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}
        </div>
      </div>
      
    </div>
  );
}
