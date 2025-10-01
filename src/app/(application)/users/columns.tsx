"use client"

import { Switch } from "@/components/ui/switch"
import { ColumnDef } from "@tanstack/react-table"
import { User } from "../../../components/users/users-data-table"

export const columns = (onChangeStatus: (id:number, status:boolean) => void): ColumnDef<User, any>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Switch
        checked={row.getValue("status") === "Active"}
        onCheckedChange={value => onChangeStatus(row.original.id, value)}
        className="data-table-switch"
      />
    )
  },
]
