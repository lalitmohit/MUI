export const NavbarStyles = {
    Drawer:
    {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#101F33',
          color: 'rgba(255, 255, 255, 0.7)',
          
        },
      },

    Color:
      {color: 'rgba(255, 255, 255, 0.7)'},
    Text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
}