import { IQuery } from '../../../../commons/types/generated/types';
import { MouseEvent } from 'react';

export interface IBoardListUIType {
    data?: Pick<IQuery, "fetchBoards">,
    onClickMoveToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void,
    onClickMoveToBoardNew: () => void
}