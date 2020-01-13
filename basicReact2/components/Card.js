import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({});
export default Card;
