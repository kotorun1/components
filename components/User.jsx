import React from "react";
import UserField from "./UserField";
export default function User({ id, name, surname,age, isEdit,isBan,editBan, toggleMode, editUser }) {
	return <div>
		name: <UserField
			id={id}
			text={name}
			type="name"
			isEdit={isEdit}
			editUser={editUser}
            isBan={isBan}
			editBan={editBan}
		/>,
		
		surname: <UserField
			id={id}
			text={surname}
			type="surname"
			isEdit={isEdit}
			editUser={editUser}
            isBan={isBan}
			editBan={editBan}
		/>
        age: <UserField
			id={id}
			text={age}
			type="age"
			isEdit={isEdit}
			editUser={editUser}
            isBan={isBan}
			editBan={editBan}
		/>
		
		<button onClick={() => editBan(id)}>
			{isBan ? 'Разбанить': 'Забанить'}
		</button>
        <button onClick={() => toggleMode(id)}>
			{isEdit ? 'save': 'edit'}
		</button>
	</div>;
}
