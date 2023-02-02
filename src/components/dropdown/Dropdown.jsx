import React from 'react'

function Dropdown({ btn_style, title, children }) {
  return (
    <div className="btn-group">
      <button
        aria-label='dropdown'
        type="button"
        className={btn_style}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <div className="dropdown-menu dropdown-menu-end">{children}</div>
    </div>
  )
}

export default Dropdown