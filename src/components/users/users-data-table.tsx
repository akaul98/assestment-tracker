import { DataTable } from "@/components/data-table"
import { columns } from "../../app/(application)/users/columns"
import { CustomeDataTable } from "@/components/custom-data-table"

export type user={
    id:number,
    name:string,
    email:string,
    designation:string,
    department:string,
    status:string, 
}
export const userData:user[]=[
  {"id":1,"name":"John Doe","email":"john.doe@example.com","designation":"Software Engineer","department":"Engineering","status":"Active"},
  {"id":2,"name":"Jane Smith","email":"jane.smith@example.com","designation":"Product Manager","department":"Product","status":"Inactive"},
  {"id":3,"name":"Alice Johnson","email":"alice.johnson@example.com","designation":"UX Designer","department":"Design","status":"Active"},
  {"id":4,"name":"Bob Brown","email":"bob.brown@example.com","designation":"Data Scientist","department":"Data","status":"Active"},
  {"id":5,"name":"Charlie Davis","email":"charlie.davis@example.com","designation":"DevOps Engineer","department":"Engineering","status":"Inactive"},
  {"id":6,"name":"Eve Williams","email":"eve.williams@example.com","designation":"Software Engineer","department":"Engineering","status":"Active"},
  {"id":7,"name":"Frank Thomas","email":"frank.thomas@example.com","designation":"Product Manager","department":"Product","status":"Active"},
  {"id":8,"name":"Grace Lee","email":"grace.lee@example.com","designation":"UX Designer","department":"Design","status":"Inactive"},
  {"id":9,"name":"Henry White","email":"henry.white@example.com","designation":"Data Scientist","department":"Data","status":"Active"},
  {"id":10,"name":"Ivy Harris","email":"ivy.harris@example.com","designation":"DevOps Engineer","department":"Engineering","status":"Active"},
  {"id":11,"name":"Jack Martin","email":"jack.martin@example.com","designation":"Software Engineer","department":"Engineering","status":"Inactive"},
  {"id":12,"name":"Karen Lewis","email":"karen.lewis@example.com","designation":"Product Manager","department":"Product","status":"Active"},
  {"id":13,"name":"Leo Walker","email":"leo.walker@example.com","designation":"UX Designer","department":"Design","status":"Active"},
  {"id":14,"name":"Mia Hall","email":"mia.hall@example.com","designation":"Data Scientist","department":"Data","status":"Inactive"},
  {"id":15,"name":"Nathan Young","email":"nathan.young@example.com","designation":"DevOps Engineer","department":"Engineering","status":"Active"},
  {"id":16,"name":"Olivia King","email":"olivia.king@example.com","designation":"Software Engineer","department":"Engineering","status":"Active"},
  {"id":17,"name":"Paul Scott","email":"paul.scott@example.com","designation":"Product Manager","department":"Product","status":"Inactive"},
  {"id":18,"name":"Quinn Green","email":"quinn.green@example.com","designation":"UX Designer","department":"Design","status":"Active"},
  {"id":19,"name":"Rachel Adams","email":"rachel.adams@example.com","designation":"Data Scientist","department":"Data","status":"Active"},
  {"id":20,"name":"Steve Baker","email":"steve.baker@example.com","designation":"DevOps Engineer","department":"Engineering","status":"Inactive"}
]

export function UsersDataTable(){
    return (
        <div>
            <CustomeDataTable
            data={userData}
            columns={columns}
            />
        </div>
    )
}