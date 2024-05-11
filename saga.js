// sagas.js
//import { put, takeEvery } from 'redux-saga/effects';
//import { incrementAsync } from './counterSlice'; // Assuming you have a counter slice

// Worker Saga: Increment async
function* incrementAsyncSaga() {
  yield put(incrementAsync()); // Dispatch incrementAsync action
}

// Watcher Saga: Listens for incrementAsync requests
export function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsyncSaga);
}
