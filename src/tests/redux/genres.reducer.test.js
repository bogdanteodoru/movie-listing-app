import store  from '../../redux/store';

it('should have same initial state', () => {
    expect(store.getState().genres).toEqual({
        isLoading: false,
        error: false,
        list: []
    });
});
