import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StatusBoxProps} from '../../models/ui/statusBoxProps';
import {
  ArrangeHorizontalCircle,
  Clock,
  CloseCircle,
  InfoCircle,
  PlayCircle,
  RepeatCircle,
  ShieldCross,
  TickCircle,
} from 'iconsax-react-nativejs';
import {todoStatus} from '../../utils/constants';

const StatusBox: React.FC<StatusBoxProps> = ({item}) => {
  const setStatusIcon = () => {
    switch (item.status) {
      case todoStatus.open:
        return <PlayCircle size={40} color="#fff" variant="Outline" />;

      case todoStatus.closeed:
        return <CloseCircle size={40} color="#fff" variant="Outline" />;
      case todoStatus.development:
        return <RepeatCircle size={40} color="#fff" variant="Outline" />;

      case todoStatus.complate:
        return <TickCircle size={40} color="#fff" variant="Outline" />;

      case todoStatus.test:
        return (
          <ArrangeHorizontalCircle size={40} color="#fff" variant="Outline" />
        );

      default:
        return <InfoCircle size={40} color="#37d57a" variant="Outline" />;
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      {setStatusIcon()}
      <Text style={{fontSize: 20, color: 'white', marginTop: 15}}>
        {item.title} : {item.count}{' '}
      </Text>
    </View>
  );
};

export default StatusBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    height: 150,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
});
