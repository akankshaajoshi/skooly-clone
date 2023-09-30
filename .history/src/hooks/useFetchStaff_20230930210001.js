import { useQuery } from 'react-query';
import { fetchStaffData } from '@/lib/fetchData';

const useFetchStaff = () => {
  const {
    data: fakeStaffs,
    isLoading,
    isError,
    error,
  } = useQuery('staffData', fetchStaffData);
  return { fakeStaffs, isLoading, isError, error };
};

export default useFetchStaff;