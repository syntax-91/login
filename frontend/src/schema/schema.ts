export const schemaUsername = {
	required: 'Поля является обязательной'
}

export const schemaPassword = {
	required: 'Поля является обязательной',
	minLength: {value: 3, message: "Минимум 3 символа"},
}