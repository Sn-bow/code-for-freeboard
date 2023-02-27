import {
    IBoardComment,
    IQuery,
} from "../../../../commons/types/generated/types"

export interface IFetchBoardCommentsEL {
    _id: string
    writer: string
    contents: string
    rating: number
    createdAt: string | Date
}

export interface IBoardCommentListProps {
    data?: Pick<IQuery, "fetchBoardComments">
    onLoadMore: () => void
}

export type IBoardCommentElementType = Partial<IBoardComment>
