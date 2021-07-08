import React from 'react'
import { connect } from 'react-redux'
function ViewUsers(props) {
    function userDetailes(currentUser) {
        console.log(currentUser);
        //קבלתי משתמש נוכחי
    }
    return (
        <>
            {
                props.allUsers.map(user =>
                    <div>שם תלמיד:{user.name}<br />
                        <button onClick={userDetailes.bind(this, user)}>פרטים נוספים</button>
                    </div>)
            }
            {/* <div>
                שם משתמש:<input type="text"></input>
                סיסמה:<input type="text"></input>
               מנהל:<input type="text"></input>
            </div> */}

        </>
    )
}
const mapStateToProp = (state) => {
    return {
        allUsers: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ViewUsers)