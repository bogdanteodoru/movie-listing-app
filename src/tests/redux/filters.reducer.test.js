import store  from '../../redux/store';
import { changeRating } from '../../redux/modules/filters/filters.reducer'

it('should be able to change rating', () => {
    store.dispatch(changeRating(5));
    expect(store.getState().filters).toEqual(
        {
            genres: [],
            rating: 5
        }
    );
});
