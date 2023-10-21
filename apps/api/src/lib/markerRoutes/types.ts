import type { Double, ObjectId } from 'mongodb';

export type MarkerRouteDTO = {
  name: string;
  description?: string;
  map?: string;
  userId: string;
  username: string;
  isPublic: boolean;
  isArchived: boolean;
  positions: [Double, Double][];
  texts?: {
    position: [Double, Double];
    text: string;
  }[];
  regions: string[];
  markersByType: {
    [type: string]: number;
  };
  favorites?: number;
  forks?: number;
  origin?: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  lastAccessedAt: Date;
};
