import { paginateOrg } from '@/entities/organiztion/model/orgReducer';
import { IOrganization } from '@/entities/organiztion/types';
import { useDispatch, useSelector } from 'react-redux';

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
    <nav className='mt-5'>
      <ul className='inline-flex justify-between text-sm'>
        <li>
          <button
            onClick={previousHandler}
            className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'
          >
            Предыдущий
          </button>
        </li>
        <li>
          <button
            onClick={nextHandler}
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
          >
            Следующий
          </button>
        </li>
      </ul>
    </nav>
  );
};
