import { storiesOf } from '@storybook/vue';
import Demo from 'stories/demo';

import InputPicker from 'components/InputPicker';

const stories = storiesOf('Data Entry|InputPicker', module);
const data = [
  {
    label: 'Eugenia',
    value: 'Eugenia',
    role: 'Master',
  },
  {
    label: 'Kariane',
    value: 'Kariane',
    role: 'Master',
  },
  {
    label: 'Louisa',
    value: 'Louisa',
    role: 'Master',
  },
  {
    label: 'Marty',
    value: 'Marty',
    role: 'Master',
  },
  {
    label: 'Kenya',
    value: 'Kenya',
    role: 'Master',
  },
  {
    label: 'Hal',
    value: 'Hal',
    role: 'Developer',
  },
  {
    label: 'Julius',
    value: 'Julius',
    role: 'Developer',
  },
  {
    label: 'Travon',
    value: 'Travon',
    role: 'Developer',
  },
  {
    label: 'Vincenza',
    value: 'Vincenza',
    role: 'Developer',
  },
  {
    label: 'Dominic',
    value: 'Dominic',
    role: 'Developer',
  },
  {
    label: 'Pearlie',
    value: 'Pearlie',
    role: 'Guest',
  },
  {
    label: 'Tyrel',
    value: 'Tyrel',
    role: 'Guest',
  },
  {
    label: 'Jaylen',
    value: 'Jaylen',
    role: 'Guest',
  },
  {
    label: 'Rogelio',
    value: 'Rogelio',
    role: 'Guest',
  },
];

stories.add('default', () => ({
  render() {
    return (
      <Demo title="Default">
        <InputPicker data={data} style={{ width: '224px' }} />
      </Demo>
    );
  },
}));

stories.add('block', () => ({
  render() {
    return (
      <Demo title="Default">
        <InputPicker block data={data} />
      </Demo>
    );
  },
}));

stories.add('groupBy', () => ({
  render() {
    return (
      <Demo title="groupBy">
        <InputPicker data={data} groupBy="role" style={{ width: '224px' }} />
      </Demo>
    );
  },
}));