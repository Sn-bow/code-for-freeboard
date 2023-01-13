import { MouseEvent, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IEventType {
  e: MouseEventHandler<HTMLButtonElement>;
  target: { id: string };
}

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  deleteClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  moveOnClickHandler: () => void;
  moveListHandler: () => void;
  likeUpHandler: () => void;
  dislikeUpHandler: () => void;
}
