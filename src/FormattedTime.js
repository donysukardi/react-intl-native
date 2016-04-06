import React, { PropTypes, Text } from 'react-native';
import Intl from 'react-intl';

const FormattedTime = props => (
  <Intl.FormattedTime {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedTime>
);

FormattedTime.propTypes = {
  style: PropTypes.any,
};

export default FormattedTime;