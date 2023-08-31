// 프로젝트 목록 타입
export type Repo = {
  results: {
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
  }[];
};

// 프로젝트 내용 타입
export type ProjectItem = {
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
