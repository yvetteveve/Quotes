import { quote } from './quote';

describe('quote', () => {
  it('should create an instance', () => {
    expect(new quote(1,"","")).toBeTruthy();
  });
});
