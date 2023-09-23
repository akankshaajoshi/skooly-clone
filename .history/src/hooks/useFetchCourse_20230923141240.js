import axios from 'axios';
import { useQuery } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';

const fetchCourseData = async () => {
  const response = await axios.get('http://localhost:8080/courses');
  return response.data;
};

const useFetchCourse = () => {
  const { showBoundary } = useErrorBoundary();
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, error };
};

export default useFetchCourse;
