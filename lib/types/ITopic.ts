import { ObjectId } from 'mongodb';

export interface TestData {
  _id: string;
  topic: string;
  question: string;
  answered: number;
  thumbsDown: number;
  thumbsUp: number;
}