import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
const ImageOption = (props) => {
  const { image, text } = props;

  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ImageOption.defaultProps = {
  text: "Default",
};
export default ImageOption;
