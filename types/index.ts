export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type Catalog = { // Renamed from Item
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  id_name: string; // 品番 (e.g. A-001)
  main_image: MicroCMSImage;
  category: string[];
  description: string;
  recommend_point?: string;
  meta_description?: string;
};

export type Question = { // Renamed from QA
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  question: string;
  answer: string;
  category: string;
};

export type MicroCMSResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
