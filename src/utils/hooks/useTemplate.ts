import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ITodo } from './app.interface';

async function fetchTemplate() {
  try {
    const { data } = await axios.get<ITodo>('/api/base', {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    });
    return data.socials;
  } catch (error) {
    return error;
  }
}

export const useTemplate = () => {
  return useQuery({
    queryKey: ['qet-template'],
    queryFn: () => fetchTemplate(),
  });
};
