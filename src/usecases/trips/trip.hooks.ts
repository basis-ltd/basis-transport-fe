import { useLazyFetchTripsQuery } from '@/api/queries/apiQuerySlice';
import { useAppDispatch } from '@/states/hooks';
import { useEffect } from 'react';
import { usePagination } from '../common/pagination.hooks';
import { setTripsList } from '@/states/slices/tripSlice';

export const useFetchTrips = () => {
  /**
   * STATE VARIABLES
   */
  const dispatch = useAppDispatch();

  // PAGINATION
  const {
    page,
    size,
    setPage,
    setSize,
    totalElements,
    totalPages,
    setTotalElements,
    setTotalPages,
  } = usePagination();

  // MUTATION

  const [
    fetchTrips,
    {
      data: tripsData,
      isFetching: tripsIsFetching,
      isError: tripsIsError,
      isSuccess: tripsIsSuccess,
    },
  ] = useLazyFetchTripsQuery();

  // FETCH TRIPS
  useEffect(() => {
    fetchTrips({ page, size });
  }, [fetchTrips, page, size]);

  useEffect(() => {
    if (tripsIsSuccess) {
      setTotalElements(tripsData?.data?.totalElements);
      setTotalPages(tripsData?.data?.totalPages);
      dispatch(setTripsList(tripsData?.data?.rows));
    }
  }, [
    dispatch,
    setTotalElements,
    setTotalPages,
    tripsData?.data?.rows,
    tripsData?.data?.totalElements,
    tripsData?.data?.totalPages,
    tripsIsSuccess,
  ]);

  return {
    fetchTrips,
    tripsData,
    tripsIsFetching,
    tripsIsError,
    page,
    size,
    totalElements,
    totalPages,
    setPage,
    setSize,
  };
};
