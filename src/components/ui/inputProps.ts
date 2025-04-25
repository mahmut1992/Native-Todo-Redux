import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export type {InputProps};
