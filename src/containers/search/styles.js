import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 100,
  },
  searchInputWrapper: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: Colors.contrastColor,
    justifyContent: "space-between",
    marginBottom: 10,
    position: "relative",
  },
  searchInput: {
    color: Colors.contrastColor,
    fontSize: 20,
    fontFamily: Fonts.base,
    width: "100%",
  },
  userCard: {
    backgroundColor: Colors.contrastColor,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 13,
    paddingRight: 23,
    paddingLeft: 6,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0,
  },
  userDetails: {
    color: Colors.searchResult,
    fontSize: 20,
    fontFamily: Fonts.base,
  },
  mobileBtn: {
    backgroundColor: Colors.pressButton,
    color: Colors.contrastColor,
    width: 40,
    display: "flex",
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBtn: {
    borderWidth: 0,
    marginBottom: 5,
    height: "auto",
    position: "absolute",
    right: 0,
  },
  textUnderline: {
    textDecorationColor: Colors.searchResult,
    textDecorationLine: "underline",
  },
  noSearchResult: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%'
  },
  noSearchResultImg: {
    marginBottom: 45,
  },
  noSearchResultTitle: {
    marginBottom: 15,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.noSearchResultTitle,
    fontFamily: Fonts.bold,
  },
  noSearchResultText: {
    fontSize: 17,
    lineHeight: 21,
    fontFamily: Fonts.base,
    color: Colors.noSearchResultTitle,
  }
});

export default styles;
