import React from 'react'

const Paragraph = ({ children }) => {
  return (
    <p
      style={{
        fontFamily: `"Garet Book", "Garet Book Placeholder", sans-serif`,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: 'rgb(25, 28, 27)',
        marginTop: '1.5rem' // mt-6 equivalent in px is 24px but 1.5rem = 24px
      }}
    >
      {children}
    </p>
  )
}

export default Paragraph
