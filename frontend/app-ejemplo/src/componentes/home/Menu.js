import React from "react";
import { View, Text } from "react-native";
import ProfileCard from "./ProfileCard";

const Menu = () => {
  return (
    <View>
      <ProfileCard />
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        {"\n"} Mi nombre es Francisco, soy estudiante de la carrera de
        Ingenieria en Sistemas de Información en la Universidad Central del
        Ecuador.
        {"\n\n"} Actualmente curso el décimo semestre.
        {"\n\n"} A continuación te dejo mis redes sociales.
      </Text>
    </View>
  );
};

export default Menu;
