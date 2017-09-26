import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet,Linking,View,Text,Image} from 'react-native';



 class Second extends Component{
  
  static navigationOptions = {
    title: 'second',
  }

  constructor(props){
    super(props)
  }

 

  render(){
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text >
          Second Screen| HELLOOOOOOOOOOO {params.user}
        </Text>  
      </View>
    );
  }
}


const mapStateToProps = ({first}) => ({
  test:first.test,
  
});



export default connect(mapStateToProps)(Second);
