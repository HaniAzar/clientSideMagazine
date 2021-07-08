import produce from 'immer'
const initialState = {
    users: [
        { id: '11', name: 'avigail', password: '8283', adminId: '123' },
        { id: '22', name: 'hagit', password: '0117', adminId: '123' },
        { id: '33', name: 'rachel', password: '9875', adminId: '456' },
        { id: '44', name: 'sara', password: '1521', adminId: '456' }
    ]
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            { state.users.push(action.payload) }
            break
        // case 'GET_USERBYID':
        //     { }
        //     break

    }
}, initialState)
export default reducer