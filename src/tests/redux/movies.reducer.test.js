import store  from '../../redux/store';

it('should have same initial state', () => {
    expect(store.getState().movies).toEqual({
        isLoading: false,
        error: false,
        list: [],
        genresIds: [],
    });
});
