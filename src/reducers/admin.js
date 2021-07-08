import produce from 'immer'
const initialState = {
    admins: [
        { id: '123', name: 'hani', password: 'h123' },
        { id: '456', name: 'dina', password: 'd456' }
    ]
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case '':
            { }
            break
    }

}, initialState)
export default reducer