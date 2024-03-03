import { View } from "react-native";
import InputField from "../components/InputField";
import React, { useState } from "react";

const CardChange = () => {
  const [cardNumber, setCardNumber] = useState("");
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      {/* <InputField
        placeholder="1234567812345678"
        data={cardNumber}
        setData={setCardNumber}
      /> */}
    </View>
  );
};

export default CardChange;
