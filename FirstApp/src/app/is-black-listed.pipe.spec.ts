import { IsBlackListedPipe } from './is-black-listed.pipe';

describe('IsBlackListedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsBlackListedPipe();
    expect(pipe).toBeTruthy();
  });
});
