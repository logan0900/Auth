import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {theme} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const DropdownComponent = ({value, options, onSelect}) => {
  return (
    <ModalDropdown
      renderRightComponent={() => (
        <Entypo
          name={'chevron-down'}
          style={{
            fontSize: 20,
            color: theme.iconsColor.darkIcon,
          }}
        />
      )}
      style={{
        height: 40,
        padding: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 10,
      }}
      textStyle={{
        paddingHorizontal: 2,
        fontSize: 14,
        letterSpacing: 0.5,
        color: theme.textColors.darkGrayText,
      }}
      dropdownTextHighlightStyle={{
        color: theme.textColors.primaryText,
      }}
      dropdownStyle={{
        width: '39.5%',
        backgroundColor: '#f9f8f9',
        marginLeft: -10,
        paddingVertical: 5,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
      }}
      dropdownTextStyle={{
        fontSize: 14,
        backgroundColor: '#fafafa',
      }}
      defaultValue={value}
      options={options}
      onSelect={onSelect}
      //   onSelect={(index, value) =>
      //     setState({
      //       ...isState,
      //       categoryValue: value,
      //     })
      //   }
    />
  );
};

export {DropdownComponent};
