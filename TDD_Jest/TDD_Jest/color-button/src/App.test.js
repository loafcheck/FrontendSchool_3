import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'change to blue!' });
  //버튼의 역할을 갖은 요소를 찾는데 안에있는 텍스트는 컨텐츠로 name: 'change to blue!'이 것을 갖고있어야한다.
  expect(button).toHaveStyle({ backgroundColor: 'red' });
  //기대식을 사용해서 기대할것은 (button)이다. toHaveStyle은 어떤스타일을 갖고있냐면 백그라운드로 빨간색인 스타일~
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('change to red!');

});
