import { user } from "@/components/users/users-data-table"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<user, any>[] = [
    {
        accessorKey:"id",
        header:"ID",
    },
    {
        accessorKey:"name",
        header:"Name",
    },
    {
        accessorKey:"email",
        header:"Email",
    },
    {
        accessorKey:"designation",
        header:"Designation",
    },
    {
        accessorKey:"department",
        header:"Department",
    },
    {
        accessorKey:"status",
        header:"Status",
    },
]
