import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Menu from '../../Components/Menu';
import english from '../../utils/Language/String';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
const data = [
  {
    id: 1,
    question: 'Is this a question test for CC mobile application?',
    options: [
      {id: 1, ans: 'Yes', selected: false},
      {id: 2, ans: 'No', selected: false},
      {id: 3, ans: 'None', selected: false},
    ],
  },
  {
    id: 2,
    question:
      'Should the board implement the parking passes for the community?',
    options: [
      {id: 1, ans: 'Yes', selected: false},
      {id: 2, ans: 'No', selected: false},
    ],
  },
  {
    id: 3,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: [
      {id: 1, ans: 'Yes', selected: false},
      {id: 2, ans: 'No', selected: false},
    ],
  },
  {
    id: 4,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: [
      {id: 1, ans: 'Yes', selected: false},
      {id: 2, ans: 'No', selected: false},
      {id: 3, ans: 'Nops', selected: false},
    ],
  },
];
// function MyCheckbox() {
//   return data.map(function (key, array) {
//     return (
//       <View>
//         <Text>{}</Text>
//       </View>
//     );
//   });
// }
const JoinSurvey = props => {
  const [position, changePosition] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [getIndex, setIndex] = useState(-1);
  const {title} = props.route.params;
  const dataSize = (100 / (data.length - position + 1)).toFixed(2).toString();
  // console.log(data[0].options);
  console.log('bool', toggleCheckBox);
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
        {/* CheckBox  */}
        <FlatList
          data={data[position - 1].options}
          renderItem={({item, index}) => {
            return (
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  tintColors={'#eaeaea'}
                  disabled={false}
                  value={toggleCheckBox}
                  // onValueChange={newValue => {
                  //   setIndex(index);
                  //   setToggleCheckBox((newValue = index === getIndex));
                  //   if (newValue === true) {
                  //     setToggleCheckBox(false);
                  //   }
                  //   console.log(
                  //     'Checkbox clicked',
                  //     index,
                  //     position - 1,
                  //     newValue,
                  //     item.ans,
                  //   );
                  // }}
                />
                <Text>{item.ans}</Text>
              </View>
            );
          }}
          // keyExtracator={index => index.toString()}
        />

        {/* <View style={styles.checkBoxContainer}>
          <CheckBox
            tintColors={'#eaeaea'}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>{checkBoxArray[0].b}</Text>
        </View> */}
        {/* Button */}
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
