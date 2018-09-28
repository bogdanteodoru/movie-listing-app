/*
 * For more information on why did I use this approach, you can have a look here:
 * https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
 *
 * That being said, we are using this in combination with thunk middleware so we can have async
 * actions. Basically, if the action contains a promise property, then we wait for that promise to
 * resolve/reject and we map the action types based on the promise.
 *
 * A good example of this would be the one from movies.
 *
 * export function getMovies() {
 *    return {
 *        types: [ GET_MOVIES_LOAD, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR ],
 *        promise: (apiClient) => apiClient('/movie/now_playing')
 *    };
 * }
 *
 * As you can see, the action returns an object that has a promise property.
 * When this occurs, we handle that promise and wait for a result. Depending on
 * loading, success or error state we map the types [REQUEST, SUCCESS, FAILURE] with
 * the types from the action itself. In this way, we know when a API call is in loading, success
 * or error state.
 *
 * Error data and response data are then passed to the next action that are listened
 * in the specific reducer.
 */
export default function apiMiddleware(apiUtil) {
    return ({ dispatch, getState }) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const { promise, types, ...rest } = action;

            if (!promise) {
                return next(action);
            }

            const [ REQUEST, SUCCESS, FAILURE ] = types;
            next({ ...rest, type: REQUEST });

            const actionPromise = promise(apiUtil);

            actionPromise.then(
                (response) => next({ ...rest, response, type: SUCCESS }),
                (error) => next({ ...rest, error, type: FAILURE })
            ).catch((error) => next({ ...rest, error, type: FAILURE }));

            return actionPromise;
        };
    };
}
