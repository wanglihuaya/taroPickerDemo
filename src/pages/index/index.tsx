import { Component, PropsWithChildren, useState } from "react";
import { View, Button, Text, Picker } from "@tarojs/components";

import "./index.scss";

const Index = () => {
  const [value, setValue] = useState<any>();
  return (
    <View className="index">
      <Picker
        mode="date"
        start="2020-01-01"
        end="2024-12-01"
        value={value}
        onChange={(e) => setValue(e.detail.value)}
      >
        <Button>出来吧 Picker!</Button>
      </Picker>
    </View>
  );
};

export default Index;
