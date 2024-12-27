"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";


import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data: User[] = [
  {
    username: "user_1",
    email: "user_1@mail.com",
    branch: "Aerospace",
    role: "User",
  },
  {
    username: "user_2",
    email: "user_2@webmail.org",
    branch: "Computer Science",
    role: "Viewer",
  },
  {
    username: "user_1",
    email: "user_1@mail.com",
    branch: "Aerospace",
    role: "User",
  },
  {
    username: "user_2",
    email: "user_2@webmail.org",
    branch: "Computer Science",
    role: "Viewer",
  },
  {
    username: "user_3",
    email: "user_3@mail.com",
    branch: "Civil",
    role: "Admin",
  },
  {
    username: "user_4",
    email: "user_4@email.net",
    branch: "Biomedical",
    role: "Admin",
  },
  {
    username: "user_5",
    email: "user_5@webmail.org",
    branch: "Aerospace",
    role: "User",
  },
  {
    username: "user_6",
    email: "user_6@mail.com",
    branch: "Civil",
    role: "Viewer",
  },
  {
    username: "user_7",
    email: "user_7@mail.com",
    branch: "Electronics",
    role: "User",
  },
  {
    username: "user_8",
    email: "user_8@email.net",
    branch: "Mechanical",
    role: "Viewer",
  },
  {
    username: "user_9",
    email: "user_9@example.com",
    branch: "Electronics",
    role: "Moderator",
  },
  {
    username: "user_10",
    email: "user_10@webmail.org",
    branch: "Biomedical",
    role: "Moderator",
  },
  {
    username: "user_11",
    email: "user_11@example.com",
    branch: "Mechanical",
    role: "Admin",
  },
  {
    username: "user_12",
    email: "user_12@example.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_13",
    email: "user_13@example.com",
    branch: "Information Technology",
    role: "Viewer",
  },
  {
    username: "user_14",
    email: "user_14@mail.com",
    branch: "Computer Science",
    role: "Moderator",
  },
  {
    username: "user_15",
    email: "user_15@mail.com",
    branch: "Aerospace",
    role: "User",
  },
  {
    username: "user_16",
    email: "user_16@example.com",
    branch: "Computer Science",
    role: "Admin",
  },
  {
    username: "user_17",
    email: "user_17@mail.com",
    branch: "Aerospace",
    role: "Viewer",
  },
  {
    username: "user_18",
    email: "user_18@email.net",
    branch: "Computer Science",
    role: "Viewer",
  },
  {
    username: "user_19",
    email: "user_19@webmail.org",
    branch: "Civil",
    role: "User",
  },
  {
    username: "user_20",
    email: "user_20@example.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_21",
    email: "user_21@webmail.org",
    branch: "Biomedical",
    role: "User",
  },
  {
    username: "user_22",
    email: "user_22@mail.com",
    branch: "Mechanical",
    role: "Moderator",
  },
  {
    username: "user_23",
    email: "user_23@example.com",
    branch: "Electrical",
    role: "Viewer",
  },
  {
    username: "user_24",
    email: "user_24@mail.com",
    branch: "Biomedical",
    role: "Admin",
  },
  {
    username: "user_25",
    email: "user_25@webmail.org",
    branch: "Electronics",
    role: "Moderator",
  },
  {
    username: "user_26",
    email: "user_26@webmail.org",
    branch: "Computer Science",
    role: "Moderator",
  },
  {
    username: "user_27",
    email: "user_27@mail.com",
    branch: "Civil",
    role: "Viewer",
  },
  {
    username: "user_28",
    email: "user_28@webmail.org",
    branch: "Electronics",
    role: "User",
  },
  {
    username: "user_29",
    email: "user_29@mail.com",
    branch: "Information Technology",
    role: "Moderator",
  },
  {
    username: "user_30",
    email: "user_30@example.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_31",
    email: "user_31@mail.com",
    branch: "Computer Science",
    role: "Admin",
  },
  {
    username: "user_32",
    email: "user_32@mail.com",
    branch: "Civil",
    role: "User",
  },
  {
    username: "user_33",
    email: "user_33@example.com",
    branch: "Mechanical",
    role: "Admin",
  },
  {
    username: "user_34",
    email: "user_34@webmail.org",
    branch: "Mechanical",
    role: "Admin",
  },
  {
    username: "user_35",
    email: "user_35@mail.com",
    branch: "Biomedical",
    role: "Moderator",
  },
  {
    username: "user_36",
    email: "user_36@example.com",
    branch: "Electrical",
    role: "Viewer",
  },
  {
    username: "user_37",
    email: "user_37@mail.com",
    branch: "Electrical",
    role: "Admin",
  },
  {
    username: "user_38",
    email: "user_38@example.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_39",
    email: "user_39@email.net",
    branch: "Electronics",
    role: "Admin",
  },
  {
    username: "user_40",
    email: "user_40@webmail.org",
    branch: "Civil",
    role: "Moderator",
  },
  {
    username: "user_41",
    email: "user_41@email.net",
    branch: "Aerospace",
    role: "Moderator",
  },
  {
    username: "user_42",
    email: "user_42@webmail.org",
    branch: "Computer Science",
    role: "Admin",
  },
  {
    username: "user_43",
    email: "user_43@mail.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_44",
    email: "user_44@mail.com",
    branch: "Computer Science",
    role: "User",
  },
  {
    username: "user_45",
    email: "user_45@webmail.org",
    branch: "Electronics",
    role: "Admin",
  },
  {
    username: "user_46",
    email: "user_46@webmail.org",
    branch: "Mechanical",
    role: "Viewer",
  },
  {
    username: "user_47",
    email: "user_47@example.com",
    branch: "Aerospace",
    role: "Admin",
  },
  {
    username: "user_48",
    email: "user_48@email.net",
    branch: "Biomedical",
    role: "User",
  },
  {
    username: "user_49",
    email: "user_49@mail.com",
    branch: "Information Technology",
    role: "User",
  },
  {
    username: "user_50",
    email: "user_50@webmail.org",
    branch: "Civil",
    role: "Moderator",
  },
  {
    username: "user_51",
    email: "user_51@example.com",
    branch: "Electrical",
    role: "User",
  },
  {
    username: "user_52",
    email: "user_52@email.net",
    branch: "Mechanical",
    role: "Viewer",
  },
  {
    username: "user_53",
    email: "user_53@webmail.org",
    branch: "Biomedical",
    role: "User",
  },
  {
    username: "user_54",
    email: "user_54@email.net",
    branch: "Computer Science",
    role: "Moderator",
  },
  {
    username: "user_55",
    email: "user_55@mail.com",
    branch: "Mechanical",
    role: "Viewer",
  },
  {
    username: "user_56",
    email: "user_56@example.com",
    branch: "Electronics",
    role: "Viewer",
  },
  {
    username: "user_57",
    email: "user_57@mail.com",
    branch: "Computer Science",
    role: "User",
  },
  // Add more users here...
];

export type User = {
  username: string;
  email: string;
  branch: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => (
      <div className="capitalize hidden sm:block">{row.getValue("branch")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

export default function UserTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-between max-sm:gap-2">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm "
        />

        <Select
          onValueChange={(value) =>
            table.getColumn("branch")?.setFilterValue(value)
          }
          defaultValue=""
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter By Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            
              <SelectItem value="Information Technology">
                Information Technology
              </SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Civil">Civil Engineering</SelectItem>
              <SelectItem value="Electrical">Electrical Engineering</SelectItem>
              <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className=" hidden">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
