import { useMutation } from 'react-query'; // Import the necessary library for mutations
import { deleteStudentData } from '@/lib/deleteData';

const useDeleteStudent = () => {
  const mutation = useMutation(deleteStudentData);
  return { mutation };
};

export default useDeleteStudent;
