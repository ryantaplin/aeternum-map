import type { Double } from 'mongodb';

export type MarkerDTO = {
  type: string;
  map?: string;
  position: [Double, Double, Double];
  name?: string;
  level?: number;
  chestType?: string;
  tier?: number;
  description?: string;
  userId?: string;
  username: string;
  screenshotFilename?: string;
  comments?: number;
  issues?: number;
  isPrivate?: boolean;
  updatedAt?: Date;
  createdAt: Date;
};
