import Table from '@/components/table/Table';
import AppLayout from '@/containers/navigation/AppLayout';
import { useAppSelector } from '@/states/hooks';
import { useTripColumns } from '@/usecases/trips/columns.trip';
import { useFetchTrips } from '@/usecases/trips/trip.hooks';

const TripsPage = () => {
  /**
   * STATE VARIABLES
   */
  const { tripsList } = useAppSelector((state) => state.trip);

  /**
   * FETCH TRIPS
   */
  const {
    tripsIsFetching,
    page,
    size,
    totalElements,
    totalPages,
    setPage,
    setSize,
  } = useFetchTrips();

  // TRIPS COLUMNS
  const { tripsColumns } = useTripColumns();

  return (
    <AppLayout>
      <main className="w-full flex flex-col gap-4">
        <section className="w-full flex flex-col gap-4">
          <Table
            columns={tripsColumns}
            data={tripsList}
            isLoading={tripsIsFetching}
            page={page}
            size={size}
            totalElements={totalElements}
            totalPages={totalPages}
            setPage={setPage}
            setSize={setSize}
          />
        </section>
      </main>
    </AppLayout>
  );
};

export default TripsPage;
