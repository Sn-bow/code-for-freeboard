export interface IFetchBoardCommentsEL {
  _id: string;
  writer: string;
  contents: string;
  rating: number;
  createdAt: string | Date;
}

export interface IBoardCommentListProps {
  data: {
    fetchBoardComments: IFetchBoardCommentsEL[];
  };
}
