const fields = [
    {
        field: 'time',
        name:'время',
        type: 'text',
    }, {        
        field: 'timetable_id',
        name: 'прием врача',
        t: 'timetables',
        type: 'fk',
        vkey: 'id',
        nkeys: ['cabinet_id','date'],
    }, {
        field: 'patient_id',
        name: 'пациент',
        t: 'patients',
        type: 'fk',
        vkey: 'id',
        nkeys: ['surname','name','patronymic'],
    }, { 
        field: 'number',
        name:'номер талона',
        type: 'text',
  
    }
]

export default fields
