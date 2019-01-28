import { Quotes } from './quote';

describe('quote', () => {
  it('should create an instance', () => {
    expect(new Quotes(1,"","",new Date())).toBeTruthy();
  });
});
