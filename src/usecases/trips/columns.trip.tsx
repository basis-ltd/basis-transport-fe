import { Trip } from "@/types/trip.type";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export const useTripColumns = () => {
  const tripsColumns: ColumnDef<Trip>[] = useMemo(() => [
    {
      header: 'Reference ID',
      accessorKey: 'referenceId',
    },
    {
      header: 'Depart',
      accessorKey: 'locationFrom.name',
    },
    {
      header: 'Destination',
      accessorKey: 'locationTo.name',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Created By',
      accessorKey: 'createdBy.name',
    },
    {
      header: 'Start Time',
      accessorKey: 'startTime',
    },
    {
      header: 'End Time',
      accessorKey: 'endTime',
    },
  ], []);

  return { tripsColumns };
};
