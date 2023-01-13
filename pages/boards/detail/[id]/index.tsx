// 63b96f951182750028ed0b24 -> test 용 _id

import BoardDetail from '../../../../src/components/units/board/detail/BoardDetail.container'
import BoardCommentList from '../../../../src/components/units/boardComment/list/BoardCommentList.container';
import BoardCommentWriter from '../../../../src/components/units/boardComment/writer/BoardCommentWriter.container';

const ProductDetailPage = () => {

    return (
        <>
            <BoardDetail />
            <BoardCommentWriter />
            <BoardCommentList />
        </>
    )
}

export default ProductDetailPage;