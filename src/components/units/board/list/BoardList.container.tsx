import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { IQuery } from '../../../../commons/types/generated/types';
import { MouseEvent } from 'react';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/detail/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI data={data} onClickMoveToBoardNew={onClickMoveToBoardNew} onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
