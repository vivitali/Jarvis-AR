import AsyncStorage from "@react-native-community/async-storage";

class User {
  async set(user) {
    return await AsyncStorage.setItem("user", JSON.stringify(user));
  }

  async get() {
    const user = await AsyncStorage.getItem("user");
    return JSON.parse(user);
  }

  async clear() {
    return await AsyncStorage.removeItem("user");
  }
}

export const appUser = new User();
