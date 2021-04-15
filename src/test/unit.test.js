import { choseBookByKey } from '../redux/book/book.utils';
import { mockBooks } from './mock.data';

describe('unit test', () => {
  test('choseBookByKey: get an existing book', () => {
    expect(choseBookByKey(mockBooks, '/works/OL17499975W'))
      .toEqual(mockBooks[0]);
  });
  test('choseBookByKey: get a nonexisting book', () => {
    expect(choseBookByKey(mockBooks, '/works/OL123578W'))
      .toBeUndefined();
  });
});
