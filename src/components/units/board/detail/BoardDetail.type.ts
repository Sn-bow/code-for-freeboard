import { MouseEventHandler } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IEventType {
    e: MouseEventHandler<HTMLButtonElement>
    target: { id: string },
}

export interface IBoardDetailUIProps {
    data?: Pick<IQuery, "fetchBoard">,
    deleteClickHandler: any,
    moveOnClickHandler: () => void,
    moveListHandler: () => void
}