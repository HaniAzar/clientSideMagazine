import React, { useRef } from 'react'
import { connect } from 'react-redux'
function AdminEnterce(props) {
    let adminName = useRef()
    let adminPassword = useRef()
    function enterAdmin() {
        let admin
        props.allAdmin.forEach(a => {
            if (a.name === adminName.current.value && a.password === adminPassword.current.value)
                admin = a;
        });
        admin ? alert("ברוך הבא") : alert("מנהל לא קיים", "תוכל להירשם")
    }
    return (
        <>
            <h4>כניסת מנהל</h4>
            שם מנהל :< input type="text" ref={adminName}></input >
             סיסמה :<input type="text" ref={adminPassword}></input>
            <button onClick={enterAdmin}>כניסה</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        allAdmin: state.admins.admins
    }

}
export default connect(mapStateToProps)(AdminEnterce)