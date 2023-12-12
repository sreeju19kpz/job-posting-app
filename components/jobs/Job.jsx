import { Button, Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
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
        styles.gap20,
        styles.borStySol,
        styles.borColBlaLigP1,
        styles.borWid1,
      ]}
    >
      <View style={[styles.wid100p, styles.gap5]}>
        <View style={[styles.wid100p]}>
          <Text style={[styles.fonSiz22, styles.fonWei900]}>{item.title}</Text>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.gap10,
            styles.aliIteCnt,
          ]}
        >
          <Text style={[styles.fonSiz15, styles.fonColBlaLig1]}>
            {item.companyName}
          </Text>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.gap10,
            styles.aliIteCnt,
          ]}
        >
          <AntDesign name="paperclip" size={14} color="black" />
          <Text style={[styles.fonSiz15]}>{item.jobType}</Text>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.gap10,
            styles.aliIteCnt,
          ]}
        >
          <Feather name="map-pin" size={13} color="black" />
          <Text style={[styles.fonSiz15]}>{item.location}</Text>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.gap10,
            styles.aliIteCnt,
          ]}
        >
          <AntDesign name="calendar" size={13} color="black" />
          <Text style={[styles.fonSiz15]}>{item.experience}</Text>
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
        <View style={[styles.flexDirRow, styles.gap10]}>
          {item.skills.map((item) => {
            return (
              <View
                key={item}
                style={[styles.bacColgreLig1, styles.padHor4, styles.padVer1]}
              >
                <Text>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={[
          styles.wid100p,
          styles.JusConFleEnd,
          styles.padTop5,
          styles.aliIteFleEnd,
          styles.flexDirRow,
          styles.gap10,
          styles.borTopWid1,
          styles.borColBlaLigP1,
        ]}
      >
        <View style={[styles.wid100]}>
          <Pressable
            style={[
              styles.hei33,
              styles.aliIteCnt,
              styles.jusConCnt,
              styles.borStySol,
              styles.borColBlaLigP1,
              styles.borWid1,
            ]}
            onPress={() => console.log("a")}
          >
            <Text style={[styles.fonColIndBlu]}>details</Text>
          </Pressable>
        </View>
        <View style={[styles.wid100]}>
          <Button title="apply" />
        </View>
      </View>
    </View>
  );
};
