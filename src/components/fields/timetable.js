const fields = [
    {
        field: 'doctor_id',
        name: 'врач',
        t: 'doctors',
        type: 'fk',
        vkey: 'id',
        nkeys: ['surname','name','patronymic'],
    }, {        
        field: 'shift_id',
        name: 'смена',
        t: 'shifts',
        type: 'fk',
        vkey: 'id',
        nkeys: ['name'],
    }, {
        field: 'cabinet_id',
        name: 'кабинет№',
        t: 'cabinets',
        type: 'fk',
        vkey: 'id',
        nkeys: ['number'],
    }, {
        field: 'date',        
        name:'дата',
        type: 'date',
    }
]

export default fields
