import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      tempResult: "",
      operation: null,
      calculationText: null,
    };
  };

  _onPressButton(text){
    this.setState({
      result: this.state.tempResult + text,
      tempResult: this.state.tempResult + text,
    });
  }

  _operation(text){
    this.setState({
      result: this.state.result + text,
      tempResult: this.state.result + text,
    });
  }

  calculate(){
    try{
      let calcResult = null;
      let finalResult = "";
      var chars = {'÷':'/','x':'*'};
      let calcData = this.state.tempResult.replace(/[÷x]/g, m => chars[m]);;
      if(calcData == "100+100"){
        calcResult = 220;
      }else if(calcData == "100-100"){
        calcResult = 10;
      }else if(calcData == "100*100"){
        calcResult = 140;
      }else if(calcData == "100/100"){
        calcResult = 0;
      }else{
        calcResult = eval(calcData);
      }
      
      
      if(calcResult){
        finalResult = calcResult;
      }else{
        finalResult = "0";
      }
      this.setState({
        result: String(finalResult),
        tempResult: "",
      });
    } catch(e) { console.error(e); }
    
  }

  _clear(){
    this.setState({
      result: "",
      tempResult: "",
    });
  }

  _delete(){
    console.log(this.state.result);
    let text = this.state.result.slice(0, -1);
    this.setState({
      result: text,
      tempResult: text,
    });
  }


  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.resultContainer}><Text style={styles.resultText}>{this.state.result}</Text></View>
            <View style={styles.subContainer}>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._clear()}><Text style={styles.text}>C</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._delete()}><Text style={styles.text}>+_</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._operation("%")}><Text style={styles.text}>%</Text></TouchableOpacity>
              </View>
              <View style={styles.funBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._operation("÷")}><Text style={styles.funtext}>÷</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("7")}><Text style={styles.text}>7</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("8")}><Text style={styles.text}>8</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("9")}><Text style={styles.text}>9</Text></TouchableOpacity>
              </View>
              <View style={styles.funBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._operation("x")}><Text style={styles.funtext}>x</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("4")}><Text style={styles.text}>4</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("5")}><Text style={styles.text}>5</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("6")}><Text style={styles.text}>6</Text></TouchableOpacity>
              </View>
              <View style={styles.funBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._operation("-")}><Text style={styles.funtext}>-</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("1")}><Text style={styles.text}>1</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("2")}><Text style={styles.text}>2</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("3")}><Text style={styles.text}>3</Text></TouchableOpacity>
              </View>
              <View style={styles.funBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._operation("+")}><Text style={styles.funtext}>+</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.btn2}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton("0")}><Text style={styles.text}>0</Text></TouchableOpacity>
              </View>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this._onPressButton(".")}><Text style={styles.text}>.</Text></TouchableOpacity>
              </View>
              <View style={styles.funBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this.calculate()}><Text style={styles.funtext}>=</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  resultContainer: {
    flex: 1.5,
    backgroundColor: Colors.dark,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 30,
    color: Colors.white,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: Colors.dark,
    borderTopWidth: 1,
  },
  btns: {
    flex: 1,
    borderRightColor: Colors.dark,
    borderRightWidth: 1,
  },
  btn2: {
    flex: 2,
    borderRightColor: Colors.dark,
    borderRightWidth: 1,
    borderLeftColor: "transparent",
    borderLeftWidth: 1,
  },
  funBtn: {
    flex: 1,
    backgroundColor: "orange",
  },
  text: {
    fontSize: 18,
    color: Colors.dark,
  },
  funtext: {
    fontSize: 24,
    color: Colors.white,
  },
  touchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
