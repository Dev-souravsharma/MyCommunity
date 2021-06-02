import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Menu from '../../Components/Menu';
import english from '../../utils/Language/String';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
let data = [
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
      {id: 4, ans: 'Yes', selected: false},
      {id: 5, ans: 'No', selected: false},
    ],
  },
  {
    id: 3,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: [
      {id: 6, ans: 'Yes', selected: false},
      {id: 7, ans: 'No', selected: false},
    ],
  },
  {
    id: 4,
    question:
      'should we learn react native , Android ,Flutter or Ios for mobile development',
    options: [
      {id: 8, ans: 'Yes', selected: false},
      {id: 9, ans: 'No', selected: false},
      {id: 10, ans: 'Nops', selected: false},
    ],
  },
];
const JoinSurvey = props => {
  const [position, changePosition] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [optionsData, setOptionsData] = useState(data);
  const [flag, setFlag] = useState(false);
  const {title} = props.route.params;
  const dataSize = (100 / (data.length - position + 1)).toFixed(2).toString();
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
          data={optionsData[position - 1].options}
          extraData={toggleCheckBox}
          renderItem={({item, index}) => {
            return (
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  tintColors={'#eaeaea'}
                  value={item.selected}
                  onValueChange={newValue => {
                    setToggleCheckBox(!toggleCheckBox);
                    let list = optionsData;
                    list[position - 1].options[index].selected = newValue;
                    // console.log(list[position - 1].options[0].selected);
                    setOptionsData(list);
                  }}
                />
                <Text>{item.ans}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />

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
