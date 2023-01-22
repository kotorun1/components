import React from "react";

export default function UserField({ id, text, type, isEdit, editUser }) {
	return isEdit
		? <input value={text} onChange={event => editUser(id, type, event)} />
		: <span>{text}</span>
	;
}