import renderer from 'react-test-renderer';
import Data from '../Data';

test('My info', () => {
    const name  = renderer.create(Data.name);
    let tree = name.toJSON();
    expect(tree).toMatchSnapshot();

    const headline  = renderer.create(Data.headline);
    tree = headline.toJSON();
    expect(tree).toMatchSnapshot();

    const aboutme  = renderer.create(Data.aboutme);
    tree = aboutme.toJSON();
    expect(tree).toMatchSnapshot();
});