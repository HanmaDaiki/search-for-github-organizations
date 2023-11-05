import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PaginationTable } from '@features/paginationTable/ui/PaginationTable';
import { fetchOrg, setOrg } from '@entities/organiztion/model/orgReducer';
import { IOrganization } from '@entities/organiztion/types';

export const TableLayout = () => {
  const { error, name, repos } = useSelector((state: { org: IOrganization }) => state.org);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrg(`${params.organization}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      navigate('/');
      dispatch(setOrg({ name: '', repos: [], error: false, page: 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{name}</h1>
      <table className='table-fixed mt-5 w-full '>
        <thead className='text-xs sm:text-xl'>
          <tr className='border-2'>
            <th className='py-1 px-1 md:px-2 md:py-2'>Name</th>
            <th className='py-1 px-1 md:px-2 md:py-2'>Description</th>
            <th className='py-1 md:px-2 md:py-2'>Stars</th>
            <th className='py-1 md:px-2 md:py-2'>Language</th>
          </tr>
        </thead>
        <tbody className='text-xs sm:text-sm text-center'>
          {repos.map((repo) => (
            <tr key={repo.name} className='border-b'>
              <td className='py-1 px-1 md:px-2 md:py-2 text-left'>
                <a href={repo.html_url} target='_blank' className='font-semibold leading-6 text-gray-900'>
                  {repo.name}
                </a>
              </td>
              <td className='py-1 px-1 md:px-2 md:py-2'>
                <p className='max-w-sm flex-auto leading-6 text-gray-900 text-ellipsis overflow-hidden max-h-12'>
                  {repo.description}
                </p>
              </td>
              <td className='py-1 md:px-2 md:py-2 '>
                <p className='leading-6 text-gray-600'>{repo.stargazers_count}</p>
              </td>
              <td className='py-1 md:px-2 md:py-2'>
                <p className='leading-6 text-gray-600'>{repo.language}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationTable />
      <button
        className='absolute top-0 left-0 border p-1 m-1 text-sm rounded border-gray-300'
        onClick={() => {
          navigate('/');
          dispatch(setOrg({ name: '', repos: [], error: false, page: 1 }));
        }}
      >
        Назад
      </button>
    </>
  );
};
