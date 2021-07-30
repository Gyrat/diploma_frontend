const fields = [
    {
        field: 'type',
        name:'тип',
        type: 'text',
    }, {
        field: 'is_done',
        name:'готовность',
        type: 'text',
    },{
        field: 'patient_id',
        name: 'пациент',
        t: 'patients',
        type: 'fk',
        vkey: 'id',
        nkeys: ['surname','name','patronymic'],
    },
]

export default fields
