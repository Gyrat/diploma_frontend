const fields = [
    {
        field: 'tab_id',
        name: 'название вкладки',
        t: 'tabs',
        type: 'fk',
        vkey: 'id',
        nkeys: ['name'],
    }, {
        field: 'name',
        name:'Название страницы',
        type: 'text',
    }, {
        field: 'text',
        name:'Текст страницы',
        withUpload: true,
        type: 'text',
    }
]

export default fields
