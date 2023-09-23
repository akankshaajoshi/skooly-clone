import axios from 'axios';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'react-error-boundary';

const useFetchCourse = () => {
  async function fetchCourseData() {
    const response = await axios.get('http://localhost:8080/courses');
    return response.data;
  }
  const handleError = useErrorHandler();
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, error };
};

export default useFetchCourse;
