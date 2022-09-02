/* eslint-disable react/react-in-jsx-scope */
import { Pagination } from 'antd';

const TestPagination = () => {
  return (
    <>
      <div className='pagination-wrap'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  )
}

export default TestPagination;
