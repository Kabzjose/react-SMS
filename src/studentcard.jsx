import { useState } from "react";

export default function StudentCard({ student, onDelete ,onEdit}) {

const [edit, setIsEditing] = useState(false);
const [draft,setDraft]=useState(student)
return(
    <div className="rounded-xl border bg-white p-4 shadow=sw">
      (!edit ? {
        <div className="flex justify-between">
            <div>
                <h3 className="text-large font-semibold"> {student.name}</h3>
                <p className="text-slate-600 text-sm ">{student.email}</p>
                <p className="text-slate-600 text-sm ">{student.age}</p>
            </div>
            <div className="flex gap-2">
               
             <button onClick={()=>setIsEditing} className="border px-3 py-1 rounded-lg text-sm">Edit</button>
            <button onClick={()=>onDelete} className="hg-red-600 text-white px-3 py-1 rounded-lg text-sm">Delete</button>
            </div>
        </div>
      };(
    <form>
    <input className="border rounded-lg px-3 py-1 w-full"
    value={draft.name}
    onChange={e=>setDraft({...draft,name:e.target.value})}
    />
    <input className="border rounded-lg px-3 py-1 w-full"
    value={draft.email}
    onChange={e=>setDraft({...draft,email:e.target.value})}
     />
    <input className="border rounded-lg px-3 py-1 w-full" 
    value={draft.age}
    onChange={e=>setDraft({...draft,age:e.target.value})}
    />
    <div>
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">Save</button>
        <button type="button" onClick={()=>setIsEditing(false)} className="bg-red-400 text-white px-3 py-1 rounded-lg text-sm">Cancel</button>
    </div>
    </form>
      ))
    </div>
)
}