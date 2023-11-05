import { useDispatch, useSelector } from 'react-redux';
import { paginateOrg } from '@entities/organiztion/model/orgReducer';
import { IOrganization } from '@entities/organiztion/types';
import ArrowLeft from '@assets/left-arrow.svg?react';
import ArrowRight from '@assets/right-arrow.svg?react';

export const PaginationTable = () => {
  const { page, name } = useSelector((state: { org: IOrganization }) => state.org);

  const dispatch = useDispatch();

  const previousHandler = () => {
    dispatch(paginateOrg(name, page - 1 < 1 ? 1 : page - 1));
  };

  const nextHandler = () => {
    dispatch(paginateOrg(name, page + 1));
  };

  return (
    <nav className='flex mt-5'>
      <button
        onClick={previousHandler}
        className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'
      >
        <ArrowLeft width={20} />
      </button>
      <button
        onClick={nextHandler}
        className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
      >
        <ArrowRight width={20} />
      </button>
    </nav>
  );
};
