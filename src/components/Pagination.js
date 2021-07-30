var tDyn = $('.uui-table.dynamic'),
    domElements = '';
tDyn.addClass('dataTable');
if (tDyn.hasClass('records-per-page')) {
    domElements += 'l';
} else {
    domElements += '';
}
if (tDyn.hasClass('search')) {
    domElements += 'f';
}
domElements += '<t>';
if (tDyn.hasClass('showing-pages')) {
    domElements += 'i';
}
if (tDyn.hasClass('paging')) {
    domElements += 'p';
}
tDyn.dataTable({
    'dom': domElements
});