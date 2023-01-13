import { ChangeEvent } from "react";

export interface ICreateBoardComment {
  createBoardCommentInput: ICreateBoardCommentInput;
  boardId: string | string[] | undefined;
}

export interface ICreateBoardCommentInput {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IBoardCommentWriterUIPropsType {
  user: string;
  password: string;
  contents: string;
  userChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  contentsChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  ConfirmHandler: () => void;
}
