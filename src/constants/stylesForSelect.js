export const customStyles = (width) => {
  return {
    option: (provided, state) => ({
      ...provided,
      color: '#000000',
      width: width - 15,
      padding: 5,
      fontSize: 12,
      marginLeft: 10,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: state.isSelected ? '#F3F4F8' : '#FFFFFF',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F3F2F8'
      },
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: width,
      // paddingTop: 8,
      // paddingBottom: 8,
      paddingLeft: 10,
      borderRadius: 3,
      display: 'flex',
      fontSize: 12,
      border: '1px solid #B1B4C5',
      backgroundColor: '#FFFFFF',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      papping: 0,
    }),
    menuList: (provided) => ({
      ...provided,
      '&::-webkit-scrollbar': {
        width: 4,
        height: 4,
        background: '#FDFDFF',
        borderRadius: 3,
        position: 'absolute',
        right: 10,
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#B1B4C5',
        opacity: 0.5,
        borderRadius: 3,
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#B1B4C5',
      },
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';
    //
    //   return {...provided, opacity, transition};
    // }
  }
};
