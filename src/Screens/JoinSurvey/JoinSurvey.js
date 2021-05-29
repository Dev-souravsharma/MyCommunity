import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Menu from '../../Components/Menu';
import english from '../../utils/Language/String';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
const data = [
  {
    id: 1,
    question: 'Is this a question test for CC mobile application?',
    options: {
      a: 'Yes',
      b: 'No',
    },
  },
  {
    id: 2,
    question:
      'Should the board implement the parking passes for the community?',
    options: {
      a: 'Yes',
      b: 'No',
    },
  },
  {
    id: 3,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: {
      a: 'Yes',
      b: 'No',
    },
  },
  {
    id: 3,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: {
      a: 'Yes',
      b: 'No',
    },
  },
];
function MyCheckbox() {
  return data.map(function (key, array) {
    return (
      <View>
        <Text>{}</Text>
      </View>
    );
  });
}
const JoinSurvey = props => {
  const [position, changePosition] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {title} = props.route.params;
  const dataSize = (100 / (data.length - position + 1)).toFixed(2).toString();
  console.log(dataSize);
  return (
    <View style={styles.container}>
      {/* Menu */}
      <Menu
        title={title}
        background="#FFA000"
        goBack={() => {
          props.navigation.goBack();
        }}
      />

      {/* Custom Bar */}
      <View style={styles.barContainer}>
        <View style={[styles.bar, {width: dataSize + '%'}]}>
          <Text />
        </View>
      </View>

      {/* Page Count */}
      <View>
        <Text style={styles.pageCount}>
          {position}/{data.length}
        </Text>
      </View>

      {/* Survey */}
      <View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{data[position - 1].question}</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            tintColors={'#eaeaea'}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          {/* <MyCheckbox /> */}
          <Text>{data[position - 1].options.a}</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            tintColors={'#eaeaea'}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          {/* <MyCheckbox /> */}
          <Text>{data[position - 1].options.b}</Text>
        </View>
        <View style={styles.nextButton}>
          {position > 1 && (
            <View>
              <Button
                onPress={() => {
                  changePosition(position - 1);
                }}
                title="back"
                color="grey"
              />
            </View>
          )}
          {position === data.length || (
            <View>
              <Button
                onPress={() => {
                  changePosition(position + 1);
                }}
                title={english.saveNext}
                color="green"
              />
            </View>
          )}
          {position === data.length && (
            <View>
              <Button
                onPress={() => {
                  props.navigation.navigate('NewsFeed');
                }}
                title="Save & Finish"
                color="green"
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default JoinSurvey;
