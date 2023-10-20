/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetAuction = () => {
  return useQuery({
    queryKey: ['action'],
    queryFn: async () => {
      const res = await axiosInstance.get('/auction');
      return res;
    },
  });
};
export default useGetAuction;
