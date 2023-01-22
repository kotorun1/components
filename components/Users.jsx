import React, {useState} from "react";
import uuid from "react-uuid";
import User from "./User";
export default function Products() {
  const initUsers = [
    {id: uuid(), name: "John", surname:'Smit',age: 20, isBan:false, isEdit:false},
    {id: uuid(), name: "Bill", surname:'Gates',age: 30, isBan:false, isEdit:false},
    {id: uuid(), name: "Mark", surname:'Zuckerberg',age: 40, isBan:false, isEdit:false},
    {id: uuid(), name: "Elon", surname:'Musk',age: 50, isBan:false, isEdit:false},
    {id: uuid(), name: "Steve", surname:'Jobs',age: 60, isBan:false, isEdit:false},
];
	const [users, setUsers] = useState(initUsers);
	
	function toggleMode(id) {
		setUsers(users.map(user => {
			if (user.id === id) {
				user.isEdit = !user.isEdit;
			}
			
			return user;
		}));
	}
	function editBan(id) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.isBan = !user.isBan;
      }
      
      return user;
    }));
  }
	function editUser(id, field, event) {
		setUsers(users.map(user => {
			if (user.id === id) {
				user[field] = event.target.value;
			}
			
			return user;
		}));
	}
	
	const result = users.map(user => {
		return <User
			key ={user.id}
			id  ={user.id}
			name={user.name}
			surname={user.surname}
      age={user.age}
			isEdit={user.isEdit}
      isBan={user.isBan}
      editBan ={editBan}
			toggleMode={toggleMode}
			editUser={editUser}
		/>;
	});
	
	return <div>
		{result}
	</div>;
}

