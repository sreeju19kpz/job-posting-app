import { Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
export default Job = ({ item }) => {
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.bac2,
        styles.pad10,
        styles.gap5,
      ]}
    >
      <View style={[styles.wid100p]}>
        <Text style={[styles.fonSiz22, styles.fonWei900]}>{item.title}</Text>
      </View>
      <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
        <Text style={[styles.fonSiz15, styles.fonColBlaLig1]}>
          {item.companyName}
        </Text>
      </View>
      <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
        <SimpleLineIcons name="fire" size={13} color="black" />
        <Text style={[styles.fonSiz15]}>{item.skills}</Text>
      </View>
      <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
        <Feather name="map-pin" size={13} color="black" />
        <Text style={[styles.fonSiz15]}>{item.location}</Text>
      </View>
      <View
        style={[
          styles.flexDirRow,
          styles.gap10,
          styles.aliIteCnt,
          { marginLeft: 3 },
        ]}
      >
        <Fontisto name="inr" size={12} color="black" />
        <Text style={[styles.fonSiz15]}>{item.salary}</Text>
      </View>
    </View>
  );
};
