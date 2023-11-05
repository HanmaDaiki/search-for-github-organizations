import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@shared/ui';
import { fetchOrg } from '@/entities/organiztion/model/orgReducer';
import { IOrganization } from '@/entities/organiztion/types';

export const SearchForm = () => {
  const [orgName, setOrgName] = useState('');
  const { error, name } = useSelector((state: { org: IOrganization }) => state.org);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(fetchOrg(orgName));
    setOrgName('');
  };

  useEffect(() => {
    if (!error) {
      if (name) {
        navigate(`/${name}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, error]);

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-end gap-2'>
      <Input
        formNoValidate={error}
        value={orgName}
        onChange={(event) => setOrgName(event.target.value)}
        placeholder='Название организации'
      />
      {error && <p className='text-red-500'>Организации не существует</p>}
      <Button type='submit'>Найти</Button>
    </form>
  );
};
