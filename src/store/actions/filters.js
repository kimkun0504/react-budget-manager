export const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text,
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

export const setEndDate = ( time = undefined ) => ({
    type: 'SET_END_DATE',
    endDate: time,
});

export const setStartDate = ( time = undefined ) => ({
    type: 'SET_START_DATE',
    startDate: time,
});
