import { shallow } from 'enzyme';
import Button from './index.js';

describe('<Button />', () => {
  it('render Button', () => {
    const wrapper = shallow(<Button size="large">hello, umi</Button>);
    expect(wrapper.prop('style').fontSize).toEqual(40);
    expect(wrapper.children().text()).toEqual('hello, umi');
  });
});
