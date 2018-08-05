import { storiesOf } from '@storybook/vue';
import Demo from 'stories/demo';
import Pagination from 'components/Pagination';
import Divider from 'components/Divider';

const stories = storiesOf('Navigation|Pagination', module);

stories.add('default', () => ({
  render: h => {
    return (
      <Demo title="Default">
        <Pagination pages={10} activePage={1} />
      </Demo>
    );
  },
}));

stories.add('size', () => ({
  data() {
    return {
      activePage: 5,
    };
  },

  render() {
    return (
      <Demo title="Size">
        <Pagination
          prev
          last
          next
          first
          size="lg"
          pages={10}
          activePage={this.activePage}
          onSelect={this.handleSelect}
        />
        <Divider />
        <Pagination
          prev
          last
          next
          first
          size="md"
          pages={10}
          activePage={this.activePage}
          onSelect={this.handleSelect}
        />
        <Divider />
        <Pagination
          prev
          last
          next
          first
          size="sm"
          pages={10}
          activePage={this.activePage}
          onSelect={this.handleSelect}
        />
        <Divider />
        <Pagination
          prev
          last
          next
          first
          size="xs"
          pages={10}
          activePage={this.activePage}
          onSelect={this.handleSelect}
        />
      </Demo>
    );
  },

  methods: {
    handleSelect(eventKey) {
      this.activePage = eventKey;
    },
  },
}));