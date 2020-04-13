import store, { actions } from './index';
import Http from '../http/provider';

describe('teste actions', () => {
  it('getImageSelected expect  setImageInit be commited', () => {
    const ob = {
      commit: jest.fn()
    };
    actions.getImageSelected(ob, 'data');
    expect(ob.commit).toBeCalledWith('setImageInit', 'data');
  });
  it('getPostsByUserId be commited', done => {
    Http.get = jest.fn(() => Promise.resolve({ data: { aqui: 'ok' } }));

    const ob = {
      commit: jest.fn()
    };
    const userId = 2;
    const promise = actions.getPostsByUserId(ob, userId);

    expect(ob.commit).toBeCalledWith('setLoading', true);
    expect(Http.get).toBeCalledWith('/posts?userId=2');

    promise.then(res => {
      expect(ob.commit).toBeCalledWith('setLoading', false);
      expect(ob.commit).toBeCalledWith('setPosts', res);
    });
    done();
  });
  it('getUsers be commited', done => {
    Http.get = jest.fn(() => Promise.resolve({ data: { aqui: 'ok' } }));

    const ob = {
      commit: jest.fn()
    };

    const promise = actions.getUsers(ob);

    expect(ob.commit).toBeCalledWith('setLoading', true);
    expect(Http.get).toBeCalledWith('/users');

    promise.then(res => {
      expect(ob.commit).toBeCalledWith('setLoading', false);
      expect(ob.commit).toBeCalledWith('setUsers', res);
    });
    done();
  });
});
