import { useState } from "react";
 export default function StudentForm() {
    const [form,setForm]=useState({name:"",age:"",email:""})
        
        const handleChange=(e)=>{
            const {name,value}=e.target;
            setForm(form =>[{...form,  [name]:value,  }]);
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(form.name || form.age || form.email)return; 
            onsubmit({...form,age:Number(form.age)});
            setForm({name:"",age:"",email:""})
        }
     return(
        <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-4 flex flex-wrap gap-2">
            <input 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="name"
            className="border rounded-ig pg-3 flex-1"
            />
             <input 
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="border rounded-ig pg-3 flex-1"
            />
             <input 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-ig pg-3 flex-1"
            />
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Add</button>
        </form>
     )
 }