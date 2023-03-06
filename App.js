import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Entypo, Octicons, MaterialCommunityIcons, Ionicons, Zocial, FontAwesome, AntDesign, FontAwesome5  } from '@expo/vector-icons';

export default function App() {
  return (
    <View  style={styles.container}>
      <ScrollView>
        {/*<Ionicons name="cart" size={24} color="#bf25257d" />
        <Zocial name="dribbble" size={24} color="orange" />
        <AntDesign name="apple1" size={50} color="black" />
        */}
        {/* 1 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>Entypo</Text>
          <View style={styles.lista_icones}>
            <Entypo style={styles.espaco_icones} name="app-store" size={24} color="black" />
            <Entypo style={styles.espaco_icones} name="baidu" size={24} color="brown" />
            <Entypo style={styles.espaco_icones} name="bug" size={24} color="black" />
            <Entypo style={styles.espaco_icones} name="emoji-happy" size={24} color="yellow" />
            <Entypo style={styles.espaco_icones} name="email" size={24} color="red" />
          </View>
        </View>
        {/* 2 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>Zocial</Text>
          <View style={styles.lista_icones}>
            <Zocial style={styles.espaco_icones} name="spotify" size={24} color="darkgreen" />
            <Zocial style={styles.espaco_icones} name="twitter" size={24} color="#4bcfff" />
            <Zocial style={styles.espaco_icones} name="windows" size={24} color="black" />
            <Zocial style={styles.espaco_icones} name="youtube" size={24} color="red" />
            <Zocial style={styles.espaco_icones} name="yahoo" size={24} color="purple" />
          </View>
        </View>
        {/* 3 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>Octicons</Text>
          <View style={styles.lista_icones}>
            <Octicons style={styles.espaco_icones} name="flame" size={24} color="black" />
            <Octicons style={styles.espaco_icones} name="gift" size={24} color="black" />
            <Octicons style={styles.espaco_icones} name="gear" size={24} color="black" />
            <Octicons style={styles.espaco_icones} name="zap" size={24} color="yellow" />
            <Octicons style={styles.espaco_icones} name="thumbsup" size={24} color="blue" />
          </View>
        </View>
        {/* 4 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>MaterialCommunityIcons</Text>
            <View style={styles.lista_icones}>
              <MaterialCommunityIcons style={styles.espaco_icones} name="account" size={24} color="red" />
              <MaterialCommunityIcons style={styles.espaco_icones} name="airplane-landing" size={24} color="black" />
              <MaterialCommunityIcons style={styles.espaco_icones} name="alarm-check" size={24} color="black" />
              <MaterialCommunityIcons style={styles.espaco_icones} name="alpha-m-circle" size={24} color="lightgreen" />
              <MaterialCommunityIcons style={styles.espaco_icones} name="arm-flex" size={24} color="#4300cd" />
            </View>
        </View>
        {/* 5 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>Ionicons</Text>
          <View style={styles.lista_icones}>
            <Ionicons style={styles.espaco_icones} name="build" size={24} color="black" />
            <Ionicons style={styles.espaco_icones} name="bulb" size={24} color="black" />
            <Ionicons style={styles.espaco_icones} name="bus-sharp" size={24} color="black" />
            <Ionicons style={styles.espaco_icones} name="cafe" size={24} color="black" />
            <Ionicons style={styles.espaco_icones} name="call" size={24} color="black" />
          </View>
        </View>
        {/* 6 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>FontAwesome5</Text>
          <View style={styles.lista_icones}>
            <FontAwesome5 style={styles.espaco_icones} name="microsoft" size={24} color="#4bcfff" />
            <FontAwesome5 style={styles.espaco_icones} name="ubuntu" size={24} color="orange" />
            <FontAwesome5 style={styles.espaco_icones} name="chrome" size={24} color="red" />
            <FontAwesome5 style={styles.espaco_icones} name="city" size={24} color="black" />
            <FontAwesome5 style={styles.espaco_icones} name="cloud" size={24} color="black" />
          </View>
        </View>
        {/* 7 Familia */}
        <View style={styles.familia_icones}>
          <Text style={styles.titulo_familia}>FontAwesome</Text>
          <View style={styles.lista_icones}>
            <FontAwesome style={styles.espaco_icones} name="thumbs-o-down" size={24} color="blue" />
            <FontAwesome style={styles.espaco_icones} name="upload" size={24} color="red" />
            <FontAwesome style={styles.espaco_icones} name="lemon-o" size={24} color="darkgreen" />
            <FontAwesome style={styles.espaco_icones} name="save" size={24} color="black" />
            <FontAwesome style={styles.espaco_icones} name="deviantart" size={24} color="green" />
          </View>
        </View>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  familia_icones: {
    backgroundColor: 'lightblue',
    width: '95%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    borderColor: 'black',
  },
  lista_icones: {
    flexDirection: 'row',
  },
  espaco_icones: {
    margin: 10,
  },
  titulo_familia: {
    fontSize: 25,
    borderStyle: 'solid',
    borderColor: 'darkblue',
    borderBottomWidth: 2,
  },
});
