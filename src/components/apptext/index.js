import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../constants';
const AppText = props => {
  const {
    text,
    bold,
    semiBold,
    notBold,
    italic,
    upperCase,
    lowerCase,
    underline,
    size,
    heading,
    subHeading,
    color,
    textStyle,
    primary,
    secondary,
    white,
    paddingV,
    paddingH,
    paddingB,
    paddingT,
    paddingL,
    paddingR,
    textAlign,
    Spacing,
    lineH,
    width,
    marginV,
    marginB,
  } = props;
  return (
    <Text
      style={[
        styles.commonTextStyles,
        primary && {color: theme.textColors.primaryText},
        secondary && {color: theme.secondaryColor},
        white && {color: theme.textColors.whiteText},
        bold && {fontWeight: 'bold'},
        semiBold && {fontWeight: '600'},
        notBold && {fontWeight: '100'},
        upperCase && {textTransform: 'uppercase'},
        lowerCase && {textTransform: 'lowercase'},
        italic && {fontStyle: 'italic'},
        underline && {textDecorationLine: 'underline'},
        heading && {fontSize: 17},
        subHeading && {fontSize: 14},
        size && {fontSize: size},
        color && {color: color},
        width && {width: width},
        paddingV && {paddingVertical: 6},
        paddingH && {paddingHorizontal: 5},
        paddingB && {paddingBottom: 10},
        paddingT && {paddingTop: 5},
        paddingL && {paddingLeft: 5},
        paddingR && {paddingRight: 5},
        textAlign && {textAlign: 'center'},
        Spacing && {letterSpacing: 0.5},
        lineH && {lineHeight: 16.5},
        marginV && {marginVertical: 10},
        marginB && {marginBottom: 5},
        textStyle,
      ]}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  commonTextStyles: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});
export {AppText};
