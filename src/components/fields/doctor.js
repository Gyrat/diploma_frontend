const fields = [
    {
        field: 'name',
        name:'имя',
        type: 'text'
    },
    {
        field: 'surname',
        name:'фамилия',
        type: 'text'
    },
    {
        field: 'patronymic',
        name:'отчество',
        type: 'text'
    },
    {
        field: 'birth_date',
        name: 'дата рождения',
        type: 'text'
    },
    {
        field: 'specialization_id',
        name: 'специализация',
        t: 'specs',
        type: 'fk',
        vkey: 'id',
        nkeys: ['name'],
    },
]

export default fields
