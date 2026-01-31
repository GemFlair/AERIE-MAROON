
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  tags: string[];
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}
