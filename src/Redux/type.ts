export type Location = {
  lat: number;
  lng: number;
};

export type InfoPage = {
  name: string;
  routeName: string;
  content?: string;
  thumbnail: Media[];
  updatedAt: string;
};

export type Blog = {
  title: string;
  routeName: string;
  description?: string;
  thumbnail: Media[];
  createdUser: User;
  updatedUser: User;
  createdAt: Date;
};

export type Job = {
  _id: string;
  title: string;
  quantity: number;
  salary: string;
  description?: string | TrustedHTML;
  requirement?: string | TrustedHTML;
  type?: string;
  field?: string;
  position?: string;
  location?: string;
  createdUser: User;
  createdAt: Date;
};

export type Media = {
  url: string;
  name?: string;
  mediaType?: string;
};

export type ProductType = {
  name: string;
  stock?: number;
  price?: number;
  image?: Media[];
  barcode?: string;
};

export type Review = {
  name: string;
  avatar?: Media;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
};

export interface XeduErrorResponse {
  response: { data: { message: string } };
  message: string;
}

export type User = {
  _id?: string;
  name?: string;
  avatar?: Media;
  username?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  role?: 'shipper' | 'admin' | 'user' | 'shopper';
  token?: boolean | null | string;
  point?: number;
  withdrawable?: number;
};

export type EcomURL = {
  platform: string;
  url: string;
};

export type Product = {
  name: string;
  description: string;
  rating: number;
  thumbnail: Media[];
  category: string;
  category2: string;
  tags: string[];
  numOfReviews: number;
  productType: ProductType[];
  reviews: Review[];
  createdUser: User;
  createdAt: Date;
  ecomURL: EcomURL[];
};

export interface CartProduct {
  id: string;
  typeID: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export type RecruitForm = {
  jobID: string;
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  education: string;
  language: string;
  cv: Media | null;
};

export type Instruction = {
  title: string;
  name: string;
  routeName: string;
  description: string;
  steps: Step[];
  keywords: string[];
  createdBy: Partial<User>;
  createdAt: string;
  updatedAt: string;
  thumbnail?: Media;
};

export type Step = {
  title: string;
  description: string;
  image: Media;
};

export type CloudFlareClearImageVariant =
  | 'thumbnail'
  | 'public'
  | 'fullhd'
  | 'large960'
  | 'medium480';
export type CloudFlareBlurImageVariant = 'blurlg' | 'blurmd' | 'blursm';
export type CloudflareImageVariant = CloudFlareClearImageVariant | CloudFlareBlurImageVariant;
