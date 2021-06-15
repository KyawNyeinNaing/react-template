const general = {
  borderRadius: '5px',
  boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)',
  fontFamily: 'Rubik, sans-serif',
  titleFontFamily: 'Russo One, sans-serif',
  transition: 'all .3s ease-in-out',
  flex: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  },
  marginAuto: {
    'position': 'absolute',
    'left': '0',
    'right': '0',
    'margin': '0 auto'
  }
}

const inputGeneral = {
  border: '1px solid',
  borderRadius: '23px',
  padding: '7px 15px',
  transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  checkLabel: {
    'position': 'relative',
    'padding-left': '20px',
    'margin-bottom': 0,
    'width': 'auto',
    'text-align': 'left',
    'cursor': 'pointer',
    'text-transform': 'lowercase',
    'user-select': 'none'
  }
}

export {
  general,
  inputGeneral
}
