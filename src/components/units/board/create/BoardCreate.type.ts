import { ChangeEvent } from "react";

export interface IBoardCreateProps {
  isEdit: boolean;
}

export interface IBoardCreateValueState {
  user: string;
  password: string;
  title: string;
  content: string;
}

export interface IBoardCreateUI {
  boardStateChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  userError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  password?: string;
  user?: string;
  title?: string;
  content?: string;
  onClickUpdate: () => void;
  isEdit: boolean;
  cancleHandler: () => void;
  tesxtAreaStateChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  data: {
    fetchBoard: {
      writer: string;
      password: string;
      title: string;
      contents: string;
    };
  };
}

// myvariables 타입
export interface IMyvariables {
  updateBoardInput: IUpdateBoardInput;
  password: string;
  boardId: string;
}
export interface IUpdateBoardInput {
  title?: string | undefined;
  contents?: string | undefined;
}
