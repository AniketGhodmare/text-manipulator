import React from 'react'

export default function Alert(props) {

  const capitalize = (word) => {
    const wordtolower = word.toLowerCase();
    return wordtolower.charAt(0).toUpperCase() + wordtolower.slice(1);

  }
  return (
    props.alert && <div className={`alert alert-${props.alert.stutus} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.stutus)}...!</strong> {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
